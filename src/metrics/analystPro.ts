
import { GitHubUser } from '../types';

export const analystProSVG = (u: GitHubUser): string => {
  const score = Math.floor(u.public_repos * 12.5 + u.followers * 5.2);
  return `
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="500" rx="32" fill="#010409" stroke="#30363d" stroke-width="2"/>
  
  <!-- Side panel -->
  <rect x="0" y="0" width="240" height="500" fill="#0d1117" rx="32"/>
  <image x="70" y="40" width="100" height="100" href="${u.avatar_url}" clip-path="inset(0% round 50px)"/>
  <text x="120" y="165" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="900" fill="#fff">${u.name || u.login}</text>
  <text x="120" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#8b949e">RANK: ELITE DEVELOPER</text>
  
  <g transform="translate(30, 230)">
    ${[
      { l: 'REPOS', v: u.public_repos, c: '#58a6ff' },
      { l: 'FANS', v: u.followers, c: '#3fb950' },
      { l: 'GISTS', v: u.public_gists, c: '#bc8cff' },
      { l: 'LEVEL', v: Math.floor(score/100), c: '#f1e05a' }
    ].map((s, i) => `
      <g transform="translate(0, ${i * 60})">
        <rect width="180" height="45" rx="12" fill="#161b22" stroke="#30363d"/>
        <text x="15" y="18" font-family="monospace" font-size="8" fill="#8b949e">${s.l}</text>
        <text x="15" y="35" font-family="Inter, sans-serif" font-size="16" font-weight="900" fill="${s.c}">${s.v}</text>
      </g>
    `).join('')}
  </g>

  <!-- Main Content -->
  <text x="270" y="60" font-family="Inter, sans-serif" font-size="28" font-weight="900" fill="#fff">Protocol Analytics</text>
  <text x="270" y="85" font-family="monospace" font-size="12" fill="#3fb950">STATUS: OPTIMIZED</text>
  
  <rect x="270" y="120" width="500" height="150" rx="20" fill="#161b22" stroke="#30363d"/>
  <text x="290" y="150" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#8b949e">ACTIVITY_PULSE_NETWORK</text>
  <path d="M290 220 Q350 150 420 200 T550 180 T750 210" stroke="#3fb950" stroke-width="4" fill="none" stroke-linecap="round"/>
  
  <g transform="translate(270, 290)">
    <rect width="240" height="180" rx="20" fill="#161b22" stroke="#30363d"/>
    <text x="20" y="35" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#8b949e">CORE_LOAD</text>
    <circle cx="120" cy="100" r="50" stroke="#30363d" stroke-width="12" fill="none"/>
    <circle cx="120" cy="100" r="50" stroke="#58a6ff" stroke-width="12" fill="none" stroke-dasharray="314" stroke-dashoffset="100"/>
    <text x="120" y="110" text-anchor="middle" font-family="Inter, sans-serif" font-size="20" font-weight="900" fill="#fff">82%</text>
  </g>

  <g transform="translate(530, 290)">
    <rect width="240" height="180" rx="20" fill="#161b22" stroke="#30363d"/>
    <text x="20" y="35" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#8b949e">LEGACY_SCORE</text>
    <text x="20" y="85" font-family="Inter, sans-serif" font-size="48" font-weight="900" fill="#fff">${score}</text>
    <text x="20" y="110" font-family="monospace" font-size="10" fill="#bc8cff">GLOBAL_PERCENTILE: 99.4</text>
    <rect x="20" y="140" width="200" height="8" rx="4" fill="#30363d"/>
    <rect x="20" y="140" width="160" height="8" rx="4" fill="#bc8cff"/>
  </g>
</svg>`.trim();
};
