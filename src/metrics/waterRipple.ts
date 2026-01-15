
import { GitHubUser } from '../types';

export const waterRippleSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes ripple { from { r: 0; opacity: 1; } to { r: 150; opacity: 0; } }
    .ripple-ring { animation: ripple 3s linear infinite; }
  </style>
  <rect width="400" height="200" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(200, 100)">
    <circle class="ripple-ring" r="0" stroke="#58a6ff" stroke-width="1" fill="none"/>
    <circle class="ripple-ring" r="0" stroke="#58a6ff" stroke-width="1" fill="none" style="animation-delay: 1s"/>
    <circle class="ripple-ring" r="0" stroke="#58a6ff" stroke-width="1" fill="none" style="animation-delay: 2s"/>
    
    <text y="10" text-anchor="middle" font-family="Inter, sans-serif" font-size="48" font-weight="black" fill="#fff">${u.public_repos}</text>
    <text y="40" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#58a6ff">LIQUID REPOSITORIES</text>
  </g>
</svg>`.trim();
};
