
import React, { useState } from 'react';
import { copyToClipboard, downloadSVG } from '../utils/helpers';

interface MetricCardProps {
  title: string;
  svgContent: string;
  id: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, svgContent, id }) => {
  const [copied, setCopied] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code' | 'markdown'>('preview');

  const handleCopy = async () => {
    await copyToClipboard(svgContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMd = async () => {
    // Generate a clean markdown link for GitHub READMEs
    const md = `[![${title}](https://metricverse.app/api/${id}?user=YOUR_USERNAME)](https://github.com/bhanu2006-24/metricverse)`;
    await copyToClipboard(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleDownload = () => {
    downloadSVG(svgContent, `metricverse-${id}`);
  };

  return (
    <div className="group relative flex flex-col bg-[#0d1117] border border-[#30363d] rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-[#58a6ff]/50 hover:shadow-[0_0_80px_rgba(88,166,255,0.15)]">
      {/* Visual Header */}
      <div className="p-6 pb-0 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${id.includes('pro') || id.includes('matrix') ? 'bg-[#bc8cff]' : 'bg-[#3fb950]'} animate-pulse`}></div>
            <h3 className="text-lg font-black text-white/90 group-hover:text-white transition-colors tracking-tight">{title}</h3>
         </div>
         <div className="flex bg-[#161b22] rounded-full p-1 border border-[#30363d] shadow-inner">
            <button 
              onClick={() => setViewMode('preview')}
              className={`text-[9px] font-black uppercase px-3 py-1 rounded-full transition-all ${viewMode === 'preview' ? 'bg-[#30363d] text-white shadow-lg' : 'text-[#8b949e]'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setViewMode('code')}
              className={`text-[9px] font-black uppercase px-3 py-1 rounded-full transition-all ${viewMode === 'code' ? 'bg-[#30363d] text-white shadow-lg' : 'text-[#8b949e]'}`}
            >
              SVG
            </button>
            <button 
              onClick={() => setViewMode('markdown')}
              className={`text-[9px] font-black uppercase px-3 py-1 rounded-full transition-all ${viewMode === 'markdown' ? 'bg-[#30363d] text-white shadow-lg' : 'text-[#8b949e]'}`}
            >
              MD
            </button>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="relative p-8 min-h-[300px] flex items-center justify-center overflow-hidden bg-grid-white/[0.02]">
        {viewMode === 'preview' && (
          <div 
            className="w-full max-w-full flex justify-center drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          />
        )}
        {viewMode === 'code' && (
          <div className="w-full h-full max-h-[260px] overflow-auto bg-[#050505] p-6 rounded-2xl border border-[#30363d] font-mono text-[10px] text-[#58a6ff] whitespace-pre select-all custom-scrollbar">
            {svgContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </div>
        )}
        {viewMode === 'markdown' && (
          <div className="w-full bg-[#050505] p-8 rounded-2xl border border-[#30363d] space-y-4">
             <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-[#8b949e] uppercase tracking-widest">GitHub Profile Integration</p>
                <span className="bg-[#bc8cff]/10 text-[#bc8cff] text-[8px] px-2 py-0.5 rounded-full font-black uppercase">Markdown</span>
             </div>
             <code className="block font-mono text-[11px] text-[#bc8cff] break-all bg-[#161b22] p-4 rounded-xl border border-[#30363d] leading-relaxed">
                {`[![${title}](https://metricverse.app/api/${id}?user=USERNAME)](https://github.com/bhanu2006-24/metricverse)`}
             </code>
             <button 
               onClick={handleCopyMd}
               className="w-full py-4 bg-gradient-to-r from-[#bc8cff] to-[#58a6ff] rounded-xl text-[10px] font-black text-white hover:opacity-90 transition-all uppercase tracking-widest shadow-xl"
             >
               {copiedMd ? 'Snippet Captured!' : 'Copy MD for README'}
             </button>
          </div>
        )}
      </div>
      
      {/* Bottom Action Bar */}
      <div className="p-6 pt-0 mt-auto flex flex-col gap-4">
          <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className={`flex-1 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 border ${
                  copied 
                    ? 'bg-[#238636] border-[#238636] text-white shadow-[0_0_30px_rgba(35,134,54,0.3)]' 
                    : 'bg-[#161b22] text-[#8b949e] border-[#30363d] hover:border-[#58a6ff]/50 hover:text-white'
                }`}
              >
                {copied ? 'Captured!' : 'Copy SVG'}
              </button>
              
              <button
                onClick={handleDownload}
                className="w-14 h-14 bg-[#161b22] border border-[#30363d] hover:border-[#bc8cff]/50 text-[#8b949e] hover:text-[#bc8cff] rounded-2xl flex items-center justify-center transition-all shadow-lg group-hover:bg-[#1c2128]"
                title="Download SVG file"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </button>
          </div>

          {/* Live API CTA - COMING SOON */}
          <div className="relative group/tooltip">
            <button 
              disabled 
              className="w-full py-3 bg-[#0d1117] border border-dashed border-[#30363d] rounded-xl text-[9px] font-bold text-[#444] uppercase tracking-[0.3em] cursor-not-allowed transition-all"
            >
              Live API Protocol <span className="text-[#58a6ff]/40">(Coming Soon)</span>
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#161b22] border border-[#30363d] text-[#8b949e] text-[8px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase font-black tracking-widest">
              Dynamic Hosting Infrastructure under construction
            </div>
          </div>
      </div>
    </div>
  );
};

export default MetricCard;
