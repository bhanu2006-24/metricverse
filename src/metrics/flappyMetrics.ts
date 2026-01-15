
import { GitHubUser } from '../types';

export const flappyMetricsSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes bird-flap { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
    @keyframes pipes-move { from { transform: translateX(400px); } to { transform: translateX(-400px); } }
    .bird { animation: bird-flap 1.5s ease-in-out infinite; }
    .pipe { animation: pipes-move 4s linear infinite; }
  </style>
  <rect width="400" height="200" rx="20" fill="#4ec0ca"/>
  
  <!-- Pipes -->
  <g class="pipe" transform="translate(0, 0)">
    <rect x="0" y="0" width="40" height="60" fill="#73bf2e" stroke="#000" stroke-width="2"/>
    <rect x="-5" y="60" width="50" height="15" fill="#73bf2e" stroke="#000" stroke-width="2"/>
    <text x="20" y="30" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff" transform="rotate(90 20 30)">REPOS</text>

    <rect x="0" y="140" width="40" height="60" fill="#73bf2e" stroke="#000" stroke-width="2"/>
    <rect x="-5" y="125" width="50" height="15" fill="#73bf2e" stroke="#000" stroke-width="2"/>
    <text x="20" y="170" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff" transform="rotate(90 20 170)">${u.public_repos}</text>
  </g>

  <!-- Bird -->
  <g class="bird" transform="translate(80, 100)">
    <circle r="12" fill="#f8e71c" stroke="#000" stroke-width="2"/>
    <circle cx="5" cy="-3" r="3" fill="#fff"/><circle cx="6" cy="-3" r="1.5" fill="#000"/>
    <path d="M12,0 L20,3 L12,6 Z" fill="#f5a623" stroke="#000"/>
    <rect x="-15" y="-2" width="10" height="5" rx="2" fill="#fff" stroke="#000"/>
  </g>

  <text x="380" y="30" text-anchor="end" font-family="'Press Start 2P', monospace" font-size="14" fill="#fff" style="text-shadow: 2px 2px #000">SCORE: ${u.followers}</text>
</svg>`.trim();
};
