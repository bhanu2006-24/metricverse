
import { GitHubUser } from '../types';

export const pacmanFollowersSVG = (u: GitHubUser): string => {
  const dots = Math.min(10, Math.floor(u.followers / 2) + 1);
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes chew { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(30deg); } }
    @keyframes chew-bottom { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-30deg); } }
    @keyframes dots-move { from { transform: translateX(0); } to { transform: translateX(-30px); } }
    .pac-top { transform-origin: 60px 75px; animation: chew 0.3s infinite; }
    .pac-bottom { transform-origin: 60px 75px; animation: chew-bottom 0.3s infinite; }
    .dots-container { animation: dots-move 0.6s linear infinite; }
  </style>
  <rect width="400" height="150" rx="20" fill="#000"/>
  
  <text x="30" y="35" font-family="monospace" font-size="12" font-weight="bold" fill="#FFFF00">PAC-METRIC: FOLLOWERS</text>
  
  <g class="dots-container">
    ${Array.from({length: 15}).map((_, i) => `
      <circle cx="${100 + i * 30}" cy="75" r="3" fill="#FFB8FF" />
    `).join('')}
  </g>

  <g transform="translate(0, 0)">
    <path class="pac-top" d="M60 75 L100 35 A40 40 0 1 0 100 115 Z" fill="#FFFF00"/>
    <path class="pac-bottom" d="M60 75 L100 115 A40 40 0 0 1 60 115 Z" fill="#FFFF00"/>
  </g>

  <text x="370" y="130" text-anchor="end" font-family="monospace" font-size="24" font-weight="black" fill="#FFFF00">${u.followers}</text>
</svg>`.trim();
};
