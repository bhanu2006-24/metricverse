
import { GitHubUser } from '../types';

export const projectPortfolioSVG = (u: GitHubUser): string => {
  const repos = (u.repos_data || []).slice(0, 3);
  
  return `
<svg width="800" height="240" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="20" font-weight="black" fill="#fff">TOP REPOSITORIES</text>
  
  <g transform="translate(30, 80)">
    ${repos.map((r, i) => `
      <g transform="translate(${i * 255}, 0)">
        <rect width="230" height="120" rx="16" fill="#161b22" stroke="#30363d" stroke-width="1"/>
        <text x="15" y="35" font-family="monospace" font-size="14" font-weight="bold" fill="#58a6ff">${r.name}</text>
        <text x="15" y="60" font-family="sans-serif" font-size="10" fill="#8b949e" clip-path="inset(0 0 0 0)">${r.description?.substring(0, 45) || 'No description provided.'}...</text>
        
        <g transform="translate(15, 95)">
           <circle cx="5" cy="0" r="4" fill="${r.language === 'TypeScript' ? '#3178c6' : '#f1e05a'}"/>
           <text x="15" y="4" font-family="sans-serif" font-size="10" fill="#c9d1d9">${r.language || 'Plain Text'}</text>
           <text x="120" y="4" font-family="sans-serif" font-size="10" fill="#8b949e">⭐ ${r.stargazers_count}</text>
           <text x="170" y="4" font-family="sans-serif" font-size="10" fill="#8b949e">🍴 ${r.forks_count}</text>
        </g>
      </g>
    `).join('')}
  </g>
</svg>`.trim();
};
