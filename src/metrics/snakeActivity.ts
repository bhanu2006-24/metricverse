
import { GitHubUser } from '../types';

export const snakeActivitySVG = (u: GitHubUser): string => {
  const len = Math.min(15, Math.floor(u.followers / 5) + 3);
  
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="24" fill="#0d1117" stroke="#30363d"/>
  
  <g transform="translate(50, 100)">
    ${Array.from({length: len}).map((_, i) => `
      <rect x="${i * 15}" y="0" width="12" height="12" rx="2" fill="${i === len - 1 ? '#3fb950' : '#238636'}">
        <animate attributeName="y" values="0;5;0" dur="1s" begin="${i * 0.1}s" repeatCount="indefinite" />
      </rect>
    `).join('')}
    
    <circle cx="${len * 15 + 20}" cy="6" r="4" fill="#f85149">
       <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </circle>
  </g>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="16" font-weight="black" fill="#fff">SNAKE_GROWTH_ENGINE</text>
  <text x="30" y="170" font-family="monospace" font-size="10" fill="#8b949e">SCORE: ${u.followers * 10} | LENGTH: ${len}</text>
</svg>`.trim();
};
