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
                    <code className="text-green-400 font-bold min-w-12">pwd</code>
                    <span className="text-gray-400 text-sm">Print Working Directory. "Where am I?"</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <code className="text-green-400 font-bold min-w-12">ls</code>
                    <span className="text-gray-400 text-sm">List. "What's in this room?"</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <code className="text-green-400 font-bold min-w-12">cd</code>
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
      id: 'bash-4',
      title: "Permission Control",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-gray-300">
              Linux file permissions are 3 sets of 3 bits: <strong>User, Group, Others</strong>. Each set can Read (r), Write (w), or Execute (x).
           </p>
           <div className="bg-[#161b22] border border-github-border p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">Chmod Calculator</h4>
              <div className="grid grid-cols-3 gap-4 text-center text-sm mb-6">
                 <div className="bg-black/30 p-2 rounded">
                    <div className="font-bold text-green-400">4</div>
                    <div className="text-gray-400">Read (r)</div>
                 </div>
                 <div className="bg-black/30 p-2 rounded">
                    <div className="font-bold text-green-400">2</div>
                    <div className="text-gray-400">Write (w)</div>
                 </div>
                 <div className="bg-black/30 p-2 rounded">
                    <div className="font-bold text-green-400">1</div>
                    <div className="text-gray-400">Execute (x)</div>
                 </div>
              </div>
              <div className="bg-[#0d1117] p-4 rounded text-center">
                 <code className="text-blue-400 text-lg">chmod 755 script.sh</code>
                 <p className="text-gray-500 text-xs mt-2">
                    User: 7 (rwx) | Group: 5 (r-x) | Others: 5 (r-x)
                 </p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'bash-5',
      title: "Environment Variables",
      type: 'read',
      content: (
        <div className="space-y-6">
           <p className="text-gray-300">
              Variables that define the behavior of the environment for the user. They are dynamic values that affect the processes on the system.
           </p>
           <div className="space-y-4">
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-purple-400 block mb-2">printenv</code>
                 <p className="text-xs text-gray-500">List all environment variables.</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-purple-400 block mb-2">echo $HOME</code>
                 <p className="text-xs text-gray-500">Print the value of a specific variable.</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded-lg border border-github-border">
                 <code className="text-purple-400 block mb-2">export MY_VAR="value"</code>
                 <p className="text-xs text-gray-500">Set a new global variable.</p>
              </div>
           </div>
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
