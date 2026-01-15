
import React, { useState } from 'react';

interface MetricCardProps {
  id: string;
  title: string;
  svgContent: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ id, title, svgContent }) => {
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
    
    navigator.clipboard.writeText(svgContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
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
             onClick={handleDownload}
             title="Download SVG"
             className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
           >
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
           </button>
        </div>
      </div>
      
      <div className="p-6 flex items-center justify-center min-h-[200px] bg-[url('/grid.svg')] bg-center relative">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161b22]/50 pointer-events-none"></div>
         <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default MetricCard;
