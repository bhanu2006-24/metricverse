
import { GitHubUser } from '../types';

export const orbitingSkillsSVG = (u: GitHubUser): string => {
  const repos = u.repos_data || [];
  const langsMap: { [key: string]: number } = {};
  repos.forEach(r => { if(r.language) langsMap[r.language] = (langsMap[r.language] || 0) + 1 });
  const topLangs = Object.entries(langsMap).sort((a,b) => b[1] - a[1]).slice(0, 4);

  const colors = ['#58a6ff', '#3fb950', '#bc8cff', '#f1e05a'];

  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .orbit { transform-origin: center; animation: rotate 10s linear infinite; }
    .orbit-slow { transform-origin: center; animation: rotate 20s linear infinite; }
    .orbit-reverse { transform-origin: center; animation: rotate 15s linear reverse infinite; }
  </style>
  <rect width="400" height="400" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#58a6ff">Language Orbitals</text>
  
  <circle cx="200" cy="200" r="20" fill="#fff" fill-opacity="0.1" stroke="#fff" stroke-width="0.5" stroke-dasharray="2 2"/>
  <text x="200" y="205" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#fff">${u.login[0].toUpperCase()}</text>

  ${topLangs.map(([name, count], i) => {
    const radius = 50 + (i * 35);
    const speedClass = i % 2 === 0 ? 'orbit' : 'orbit-reverse';
    const color = colors[i % colors.length];
    return `
      <circle cx="200" cy="200" r="${radius}" stroke="#30363d" stroke-width="1" fill="none"/>
      <g class="${speedClass}" style="animation-duration: ${10 + i * 5}s">
        <circle cx="${200 + radius}" cy="200" r="8" fill="${color}" shadow="0 0 10px ${color}"/>
        <text x="${200 + radius + 12}" y="204" font-family="sans-serif" font-size="8" font-weight="bold" fill="${color}">${name}</text>
      </g>
    `;
  }).join('')}
</svg>`.trim();
};
