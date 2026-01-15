
import { GitHubUser } from '../types';

export const asciiArtSVG = (u: GitHubUser): string => {
  const name = u.login.substring(0, 8).toUpperCase();
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes reveal-ascii { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
    .ascii-line { animation: reveal-ascii 0.5s forwards; font-family: monospace; font-size: 10px; fill: #3fb950; }
  </style>
  <rect width="400" height="150" rx="20" fill="#000" stroke="#3fb950" stroke-opacity="0.2"/>
  
  <g transform="translate(40, 50)">
    <text class="ascii-line" style="animation-delay: 0.1s" y="0">  _  _   _   ___ _  _____</text>
    <text class="ascii-line" style="animation-delay: 0.2s" y="12"> | || | /_\\ / __| |/ / __|</text>
    <text class="ascii-line" style="animation-delay: 0.3s" y="24"> | __ |/ _ \\ (__| ' <| _| </text>
    <text class="ascii-line" style="animation-delay: 0.4s" y="36"> |_||_/_/ \\_\\___|_|\\_\\___|</text>
    <text x="0" y="65" font-family="monospace" font-size="14" fill="#fff" font-weight="bold">> @${u.login.toUpperCase()}</text>
  </g>

  <text x="370" y="130" text-anchor="end" font-family="monospace" font-size="8" fill="#3fb950" opacity="0.5">EST. ${new Date(u.created_at).getFullYear()}</text>
</svg>`.trim();
};
