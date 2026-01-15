import React, { useState, useEffect } from 'react';

interface MetricEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  svgContent: string;
  title: string;
  themeColor: string;
}

const MetricEditorModal: React.FC<MetricEditorModalProps> = ({ isOpen, onClose, svgContent, title, themeColor }) => {
  const [code, setCode] = useState(svgContent);
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    // Apply theme color to the initial SVG content when modal opens or color changes
    const customized = svgContent
      .replace(/#58a6ff/g, themeColor)
      .replace(/#bc8cff/g, themeColor === '#58a6ff' ? '#bc8cff' : themeColor);
    setCode(customized);
  }, [svgContent, themeColor]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopyState('copied');
    setTimeout(() => setCopyState('idle'), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#0d1117] w-full max-w-4xl rounded-2xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#30363d] bg-[#161b22]">
          <div>
             <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
             <p className="text-xs text-gray-500 font-mono">customize & export</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#30363d] rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            
            {/* Sidebar Controls */}
            <div className="w-full md:w-64 bg-[#0d1117] border-r border-[#30363d] p-4 space-y-6 flex-shrink-0">
                <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest block mb-3">View Mode</label>
                    <div className="flex bg-[#161b22] p-1 rounded-lg border border-[#30363d]">
                        <button 
                          onClick={() => setActiveTab('preview')}
                          className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'preview' ? 'bg-[#58a6ff]/20 text-[#58a6ff]' : 'text-gray-400 hover:text-white'}`}
                        >
                            Preview
                        </button>
                        <button 
                          onClick={() => setActiveTab('code')}
                          className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'code' ? 'bg-[#58a6ff]/20 text-[#58a6ff]' : 'text-gray-400 hover:text-white'}`}
                        >
                            Code
                        </button>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-500/20">
                    <h4 className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Pro Tip
                    </h4>
                    <p className="text-[10px] text-blue-200/70 leading-relaxed">
                        You can edit the SVG code directly to change specific text, sizes, or stroke widths before copying.
                    </p>
                </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 bg-[#050505] relative flex flex-col min-w-0 overflow-hidden">
                {activeTab === 'preview' ? (
                    <div className="flex-1 flex items-center justify-center p-8 bg-[url('/grid.svg')] overflow-auto">
                         <div className="relative z-10 shadow-2xl w-full flex justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-4xl" dangerouslySetInnerHTML={{ __html: code }} />
                    </div>
                ) : (
                    <textarea 
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-1 w-full bg-[#0d1117] text-gray-300 font-mono text-sm leading-relaxed p-6 outline-none resize-none"
                        spellCheck={false}
                    />
                )}

                {/* Footer Actions */}
                <div className="p-4 border-t border-[#30363d] bg-[#161b22] flex justify-end gap-3">
                    <button 
                        onClick={() => setCode(svgContent)} // Reset
                        className="px-4 py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:bg-[#30363d] transition-colors"
                    >
                        Reset
                    </button>
                    <button 
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-bold transition-all shadow-lg shadow-green-900/20"
                    >
                        {copyState === 'copied' ? (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                Copy Code
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MetricEditorModal;
