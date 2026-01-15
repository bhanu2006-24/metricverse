import React, { useState, useEffect } from 'react';
import { 
  MarkdownDeepDive, 
  MathLatex, 
  GitGithubPro, 
  ProfileEngineering, 
  VisualArchitecture,
  BashMastery
} from '../courses';
import Playground from './Playground';

const Guides: React.FC = () => {
  const [activeCourseIdx, setActiveCourseIdx] = useState<number>(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState<number>(0);

  const courses = [
    MarkdownDeepDive,
    MathLatex,
    GitGithubPro,
    ProfileEngineering,
    VisualArchitecture,
    BashMastery
  ];

  const activeCourse = courses[activeCourseIdx];
  const activeLesson = activeCourse.lessons[activeLessonIdx];

  useEffect(() => {
    setActiveLessonIdx(0);
  }, [activeCourseIdx]);

  const handleNext = () => {
    if (activeLessonIdx < activeCourse.lessons.length - 1) {
      setActiveLessonIdx(prev => prev + 1);
    } else if (activeCourseIdx < courses.length - 1) {
      // Confetti or completion logic here could be cool
      setActiveCourseIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeLessonIdx > 0) {
      setActiveLessonIdx(prev => prev - 1);
    } else if (activeCourseIdx > 0) {
      setActiveCourseIdx(prev => prev - 1);
    }
  };

  return (
    <div className="py-12 animate-in fade-in duration-1000">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Metricverse <span className="text-transparent bg-clip-text bg-linear-to-r from-[#bc8cff] to-github-accent">Academy</span>
        </h2>
        <p className="text-[#8b949e] text-lg font-light tracking-wide">Master the art of Developer Brand Engineering.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/4 space-y-4 sticky top-24">
          <div className="bg-github-dark border border-github-border rounded-4xl p-4 space-y-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 mb-2">Modules</h3>
            {courses.map((course, idx) => (
              <button
                key={course.id}
                onClick={() => setActiveCourseIdx(idx)}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-300 group flex items-center gap-3 ${
                  activeCourseIdx === idx 
                    ? 'bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' 
                    : 'bg-transparent border-transparent hover:bg-[#161b22] hover:border-github-border'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${activeCourseIdx === idx ? 'bg-black text-white' : 'bg-[#161b22] text-gray-400 group-hover:text-white'}`}>
                   {course.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-xs uppercase tracking-tight ${activeCourseIdx === idx ? 'text-black' : 'text-gray-300 group-hover:text-white'}`}>
                    {course.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-github-dark border border-github-border rounded-4xl p-4">
             <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 mb-2">Current Lesson</h3>
             <div className="relative pl-6 border-l border-gray-800 ml-4 space-y-6 py-2">
                {activeCourse.lessons.map((lesson, idx) => (
                    <div key={lesson.id} className="relative group cursor-pointer" onClick={() => setActiveLessonIdx(idx)}>
                        <div className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 transition-all ${
                            idx === activeLessonIdx 
                            ? 'bg-github-accent border-github-accent shadow-[0_0_10px_rgba(88,166,255,0.5)]' 
                            : idx < activeLessonIdx 
                                ? 'bg-green-500 border-green-500' // completed
                                : 'bg-transparent border-gray-700'
                        }`}></div>
                        <h4 className={`text-sm font-bold transition-colors ${idx === activeLessonIdx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                            {lesson.title}
                        </h4>
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider">{lesson.type}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4 w-full">
           <div className="bg-github-dark border border-github-border p-8 md:p-12 rounded-4xl min-h-[600px] relative overflow-hidden flex flex-col">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <div className="relative z-10 flex-1">
                   <div className="mb-8 pb-8 border-b border-github-border flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-github-border rounded text-[10px] font-mono text-gray-400">Lesson {activeLessonIdx + 1} of {activeCourse.lessons.length}</span>
                            {activeLesson.type === 'practice' && <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px] font-mono uppercase font-bold animate-pulse">Interactive</span>}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{activeLesson.title}</h2>
                      </div>
                   </div>
                   
                   <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {activeLesson.content}
                      
                      {activeLesson.type === 'practice' && (
                          <div className="mt-8">
                             <Playground 
                               mode={activeLesson.practiceMode || 'markdown'} 
                               initialCode={activeLesson.initialCode} 
                             />
                          </div>
                      )}
                   </div>
               </div>

               <div className="relative z-10 flex justify-between mt-12 pt-8 border-t border-github-border">
                  <button 
                    onClick={handlePrev}
                    disabled={activeLessonIdx === 0 && activeCourseIdx === 0}
                    className="px-6 py-3 rounded-xl border border-github-border hover:bg-github-border/50 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={activeLessonIdx === activeCourse.lessons.length - 1 && activeCourseIdx === courses.length - 1}
                    className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105"
                  >
                    {activeLessonIdx === activeCourse.lessons.length - 1 ? 'Next Course' : 'Next Lesson'} →
                  </button>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
