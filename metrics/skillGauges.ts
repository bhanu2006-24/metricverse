
import { GitHubUser } from '../types';

export const skillGaugesSVG = (u: GitHubUser): string => {
  const stats = [
    { label: 'FRONTEND', val: 85, color: '#61dafb' },
    { label: 'BACKEND', val: 72, color: '#3fb950' },
    { label: 'DEVOPS', val: 64, color: '#bc8cff' }
  ];

  return `
<svg width="600" height="250" viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="250" rx="32" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(0, 40)">
    ${stats.map((s, i) => {
      const x = 100 + i * 200;
      const circ = 2 * Math.PI * 45;
      const offset = circ - (s.val / 100) * circ;
      return `
        <g transform="translate(${x}, 80)">
          <circle r="45" stroke="#161b22" stroke-width="10" fill="none"/>
          <circle r="45" stroke="${s.color}" stroke-width="10" fill="none" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90)" stroke-linecap="round"/>
          <text text-anchor="middle" y="5" font-family="Inter, sans-serif" font-size="20" font-weight="900" fill="#fff">${s.val}%</text>
          <text text-anchor="middle" y="75" font-family="Inter, sans-serif" font-size="12" font-weight="black" fill="#8b949e">${s.label}</text>
        </g>
      `;
    }).join('')}
  </g>
</svg>`.trim();
};
