
import React from 'react';

interface HeaderProps {
  currentTab: 'home' | 'academy';
  onTabChange: (tab: 'home' | 'academy') => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange }) => {
  return (
    <header className="py-12 flex flex-col items-center text-center">
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#238636] to-[#58a6ff] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-16 h-16 bg-[#238636] rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-black tracking-tighter text-white">
              METRIC<span className="text-[#58a6ff]">VERSE</span>
            </h1>
            <p className="text-[#3fb950] font-mono text-[8px] font-bold tracking-[0.4em] uppercase mt-1">
              ENGINEERED BY BHANU2006-24
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-[#161b22] border border-[#30363d] p-1 rounded-2xl ml-0 lg:ml-12">
          <button 
            onClick={() => onTabChange('home')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentTab === 'home' ? 'bg-[#30363d] text-white shadow-xl' : 'text-[#8b949e] hover:text-white'}`}
          >
            Generator
          </button>
          <button 
            onClick={() => onTabChange('academy')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentTab === 'academy' ? 'bg-[#3fb950] text-white shadow-xl' : 'text-[#8b949e] hover:text-white'}`}
          >
            Academy
          </button>
        </div>
      </div>
      
      {currentTab === 'home' && (
        <p className="text-[#8b949e] max-w-2xl text-lg px-4 leading-relaxed font-medium">
          Elevate your GitHub profile with <span className="text-white">Professional-Grade</span> SVG metrics. 
          Dynamic artifacts, expertly engineered.
        </p>
      )}
    </header>
  );
};

export default Header;
