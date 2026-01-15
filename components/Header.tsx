
import React from 'react';

interface HeaderProps {
  currentTab: 'home' | 'academy';
  onTabChange: (tab: 'home' | 'academy') => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.location.reload()}>
          
          <span className="text-2xl font-black bg-clip-text text-transparent bg-white tracking-tight font-sans uppercase flex items-center gap-1">
            Metric<span className="text-[#58a6ff]">Verse</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
          <button
            onClick={() => onTabChange('home')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentTab === 'home'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Studio
          </button>
          <button
            onClick={() => onTabChange('academy')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentTab === 'academy'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Guide
          </button>
        </nav>

        <a 
          href="https://github.com/bhanupratapsaini/metricverse" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-gray-300"
        >
          <span>Star on GitHub</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
