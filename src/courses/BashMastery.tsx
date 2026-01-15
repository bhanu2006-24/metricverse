import React from 'react';
import { Course } from '../types';

export const BashMastery: Course = {
  id: 'bash-mastery',
  title: "Bash Mastery",
  subtitle: "Command Line Power",
  icon: "💻",
  lessons: [
    {
      id: 'bash-1',
      title: "Navigation Identity",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-xl text-gray-300 font-light">
             The terminal is your home. Navigating it should be as natural as walking through your house.
           </p>
           <div className="bg-[#161b22] border border-github-border p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">Core Commands</h4>
              <ul className="space-y-4">
                 <li className="flex items-start gap-4">
                    <code className="text-green-400 font-bold min-w-[3rem]">pwd</code>
                    <span className="text-gray-400 text-sm">Print Working Directory. "Where am I?"</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <code className="text-green-400 font-bold min-w-[3rem]">ls</code>
                    <span className="text-gray-400 text-sm">List. "What's in this room?"</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <code className="text-green-400 font-bold min-w-[3rem]">cd</code>
                    <span className="text-gray-400 text-sm">Change Directory. "Go to the kitchen."</span>
                 </li>
              </ul>
           </div>
        </div>
      )
    },
    {
      id: 'bash-2',
      title: "Creation & Destruction",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-gray-300">
             God-mode enabled. Create and destroy files instantly.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-blue-400 block mb-2">mkdir foldername</code>
                 <p className="text-xs text-gray-500">Make Directory</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-blue-400 block mb-2">touch filename.txt</code>
                 <p className="text-xs text-gray-500">Create empty file</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-red-400 block mb-2">rm filename</code>
                 <p className="text-xs text-gray-500">Remove File (Forever)</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-red-400 block mb-2">rm -rf foldername</code>
                 <p className="text-xs text-gray-500">Remove Directory (Recursive, Force)</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'bash-3',
      title: "Piping Power",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-gray-300">
             The Pipe <code>|</code> is the most powerful character. It takes the output of one command and feeds it into another.
           </p>
           <div className="bg-black/30 p-4 rounded-lg font-mono text-sm">
              <span className="text-green-400">cat</span> large_file.txt <span className="text-purple-400">|</span> <span className="text-blue-400">grep</span> "error"
           </div>
           <p className="text-xs text-gray-500">Finds all lines containing "error" in a large file.</p>
        </div>
      )
    },
    {
      id: 'bash-practice',
      title: "Terminal Playground",
      type: 'practice',
      practiceMode: 'bash',
      content: <p className="mb-4 text-gray-300">Try running some commands! This is a real sandboxed environment.</p>,
      initialCode: 'echo "Hello Metricverse"\nls -la\nwhoami'
    }
  ]
};
