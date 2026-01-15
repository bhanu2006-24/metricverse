import React from 'react';
import { Course } from '../types';

export const VisualArchitecture: Course = {
  id: 'visual-architecture',
  title: "Visual Architecture",
  icon: "⚡",
  subtitle: "SVG Aesthetics",
  lessons: [
    {
      id: 'va-1',
      title: "Design Systems",
      type: 'read',
      content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-github-muted">
            Consistency in color and style establishes professionalism. Stick to a theme.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-github-secondary p-6 rounded-2xl border border-github-border text-center group hover:border-[#bc8cff] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-br from-[#bc8cff] to-github-accent mb-4 group-hover:scale-110 transition-transform"></div>
              <h4 className="text-white font-bold mb-2">Modern</h4>
            </div>
            <div className="bg-github-secondary p-6 rounded-2xl border border-github-border text-center group hover:border-[#3fb950] transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-github-dark border-2 border-[#3fb950] mb-4 font-mono flex items-center justify-center text-[#3fb950] text-xs">
                 &gt;_
              </div>
              <h4 className="text-white font-bold mb-2">Hacker</h4>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'va-2',
      title: "Color Harmony",
      type: 'read',
      content: (
          <div className="bg-github-secondary p-8 rounded-2xl border border-github-border">
            <h4 className="text-white font-black text-xs uppercase mb-6 tracking-widest">Theme Harmony Rule</h4>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
                 <div className="w-8 h-8 rounded-lg bg-purple-500"></div>
                 <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Good</span> (Analogous)</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-lg bg-red-500"></div>
                 <div className="w-8 h-8 rounded-lg bg-green-500"></div>
                 <span className="text-gray-400 text-sm">= <span className="text-white font-bold">Risky</span> (Clashing)</span>
               </div>
            </div>
          </div>
      )
    },
    {
       id: 'va-practice',
       title: "SVG Practice",
       type: 'practice',
       practiceMode: 'markdown',
       initialCode: '<img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" />',
       content: <p className="mb-4 text-gray-300">Embed an SVG in Markdown to see how it looks.</p>
    }
  ]
};
