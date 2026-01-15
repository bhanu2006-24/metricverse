
import { GitHubUser } from '../types';

export const marioJumpSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes jump { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-60px); } }
    @keyframes move-bg { from { transform: translateX(0); } to { transform: translateX(-40px); } }
    .mario { animation: jump 0.8s infinite; }
    .blocks { animation: move-bg 0.8s linear infinite; }
  </style>
  <rect width="400" height="200" rx="20" fill="#5C94FC"/>
  
  <g class="blocks" transform="translate(0, 150)">
    ${Array.from({length: 10}).map((_, i) => `
      <rect x="${i * 40}" y="0" width="38" height="38" fill="#E45C10" stroke="#000" stroke-width="2"/>
    `).join('')}
  </g>
  
  <g class="mario" transform="translate(180, 110)">
    <rect width="30" height="40" fill="#FF0000" rx="2"/> <!-- Body -->
    <rect x="5" y="-10" width="20" height="20" fill="#FFA07A" rx="2"/> <!-- Face -->
    <rect x="5" y="-15" width="20" height="8" fill="#FF0000" rx="2"/> <!-- Cap -->
  </g>
  
  <text x="20" y="35" font-family="'Press Start 2P', cursive, monospace" font-size="12" fill="#fff">WORLD 1-1</text>
  <text x="380" y="35" text-anchor="end" font-family="monospace" font-size="20" font-weight="black" fill="#fff">x ${u.public_repos}</text>
</svg>`.trim();
};
