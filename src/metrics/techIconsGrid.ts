
import { GitHubUser } from '../types';

export const techIconsGridSVG = (u: GitHubUser): string => {
  const techs = [
    { label: 'REACT', color: '#61DAFB' },
    { label: 'NEXT.JS', color: '#000000', border: '#fff' },
    { label: 'TYPESCRIPT', color: '#3178C6' },
    { label: 'NODE.JS', color: '#339933' },
    { label: 'TAILWIND', color: '#06B6D4' },
    { label: 'PYTHON', color: '#3776AB' },
    { label: 'DOCKER', color: '#2496ED' },
    { label: 'GIT', color: '#F05032' },
    { label: 'MONGODB', color: '#47A248' },
    { label: 'POSTGRES', color: '#4169E1' },
  ];

  return `
<svg width="800" height="180" viewBox="0 0 800 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="180" rx="16" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="30" y="40" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="bold" fill="#fff">🚀 TECH STACK</text>
  
  <g transform="translate(30, 70)">
    ${techs.map((t, i) => {
      const x = (i % 5) * 150;
      const y = Math.floor(i / 5) * 50;
      return `
        <g transform="translate(${x}, ${y})">
          <rect width="130" height="36" rx="6" fill="${t.color}" stroke="${t.border || 'none'}" stroke-width="1"/>
          <text x="65" y="23" text-anchor="middle" font-family="monospace" font-size="12" font-weight="black" fill="${t.color === '#000000' || t.color === '#fff' ? (t.color === '#fff' ? '#000' : '#fff') : '#000'}">${t.label}</text>
        </g>
      `;
    }).join('')}
  </g>
</svg>`.trim();
};
