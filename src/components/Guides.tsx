import React, { useState } from 'react';
import { 
  MarkdownDeepDive, 
  MathLatex, 
  GitGithubPro, 
  ProfileEngineering, 
  VisualArchitecture 
} from '../courses';

const Guides: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<number>(0);
  const [mdInput, setMdInput] = useState('# Hello World!\n\nThis is a **Markdown Previewer**.\n\n- Bullet 1\n- Bullet 2');

  const courses = [
    MarkdownDeepDive,
    MathLatex,
    GitGithubPro,
    ProfileEngineering,
    VisualArchitecture
  ];

  return (
    <div className="py-12 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Metricverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bc8cff] to-[#58a6ff]">Academy</span>
        </h2>
        <p className="text-[#8b949e] text-lg font-light tracking-wide">Master the art of Developer Brand Engineering.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/3 space-y-4 sticky top-24">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-[2rem] p-4 space-y-2">
            {courses.map((course, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCourse(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group flex items-center gap-4 ${
                  activeCourse === idx 
                    ? 'bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' 
                    : 'bg-transparent border-transparent hover:bg-[#161b22] hover:border-[#30363d]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${activeCourse === idx ? 'bg-black text-white' : 'bg-[#161b22] text-gray-400 group-hover:text-white'}`}>
                   {course.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm uppercase tracking-tight ${activeCourse === idx ? 'text-black' : 'text-gray-300 group-hover:text-white'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-[10px] uppercase font-bold ${activeCourse === idx ? 'text-black/60' : 'text-gray-600'}`}>
                    {course.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-[2rem]">
            <h4 className="text-white font-black text-[10px] uppercase mb-4 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse"></span>
              Markdown Playground
            </h4>
            <div className="flex flex-col h-[400px]">
              <textarea 
                   value={mdInput}
                   onChange={(e) => setMdInput(e.target.value)}
                   className="flex-1 w-full bg-[#010409] border border-[#30363d] rounded-t-xl p-3 outline-none text-xs font-mono text-[#7ee787] resize-none focus:border-[#58a6ff] transition-colors"
                   placeholder="# Start typing markdown..."
              />
              <div className="h-1 bg-[#30363d]"></div>
              <div className="flex-1 bg-white border border-[#30363d] border-t-0 rounded-b-xl p-3 overflow-y-auto">
                 <div className="prose prose-sm prose-slate max-w-none text-black">
                    {mdInput.split('\n').map((line, i) => {
                      if (line.startsWith('# ')) return <h1 key={i} className="text-xl font-bold mb-2 pb-1 border-b">{line.slice(2)}</h1>;
                      if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold mb-2">{line.slice(3)}</h2>;
                      if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc">{line.slice(2)}</li>;
                      if (line.trim().startsWith('```')) return <div key={i} className="bg-gray-100 p-2 rounded text-xs font-mono my-2 border">Code Block</div>;
                      if (line.trim() === '') return <br key={i}/>;
                      return <p key={i} className="min-h-[1em]">{line}</p>;
                    })}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3 w-full">
           <div className="bg-[#0d1117] border border-[#30363d] p-8 md:p-12 rounded-[3rem] min-h-[600px] relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <div className="relative z-10">
                   <div className="mb-10 pb-10 border-b border-[#30363d]">
                      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{courses[activeCourse].title}</h2>
                      <p className="text-[#8b949e] font-mono text-xs uppercase tracking-[0.2em]">Everything you need to know</p>
                   </div>
                   
                   {courses[activeCourse].content}
               </div>
           </div>
           
           <div className="flex justify-between mt-8 px-4">
              <button 
                onClick={() => setActiveCourse(Math.max(0, activeCourse - 1))}
                disabled={activeCourse === 0}
                className="text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors"
              >
                ← Previous
              </button>
              <button 
                onClick={() => setActiveCourse(Math.min(courses.length - 1, activeCourse + 1))}
                disabled={activeCourse === courses.length - 1}
                className="text-gray-500 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors"
              >
                Next Module →
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
