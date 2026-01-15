
import { GitHubUser } from '../types';

export const trophyCaseSVG = (u: GitHubUser): string => {
  const achievements = [
    { label: 'REPO MASTER', val: u.public_repos > 50 ? 'GOLD' : 'SILVER', color: u.public_repos > 50 ? '#D4AF37' : '#C0C0C0' },
    { label: 'SOCIAL TITAN', val: u.followers > 100 ? 'PLATINUM' : 'GOLD', color: u.followers > 100 ? '#E5E4E2' : '#D4AF37' },
    { label: 'VETERAN', val: new Date().getFullYear() - new Date(u.created_at).getFullYear() > 5 ? 'ELITE' : 'LEGACY', color: '#bc8cff' },
    { label: 'COMMITS', val: 'OVERDRIVE', color: '#f85149' }
  ];

  return `
<svg width="800" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="220" rx="20" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="bold" fill="#fff">🏆 ACHIEVEMENT TROPHY CASE</text>
  
  <g transform="translate(40, 80)">
    ${achievements.map((a, i) => `
      <g transform="translate(${i * 185}, 0)">
        <circle cx="50" cy="50" r="45" fill="${a.color}" fill-opacity="0.1" stroke="${a.color}" stroke-width="2" stroke-dasharray="4 2"/>
        <path d="M35 40 L50 30 L65 40 L65 60 L50 70 L35 60 Z" fill="${a.color}"/>
        <text x="50" y="115" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#8b949e">${a.label}</text>
        <text x="50" y="135" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="black" fill="#fff">${a.val}</text>
      </g>
    `).join('')}
  </g>
</svg>`.trim();
};
