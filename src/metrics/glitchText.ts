
import { GitHubUser } from '../types';

export const glitchTextSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
    .glitch-1 { animation: glitch 0.3s infinite; fill: #ff00ff; opacity: 0.5; }
    .glitch-2 { animation: glitch 0.3s infinite reverse; fill: #00ffff; opacity: 0.5; }
    .main-text { fill: #fff; font-family: 'Inter', sans-serif; font-weight: 900; font-size: 32px; }
  </style>
  <rect width="400" height="150" rx="20" fill="#000"/>
  <g transform="translate(200, 85)">
    <text text-anchor="middle" class="main-text glitch-1" x="2" y="2">@${u.login.toUpperCase()}</text>
    <text text-anchor="middle" class="main-text glitch-2" x="-2" y="-2">@${u.login.toUpperCase()}</text>
    <text text-anchor="middle" class="main-text" x="0" y="0">@${u.login.toUpperCase()}</text>
  </g>
  <text x="20" y="30" font-family="monospace" font-size="10" fill="#3fb950">SYSTEM_OVERRIDE: ACTIVE</text>
</svg>`.trim();
};
