
import { GitHubUser } from '../types';

export const radarChartSVG = (u: GitHubUser): string => {
  const stats = [
    { label: 'Coding', val: Math.min(100, u.public_repos * 2) },
    { label: 'Social', val: Math.min(100, (u.followers / 10)) },
    { label: 'Gists', val: Math.min(100, u.public_gists * 10) },
    { label: 'Legacy', val: Math.min(100, (new Date().getFullYear() - new Date(u.created_at).getFullYear()) * 10) },
    { label: 'Activity', val: Math.min(100, (u.events_data?.length || 0)) }
  ];

  const points = stats.map((s, i) => {
    const angle = (i * (360 / stats.length)) - 90;
    const r = (s.val / 100) * 80;
    const x = 200 + r * Math.cos(angle * Math.PI / 180);
    const y = 160 + r * Math.sin(angle * Math.PI / 180);
    return `${x},${y}`;
  }).join(' ');

  return `
<svg width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="320" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#bc8cff">Developer Persona</text>
  
  <g opacity="0.1" stroke="#fff" stroke-width="0.5">
    <circle cx="200" cy="160" r="20"/><circle cx="200" cy="160" r="40"/><circle cx="200" cy="160" r="60"/><circle cx="200" cy="160" r="80"/>
  </g>

  <polygon points="${points}" fill="#bc8cff" fill-opacity="0.3" stroke="#bc8cff" stroke-width="2"/>
  
  ${stats.map((s, i) => {
    const angle = (i * (360 / stats.length)) - 90;
    const x = 200 + 100 * Math.cos(angle * Math.PI / 180);
    const y = 160 + 100 * Math.sin(angle * Math.PI / 180);
    return `<text x="${x}" y="${y}" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#8b949e">${s.label}</text>`;
  }).join('')}
</svg>`.trim();
};
