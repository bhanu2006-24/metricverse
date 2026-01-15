import React from 'react';

export const MathLatex = {
  title: "Math & LaTeX",
  icon: "∑",
  subtitle: "Scientific Documentation",
  content: (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
       <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            For data scientists, researchers, and algorithm engineers, mathematical precision is non-negotiable. GitHub supports MathJax/KaTeX rendering directly in Markdown files.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inline Math */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-teal-400">Inline Math</span> <code>$ ... $</code>
             </h4>
             <p className="text-sm text-gray-400 mb-4">
                Use single dollar signs to embed math within a sentence.
             </p>
             <div className="bg-black/30 p-3 rounded mb-4 font-mono text-xs text-gray-300">
                {`The energy comes from $E = mc^2$.`}
             </div>
             <div className="p-3 bg-white/5 rounded text-gray-200">
                The energy comes from <span className="font-serif italic font-bold">E = mc<sup>2</sup></span>.
             </div>
          </div>

          {/* Block Math */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-teal-400">Block Math</span> <code>$$ ... $$</code>
             </h4>
             <p className="text-sm text-gray-400 mb-4">
                Use double dollar signs for centered, standalone equations.
             </p>
             <div className="bg-black/30 p-3 rounded mb-4 font-mono text-xs text-gray-300">
                {`$$ \\sum_{i=1}^n i = \\frac{n(n+1)}{2} $$`}
             </div>
             <div className="p-3 bg-white/5 rounded text-gray-200 text-center font-serif text-lg">
                ∑<sub>i=1</sub><sup>n</sup> i = <span className="inline-block align-middle text-center"><span className="block border-b border-gray-400">n(n+1)</span><span className="block">2</span></span>
             </div>
          </div>
       </div>

       {/* Symbols Cheat Sheet */}
       <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Common Symbols Cheat Sheet</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {[
                { s: '\\alpha', r: 'α', d: 'Alpha' },
                { s: '\\beta', r: 'β', d: 'Beta' },
                { s: '\\infty', r: '∞', d: 'Infinity' },
                { s: '\\rightarrow', r: '→', d: 'Arrow' },
                { s: '\\sqrt{x}', r: '√x', d: 'Root' },
                { s: '\\frac{a}{b}', r: 'a/b', d: 'Fraction' },
                { s: '\\cdot', r: '·', d: 'Dot' },
                { s: '\\approx', r: '≈', d: 'Approx' }
             ].map((sym, i) => (
                <div key={i} className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg text-center hover:border-teal-500/50 transition-colors cursor-help group" title={`Rendered: ${sym.r}`}>
                   <code className="text-teal-400 text-xs">{sym.s}</code>
                   <div className="text-white font-serif mt-2 text-lg group-hover:scale-110 transition-transform">{sym.r}</div>
                </div>
             ))}
          </div>
       </div>
    </div>
  )
};
