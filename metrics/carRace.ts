
import { GitHubUser } from '../types';

export const carRaceSVG = (u: GitHubUser): string => {
  const repoPos = Math.min(300, (u.public_repos / 50) * 300);
  const followerPos = Math.min(300, (u.followers / 100) * 300);

  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes engine { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1px); } }
    .car { animation: engine 0.1s infinite; transition: transform 2s ease-out; }
  </style>
  <rect width="400" height="200" rx="24" fill="#1a1a1a" stroke="#333"/>
  
  <!-- Track -->
  <line x1="40" y1="80" x2="360" y2="80" stroke="#333" stroke-dasharray="10 10"/>
  <line x1="40" y1="140" x2="360" y2="140" stroke="#333" stroke-dasharray="10 10"/>
  <rect x="350" y="60" width="10" height="100" fill="url(#finish)"/>

  <!-- Car 1: Repos (Red) -->
  <g class="car" style="transform: translateX(${40 + repoPos}px)" transform="translate(0, 70)">
    <rect width="30" height="15" rx="2" fill="#ff7b72"/>
    <circle cx="5" cy="15" r="3" fill="#000"/><circle cx="25" cy="15" r="3" fill="#000"/>
    <text x="-5" y="-5" font-family="monospace" font-size="8" fill="#ff7b72">REPOS: ${u.public_repos}</text>
  </g>

  <!-- Car 2: Followers (Blue) -->
  <g class="car" style="transform: translateX(${40 + followerPos}px)" transform="translate(0, 130)">
    <rect width="30" height="15" rx="2" fill="#58a6ff"/>
    <circle cx="5" cy="15" r="3" fill="#000"/><circle cx="25" cy="15" r="3" fill="#000"/>
    <text x="-5" y="-5" font-family="monospace" font-size="8" fill="#58a6ff">FANS: ${u.followers}</text>
  </g>

  <text x="30" y="40" font-family="Inter, sans-serif" font-size="14" font-weight="black" fill="#fff">GRAND PRIX STATS</text>
  
  <defs>
    <pattern id="finish" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="5" height="5" fill="#fff"/><rect x="5" y="5" width="5" height="5" fill="#fff"/>
      <rect x="5" width="5" height="5" fill="#000"/><rect y="5" width="5" height="5" fill="#000"/>
    </pattern>
  </defs>
</svg>`.trim();
};
