
import { GitHubUser } from '../types';

export const projectTimelineSVG = (u: GitHubUser): string => {
  const repos = (u.repos_data || []).slice(0, 4);
  return `
<svg width="800" height="300" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="300" rx="32" fill="#0d1117" stroke="#30363d"/>
  <text x="40" y="55" font-family="Inter, sans-serif" font-size="20" font-weight="900" fill="#fff">DEPLOYMENT_HISTORY</text>
  
  <line x1="60" y1="150" x2="740" y2="150" stroke="#30363d" stroke-width="2"/>
  
  ${repos.map((r, i) => {
    const x = 100 + i * 180;
    const y = i % 2 === 0 ? 100 : 200;
    return `
      <circle cx="${x}" cy="150" r="8" fill="#3fb950" stroke="#0d1117" stroke-width="4"/>
      <g transform="translate(${x - 80}, ${y - 40})">
        <rect width="160" height="60" rx="12" fill="#161b22" stroke="#30363d"/>
        <text x="10" y="25" font-family="monospace" font-size="12" font-weight="bold" fill="#58a6ff">${r.name.toUpperCase()}</text>
        <text x="10" y="45" font-family="sans-serif" font-size="9" fill="#8b949e">Stars: ${r.stargazers_count} • ${r.language || 'N/A'}</text>
      </g>
    `;
  }).join('')}
</svg>`.trim();
};
