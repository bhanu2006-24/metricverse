import React from 'react';

export const GitGithubPro = {
  title: "Git & GitHub Pro",
  icon: "🌳",
  subtitle: "Advanced Version Control",
  content: (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
       {/* Concept Hero */}
       <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-[#0d1117] border border-blue-500/30 rounded-3xl p-8">
          <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-2">Think in Graphs</h3>
             <p className="text-blue-200/80 max-w-xl">
                Git is not just specific commands; it's a Directed Acyclic Graph (DAG) of commits. Understanding the "tree" structure is the key to mastering <code>rebase</code>, <code>merge</code>, and complex workflows.
             </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       </div>

       {/* The Golden Commands Expanded */}
       <div className="space-y-8">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-gray-800 pb-2">Top 5 Daily Commands</h4>
          <div className="grid gap-4">
             <div className="group bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-blue-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                   <code className="text-blue-400 font-bold">git status</code>
                   <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-900 px-2 py-1 rounded">Observation</span>
                </div>
                <p className="text-gray-400 text-sm">Always run this first. It tells you what stage your files are in (Untracked, Staged, Modified).</p>
             </div>
             
             <div className="group bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-green-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                   <code className="text-green-400 font-bold">git commit -am "message"</code>
                   <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-900 px-2 py-1 rounded">Action</span>
                </div>
                <p className="text-gray-400 text-sm">Combines `git add .` (for modified files) and `git commit` into one swift command. Speed is key.</p>
             </div>

             <div className="group bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-purple-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                   <code className="text-purple-400 font-bold">git checkout -b feature/xyz</code>
                   <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-900 px-2 py-1 rounded">Branching</span>
                </div>
                <p className="text-gray-400 text-sm">Never code on main! Creates and switches to a new branch immediately.</p>
             </div>
          </div>
       </div>

       {/* Visual Diagram of Workflow */}
       <div className="bg-[#050505] border border-[#30363d] rounded-2xl p-8 text-center">
          <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-8">The Collaboration Cycle</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400">💻</div>
                <span className="font-bold text-gray-300">Local</span>
             </div>
             <div className="h-0.5 w-12 bg-gray-700 relative"><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">PUSH</span></div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-400">☁️</div>
                <span className="font-bold text-blue-300">Remote</span>
             </div>
             <div className="h-0.5 w-12 bg-gray-700 relative"><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">PR</span></div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center text-green-400">🌱</div>
                <span className="font-bold text-green-300">Main</span>
             </div>
          </div>
       </div>
    </div>
  )
};
