
import { GitHubUser } from '../types';

export const pingPongSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes bounce { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(290px); } }
    @keyframes hit { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } }
    .ball { animation: bounce 2s ease-in-out infinite; }
    .paddle { animation: hit 2s step-end infinite; }
  </style>
  <rect width="400" height="200" rx="24" fill="#000" stroke="#111"/>
  
  <line x1="200" y1="20" x2="200" y2="180" stroke="#222" stroke-dasharray="5 5"/>

  <!-- Left Paddle -->
  <g transform="translate(30, 70)">
    <rect class="paddle" width="10" height="60" rx="5" fill="#58a6ff"/>
    <text x="-15" y="35" transform="rotate(-90 -15 35)" font-family="monospace" font-size="10" fill="#58a6ff">REPOS: ${u.public_repos}</text>
  </g>

  <!-- Right Paddle -->
  <g transform="translate(360, 70)">
    <rect class="paddle" width="10" height="60" rx="5" fill="#f85149" style="animation-delay: 1s"/>
    <text x="25" y="35" transform="rotate(90 25 35)" font-family="monospace" font-size="10" fill="#f85149">FANS: ${u.followers}</text>
  </g>

  <g class="ball" transform="translate(50, 100)">
    <circle r="8" fill="#fff" shadow="0 0 10px #fff"/>
  </g>
</svg>`.trim();
};
