
import { GitHubUser } from '../types';

export const locationSVG = (user: GitHubUser): string => {
  const loc = user.location || 'The Metaverse';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#58a6ff">Base of Ops</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Current Location</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#c9d1d9">${loc}</text>
  <circle cx="350" cy="80" r="20" stroke="#58a6ff" stroke-width="2" fill="none"/>
  <path d="M350 70 V90 M340 80 H360" stroke="#58a6ff" stroke-width="2"/>
</svg>`.trim();
};
