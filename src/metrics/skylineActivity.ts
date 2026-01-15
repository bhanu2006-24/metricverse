
import { GitHubUser } from '../types';

export const skylineActivitySVG = (u: GitHubUser): string => {
  const points = "0,150 50,120 100,140 150,80 200,100 250,40 300,90 350,110 400,60 450,100 500,130 550,70 600,40 650,90 700,120 750,80 800,150";
  
  return `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" rx="20" fill="#050505" stroke="#111" stroke-width="1"/>
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#238636" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#238636" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <path d="M${points}" fill="url(#skyGrad)"/>
  <path d="M${points}" stroke="#3fb950" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="30" y="45" font-family="Inter, sans-serif" font-size="18" font-weight="black" fill="#fff" opacity="0.8">ACTIVITY SKYLINE</text>
  <text x="770" y="45" text-anchor="end" font-family="monospace" font-size="12" fill="#3fb950">LIVE PULSE</text>
  
  <g opacity="0.1">
    ${Array.from({length: 10}).map((_, i) => `
      <line x1="0" y1="${i * 20}" x2="800" y2="${i * 20}" stroke="#fff" stroke-width="0.5"/>
      <line x1="${i * 80}" y1="0" x2="${i * 80}" y2="200" stroke="#fff" stroke-width="0.5"/>
    `).join('')}
  </g>
</svg>`.trim();
};
