
import { GitHubUser } from '../types';

export const activityClockSVG = (u: GitHubUser): string => {
  const segments = Array.from({ length: 24 }, (_, i) => ({
    active: i > 9 && i < 18, // Simulated peak hours
    hour: i
  }));

  return `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" rx="20" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="40" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#58a6ff">Peak Activity Time</text>
  
  <g transform="translate(200, 160)">
    <circle r="80" stroke="#161b22" stroke-width="20" fill="none"/>
    ${segments.map((s, i) => {
      const angle = (i * 15) - 90;
      const x = Math.cos(angle * Math.PI / 180) * 80;
      const y = Math.sin(angle * Math.PI / 180) * 80;
      return `
        <circle cx="${x}" cy="${y}" r="6" fill="${s.active ? '#3fb950' : '#30363d'}">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" begin="${i * 0.1}s" repeatCount="indefinite" />
        </circle>
      `;
    }).join('')}
    <text y="5" text-anchor="middle" font-family="monospace" font-size="24" font-weight="black" fill="#fff">24H</text>
    <text y="25" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#8b949e">Sync Pulse</text>
  </g>
  <text x="25" y="270" font-family="Inter, sans-serif" font-size="12" fill="#444">High concentration detected: 10AM - 6PM</text>
</svg>`.trim();
};
