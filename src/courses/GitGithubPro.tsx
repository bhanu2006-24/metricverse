import React from 'react';
import { Course } from '../types';

export const GitGithubPro: Course = {
  id: 'git-github-pro',
  title: "Git & GitHub Pro",
  icon: "🌳",
  subtitle: "Advanced Version Control",
  lessons: [
    {
      id: 'git-1',
      title: "Think in Graphs",
      type: 'read',
      content: (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-github-dark border border-blue-500/30 rounded-3xl p-8">
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-white mb-2">The DAG</h3>
                 <p className="text-blue-200/80 max-w-xl">
                    Git is not just specific commands; it's a Directed Acyclic Graph (DAG) of commits. Understanding the "tree" structure is key.
                 </p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'git-2',
      title: "Golden Commands",
      type: 'read',
      content: (
        <div className="space-y-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-gray-800 pb-2">Top 3 Daily Commands</h4>
              <div className="grid gap-4">
                 <div className="group bg-[#161b22] border border-github-border rounded-xl p-5 hover:border-blue-500 transition-all">
                    <div className="flex justify-between items-center mb-2">
                       <code className="text-blue-400 font-bold">git status</code>
                       <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-900 px-2 py-1 rounded">Observation</span>
                    </div>
                    <p className="text-gray-400 text-sm">Always run this first. Know your state.</p>
                 </div>
                 <div className="group bg-[#161b22] border border-github-border rounded-xl p-5 hover:border-green-500 transition-all">
                    <div className="flex justify-between items-center mb-2">
                       <code className="text-green-400 font-bold">git commit -am "msg"</code>
                       <span className="text-[10px] uppercase font-bold text-gray-600 bg-gray-900 px-2 py-1 rounded">Action</span>
                    </div>
                    <p className="text-gray-400 text-sm">Add modified files and commit in one go.</p>
                 </div>
              </div>
        </div>
      )
    },
    {
      id: 'git-3',
      title: "Collaboration Cycle",
      type: 'read',
      content: (
           <div className="bg-[#050505] border border-github-border rounded-2xl p-8 text-center">
              <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-8">The Loop</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
                 <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-gray-300">Local</span>
                 </div>
                 <div className="h-0.5 w-12 bg-gray-700 relative"><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">PUSH</span></div>
                 <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-blue-300">Remote</span>
                 </div>
              </div>
           </div>
      )
    },
    {
      id: 'git-practice',
      title: "CLI Practice",
      type: 'practice',
      practiceMode: 'bash',
      initialCode: 'git --version\ngit status',
      content: <p className="mb-4 text-gray-300">Practice your Git commands in the terminal below.</p>
    }
  ]
};
