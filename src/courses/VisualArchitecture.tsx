import React from 'react';

export const VisualArchitecture = {
  title: "Visual Architecture",
  icon: "⚡",
  subtitle: "SVG Aesthetics",
  content: (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <p className="text-[#8b949e]">
        Your GitHub profile is your personal brand. Consistency in color and style establishes professionalism. Metricverse allows you to adhere to strict design systems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#bc8cff] transition-colors">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#bc8cff] to-[#58a6ff] mb-4 group-hover:scale-110 transition-transform"></div>
          <h4 className="text-white font-bold mb-2">Modern Gradient</h4>
          <p className="text-[10px] text-[#8b949e]">High-contrast gradients that pop against dark mode (Default).</p>
        </div>
        <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#3fb950] transition-colors">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#0d1117] border-2 border-[#3fb950] mb-4 font-mono flex items-center justify-center text-[#3fb950] text-xs">
             &gt;_
          </div>
          <h4 className="text-white font-bold mb-2">Terminal / Hacker</h4>
          <p className="text-[10px] text-[#8b949e]">Monospaced fonts and neon green accents.</p>
        </div>
        <div className="bg-[#161b22] p-6 rounded-2xl border border-[#30363d] text-center group hover:border-[#ff7b72] transition-colors">
          <div className="w-16 h-16 mx-auto rounded-full bg-white border-4 border-black mb-4 flex items-center justify-center">
             <div className="w-8 h-8 bg-black"></div>
          </div>
          <h4 className="text-white font-bold mb-2">Neo-Brutalism</h4>
          <p className="text-[10px] text-[#8b949e]">Bold strokes, hard shadows, and vibrant colors.</p>
        </div>
      </div>

      <div className="bg-[#161b22] p-8 rounded-2xl border border-[#30363d]">
        <h4 className="text-[#fff] font-black text-xs uppercase mb-6 tracking-widest">Theme Harmony Rule</h4>
        <div className="flex flex-col gap-4">
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
             <div className="w-8 h-8 rounded-lg bg-purple-500"></div>
             <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Good</span> (Analogous)</span>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg bg-red-500"></div>
             <div className="w-8 h-8 rounded-lg bg-green-500"></div>
             <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Risky</span> (Clashing if not handled well)</span>
           </div>
        </div>
      </div>
    </div>
  )
};
