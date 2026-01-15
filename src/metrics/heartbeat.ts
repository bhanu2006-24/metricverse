
import { GitHubUser } from '../types';

export const heartbeatSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes draw { to { stroke-dashoffset: 0; } }
    .ecg-line { 
      stroke-dasharray: 1000; 
      stroke-dashoffset: 1000; 
      animation: draw 4s linear infinite; 
    }
  </style>
  <rect width="400" height="200" rx="24" fill="#000" stroke="#1a1a1a"/>
  
  <g opacity="0.1">
    ${Array.from({length: 8}).map((_, i) => `<line x1="${i*50}" y1="0" x2="${i*50}" y2="200" stroke="#fff" stroke-width="0.5"/>`).join('')}
    ${Array.from({length: 4}).map((_, i) => `<line x1="0" y1="${i*50}" x2="400" y2="${i*50}" stroke="#fff" stroke-width="0.5"/>`).join('')}
  </g>

  <path class="ecg-line" d="M0,100 L50,100 L60,80 L70,120 L80,100 L150,100 L160,30 L180,170 L200,100 L250,100 L260,80 L270,120 L280,100 L400,100" stroke="#f85149" stroke-width="3" fill="none"/>
  
  <text x="30" y="40" font-family="Inter, sans-serif" font-size="14" font-weight="black" fill="#f85149">ACTIVITY VITALS</text>
  <text x="30" y="170" font-family="monospace" font-size="24" font-weight="bold" fill="#fff">${u.public_repos + u.followers} BPM</text>
</svg>`.trim();
};
