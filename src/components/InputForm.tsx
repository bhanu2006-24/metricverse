
import React, { useState } from 'react';

interface InputFormProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) onSearch(username.trim());
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 mb-16 relative z-10">
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight">
          GitHub Metrics <br/> Reimagined
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Generate stunning, real-time SVG visualizations for your GitHub profile. 
          Gamified stats, kinetic graphs, and premium badges.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-github-dark border border-white/10 rounded-2xl p-2 shadow-2xl">
          <div className="pl-4 text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="grow bg-transparent border-none focus:ring-0 text-white text-lg px-4 py-3 placeholder-gray-600 outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || !username}
            className="px-8 py-3 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Generate'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
