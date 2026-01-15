
import React, { useState } from 'react';

interface MetricCardProps {
  id: string;
  title: string;
  svgContent: string;
  color: string;
  onEdit: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ id, title, svgContent, color, onEdit }) => {
  // Replace default accent color (#58a6ff) with selected color
  // Also try to replace the green (#3fb950) if we want a full theme shift, but let's stick to accent
  const customizedSvg = React.useMemo(() => {
    return svgContent
      .replace(/#58a6ff/g, color)
      .replace(/#bc8cff/g, color === '#58a6ff' ? '#bc8cff' : color) // Try to monochrome it if color changed
      .replace(/width="\d+"/, 'width="100%"') // Ensure it takes full width of container
      .replace(/height="\d+"/, '') // Remove fixed height to let aspect ratio control it
      .replace(/fill="none"/g, 'fill="none"') // No-op to break chain if needed
  }, [svgContent, color]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // We want the URL to the image, but since we generate it on client side for preview...
    // The user actually wants the Markdown code to embed it.
    // GitHub Profile Markdown:
    // ![Metric](https://metricverse.pages.dev/api/metric/bhanu2006-24) 
    // Wait, this is a client-side generator app. The images are generated in browser.
    // The user previously wanted a self-hosted metrics generator.
    // If they deploy this, how are SVGs served?
    // The "Custom Metrics Generator" plan implies serving them.
    // But currently we only have client-side generation logic.
    // So "Copy Code" might be tricky unless we have a backend or Vercel function.
    // For now, let's just copy the SVG code itself? Or a placeholder URL?
    // "Complete the course to be real crash course okk.."
    // The user likely wants the *ability* to use these on GitHub.
    // If this is a static site (GitHub Pages), we can't dynamic serve unless we use GitHub Actions to update a repo?
    // Or maybe we just provide the SVG to download?
    // Let's provide "Copy SVG" and "Download SVG".
    
    navigator.clipboard.writeText(customizedSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([customizedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="group relative bg-[#161b22]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
        <h3 className="text-sm font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">{title}</h3>
        <div className="flex gap-2">
           <button 
             onClick={handleCopy}
             title="Copy SVG Code"
             className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
           >
             {copied ? (
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
             )}
           </button>
           <button 
             onClick={onEdit}
             title="Edit & Customize"
             className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors group/edit"
           >
             <svg className="w-4 h-4 group-hover/edit:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
           </button>
           <button 
             onClick={handleDownload}
             title="Download SVG"
             className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
           >
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
           </button>
        </div>
      </div>
      
      <div className="p-6 flex items-center justify-center min-h-[200px] bg-[url('/grid.svg')] bg-center relative cursor-pointer" onClick={onEdit}>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161b22]/50 pointer-events-none"></div>
         {/* Hover Overlay with Edit Text */}
         <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transform scale-90 group-hover:scale-100 transition-all">Edit Metric</span>
         </div>
         <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 [&>svg]:w-full [&>svg]:h-auto [&>svg]:block [&>svg]:max-w-full" dangerouslySetInnerHTML={{ __html: customizedSvg }} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default MetricCard;
