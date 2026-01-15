
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MetricCard from './components/MetricCard';
import Guides from './components/Guides';
import { fetchGithubUser, fetchGithubRepos, fetchGithubEvents } from './services/githubService';
import { GitHubUser, MetricCategory } from './types';
import { METRIC_REGISTRY } from './metrics/registry';

const CATEGORIES: { id: MetricCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Artifacts' },
  { id: 'motion', label: 'High Motion' },
  { id: 'intelligence', label: 'Expert Analyst' },
  { id: 'gamified', label: 'Gamified' },
  { id: 'banner', label: 'Hero Banners' },
  { id: 'themed', label: 'Themed Grids' },
];

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'academy'>('home');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<MetricCategory | 'all'>('all');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    handleSearch('bhanu2006-24');
    const saved = localStorage.getItem('mv_history');
    if (saved) setSearchHistory(JSON.parse(saved));
  }, []);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const [user, repos, events] = await Promise.all([
        fetchGithubUser(username),
        fetchGithubRepos(username),
        fetchGithubEvents(username)
      ]);
      
      setUserData({
        ...user,
        repos_data: repos,
        events_data: events
      });

      setSearchHistory(prev => {
        const next = [username, ...prev.filter(u => u !== username)].slice(0, 5);
        localStorage.setItem('mv_history', JSON.stringify(next));
        return next;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredMetrics = useMemo(() => {
    if (activeCategory === 'all') return METRIC_REGISTRY;
    return METRIC_REGISTRY.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col pb-24 px-4 relative">
      <Header currentTab={currentTab} onTabChange={setCurrentTab} />
      
      <main className="flex-grow max-w-7xl mx-auto w-full z-10">
        {currentTab === 'home' ? (
          <>
            <InputForm onSearch={handleSearch} isLoading={isLoading} />

            <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
               <span className="text-[10px] font-black uppercase text-[#444] tracking-[0.2em]">Active Nodes:</span>
               {searchHistory.map(u => (
                 <button 
                   key={u} 
                   onClick={() => handleSearch(u)}
                   className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#8b949e] hover:border-[#58a6ff] hover:text-white transition-all group"
                 >
                   <span className="opacity-40 group-hover:opacity-100 mr-2">@</span>{u}
                 </button>
               ))}
            </div>

            {error && (
              <div className="bg-[#f85149]/10 border border-[#f85149]/50 text-[#ff7b72] px-6 py-4 rounded-2xl max-w-xl mx-auto mb-12 flex items-center gap-3 animate-bounce">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="font-bold">{error}</span>
              </div>
            )}

            {userData && !isLoading && (
              <div className="space-y-12">
                <div className="flex flex-col lg:flex-row items-center justify-between border-b border-[#30363d] pb-10 gap-10">
                  <div className="flex items-center gap-8">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#3fb950] rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition duration-1000"></div>
                      <img src={userData.avatar_url} alt={userData.login} className="relative w-28 h-28 rounded-3xl border-2 border-[#30363d] shadow-2xl transition-all duration-700 group-hover:rotate-6 bg-[#161b22]" />
                    </div>
                    <div>
                      <h2 className="text-5xl font-black text-white tracking-tight leading-none mb-2">{userData.name || userData.login}</h2>
                      <p className="text-[#8b949e] font-mono text-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3fb950]"></span>
                        github.com/{userData.login}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    {[
                      { label: 'SVG Artifacts', val: METRIC_REGISTRY.length, color: 'text-white' },
                      { label: 'Developer Level', val: Math.floor(Math.sqrt((userData.public_repos * 5) + (userData.followers * 2))) + 1, color: 'text-[#58a6ff]' }
                    ].map(stat => (
                      <div key={stat.label} className="bg-[#161b22] border border-[#30363d] px-8 py-5 rounded-[2rem] text-center min-w-[140px] hover:border-[#58a6ff]/30 transition-all hover:scale-105 duration-500">
                         <div className={`text-3xl font-black ${stat.color}`}>{stat.val}</div>
                         <div className="text-[10px] font-bold text-[#8b949e] uppercase tracking-widest mt-1 opacity-50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 py-6 sticky top-0 z-50 bg-[#0d1117]/80 backdrop-blur-xl border-b border-transparent">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as any)}
                      className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 border-2 ${
                        activeCategory === cat.id ? 'bg-white text-black border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'bg-[#161b22]/50 text-[#8b949e] border-[#30363d] hover:border-[#58a6ff]/50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-40">
                  {filteredMetrics.map((metric, index) => (
                    <div key={metric.id} className={`${metric.id.includes('hero') || metric.id.includes('portfolio') || metric.id.includes('bento') || metric.id.includes('timeline') ? 'md:col-span-2 lg:col-span-3' : ''} animate-in fade-in slide-in-from-bottom-10 duration-700`} style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}>
                      <MetricCard id={metric.id} title={metric.title} svgContent={metric.generate(userData)} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex flex-col items-center justify-center py-40 space-y-12">
                <div className="relative">
                  <div className="w-24 h-24 border-[12px] border-[#161b22] border-t-[#58a6ff] rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-4 h-4 bg-[#58a6ff] rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-[#8b949e] font-mono tracking-[1em] uppercase text-[10px] animate-pulse">Calibrating Data Matrix...</p>
              </div>
            )}
          </>
        ) : (
          <Guides />
        )}
      </main>

      <footer className="mt-auto py-24 border-t border-[#30363d]/30 text-center">
        <div className="max-w-xl mx-auto space-y-6">
           <div className="flex justify-center gap-4">
              <div className="w-10 h-1 bg-[#238636] rounded-full"></div>
              <div className="w-10 h-1 bg-[#58a6ff] rounded-full"></div>
              <div className="w-10 h-1 bg-[#bc8cff] rounded-full"></div>
           </div>
           <p className="text-[#8b949e] text-xs font-black tracking-[0.5em] uppercase">METRICVERSE INFINITE • HYPER MOTION v5.0</p>
           <p className="text-[#30363d] text-[9px] font-bold uppercase tracking-widest max-w-xs mx-auto leading-relaxed">System architecture designed by Bhanu Saini. All SVG artifacts are dynamically generated and motion-optimized.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
