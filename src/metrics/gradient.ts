
import { GitHubUser } from '../types';

export const gradientSVG = (user: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#818cf8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="150" rx="12" fill="url(#grad)" stroke="#334155" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="url(#accent)">Modern Vibes</text>
  <text x="25" y="115" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#f8fafc">Built to Code</text>
  <circle cx="350" cy="75" r="40" fill="url(#accent)" fill-opacity="0.1" />
  <circle cx="350" cy="75" r="20" fill="url(#accent)" fill-opacity="0.3" />
</svg>`.trim();
};
