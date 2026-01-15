
import { GitHubUser } from '../types';

export const languageStackSVG = (u: GitHubUser): string => {
  const langs = [
    { name: 'TypeScript', p: '42.5%', color: '#3178c6' },
    { name: 'JavaScript', p: '28.1%', color: '#f1e05a' },
    { name: 'Python', p: '14.4%', color: '#3572a5' },
    { name: 'HTML', p: '10.0%', color: '#e34c26' },
    { name: 'Rust', p: '5.0%', color: '#dea584' },
  ];

  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" rx="16" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="40" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#58a6ff">Top Languages</text>
  
  ${langs.map((l, i) => {
    const y = 80 + i * 45;
    return `
      <text x="25" y="${y}" font-family="Arial, sans-serif" font-size="14" fill="#c9d1d9">${l.name}</text>
      <text x="375" y="${y}" text-anchor="end" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#8b949e">${l.p}</text>
      <rect x="25" y="${y + 8}" width="350" height="8" rx="4" fill="#30363d"/>
      <rect x="25" y="${y + 8}" width="${parseInt(l.p) * 3.5}" height="8" rx="4" fill="${l.color}"/>
    `;
  }).join('')}
</svg>`.trim();
};
