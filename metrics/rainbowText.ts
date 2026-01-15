
import { GitHubUser } from '../types';

export const rainbowTextSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes rainbow {
      0% { stop-color: #ff0000; }
      20% { stop-color: #ff8800; }
      40% { stop-color: #ffff00; }
      60% { stop-color: #00ff00; }
      80% { stop-color: #0000ff; }
      100% { stop-color: #ff00ff; }
    }
    .rainbow-stop { animation: rainbow 5s infinite; }
  </style>
  <defs>
    <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" class="rainbow-stop" style="animation-delay: 0s" />
      <stop offset="50%" class="rainbow-stop" style="animation-delay: -2.5s" />
      <stop offset="100%" class="rainbow-stop" style="animation-delay: -5s" />
    </linearGradient>
  </defs>
  <rect width="400" height="150" rx="24" fill="#0d1117" stroke="#30363d"/>
  <text x="200" y="85" text-anchor="middle" font-family="Inter, sans-serif" font-size="42" font-weight="900" fill="url(#rainbow-grad)">${u.login.toUpperCase()}</text>
  <text x="200" y="120" text-anchor="middle" font-family="monospace" font-size="10" fill="#8b949e" letter-spacing="4">SPECTRUM_ID_SYNC</text>
</svg>`.trim();
};
