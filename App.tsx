
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import MetricCard from './components/MetricCard';
import Guides from './components/Guides';
import { fetchGithubUser, fetchGithubRepos } from './services/githubService';
import { GitHubUser, MetricCategory } from './types';
import { METRIC_REGISTRY } from './metrics/registry';

// Dynamic Categories to ensure we cover what's in registry
// We used python script to categorize, so we'll expect: gamified, motion, banner, themed, intelligence
const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'All Artifacts' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'motion', label: 'Motion Kinetic' },
  { id: 'gamified', label: 'Gamified' },
  { id: 'themed', label: 'Themed UI' },
  { id: 'banner', label: 'Hero Banners' },
];

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'academy'>('home');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // Load initial history
  useEffect(() => {
    const saved = localStorage.getItem('mv_history');
    if (saved) setSearchHistory(JSON.parse(saved));
  }, []);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const [user, repos] = await Promise.all([
        fetchGithubUser(username),
        fetchGithubRepos(username),
      ]);
      
      setUserData({
        ...user,
        repos_data: repos,
      });

      setSearchHistory(prev => {
        const next = [username, ...prev.filter(u => u !== username)].slice(0, 5);
        localStorage.setItem('mv_history', JSON.stringify(next));
        return next;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'User not found or API limit reached');
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
    <div className="min-h-screen font-sans text-gray-200 relative bg-[#0d1117] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1c2128] to-transparent opacity-50"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      <Header currentTab={currentTab} onTabChange={setCurrentTab} />
      
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-20 pt-6">
        {currentTab === 'home' ? (
          <>
            <InputForm onSearch={handleSearch} isLoading={isLoading} />

            {/* Recent Searches */}
            {searchHistory.length > 0 && !userData && (
               <div className="flex justify-center items-center gap-3 mb-12 flex-wrap animate-fade-in-up">
                 <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Recent:</span>
                 {searchHistory.map(u => (
                   <button 
                     key={u} 
                     onClick={() => handleSearch(u)}
                     className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all font-mono"
                   >
                     @{u}
                   </button>
                 ))}
               </div>
            )}

            {error && (
              <div className="max-w-md mx-auto mb-10 p-4 bg-red-900/20 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-200 animate-shake">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            )}

            {userData && !isLoading && (
              <div className="space-y-12 animate-fade-in">
                {/* User Profile Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-2xl border-4 border-[#0d1117] shadow-xl ring-2 ring-white/10" />
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-1">{userData.name || userData.login}</h2>
                      <div className="flex items-center gap-4 text-gray-400 text-sm font-mono">
                         <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available</span>
                         <a href={`https://github.com/${userData.login}`} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">@{userData.login}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 relative z-10">
                     <div className="text-center px-6 py-3 bg-[#0d1117]/50 rounded-2xl border border-white/5">
                        <div className="text-2xl font-bold text-white">{userData.public_repos}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Repos</div>
                     </div>
                     <div className="text-center px-6 py-3 bg-[#0d1117]/50 rounded-2xl border border-white/5">
                        <div className="text-2xl font-bold text-white">{userData.followers}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Followers</div>
                     </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 sticky top-24 z-40 py-4 bg-[#0d1117]/80 backdrop-blur-xl border-y border-white/5">
                   {CATEGORIES.map(cat => (
                     <button
                       key={cat.id}
                       onClick={() => setActiveCategory(cat.id)}
                       className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                         activeCategory === cat.id 
                           ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                           : 'bg-transparent text-gray-500 border-transparent hover:border-gray-700 hover:text-gray-300'
                       }`}
                     >
                       {cat.label}
                     </button>
                   ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                  {filteredMetrics.map((metric, i) => (
                    <div key={metric.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                      <MetricCard id={metric.id} title={metric.title} svgContent={metric.generate(userData)} />
                    </div>
                  ))}
                  {filteredMetrics.length === 0 && (
                    <div className="col-span-full py-20 text-center text-gray-500">
                      No metrics found in this category.
                    </div>
                  )}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex flex-col items-center justify-center py-40">
                <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                <p className="mt-6 text-cyan-500/50 font-mono text-xs animate-pulse tracking-[0.2em]">GENERATING ASSETS...</p>
              </div>
            )}

          </>
        ) : (
          <Guides />
        )}
      </main>

      <footer className="border-t border-white/5 py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
           <img src="/favicon.png" alt="Logo" className="w-10 h-10 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
           <p className="text-gray-500 text-sm mb-2">Built with ❤️ for the Developer Community</p>
           <p className="text-xs text-gray-700 font-mono">© 2026 Metricverse. Open Source.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
