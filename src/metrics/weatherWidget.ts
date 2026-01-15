
import { GitHubUser } from '../types';

export const weatherWidgetSVG = (u: GitHubUser): string => {
  const isSunny = u.followers > 20;
  const temp = u.public_repos + 15;
  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="24" fill="url(#sky-grad)"/>
  
  <g transform="translate(50, 80)">
    ${isSunny ? `
      <circle cx="0" cy="0" r="30" fill="#FDB813">
        <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" />
      </circle>
    ` : `
      <path d="M-20 10 Q-30 0 -10 -10 Q0 -20 20 -10 Q40 0 20 10 Z" fill="#fff" opacity="0.8"/>
    `}
  </g>

  <text x="350" y="80" text-anchor="end" font-family="Inter, sans-serif" font-size="64" font-weight="black" fill="#fff">${temp}°</text>
  <text x="350" y="110" text-anchor="end" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#fff" opacity="0.8">GITHUB CLIMATE: ${isSunny ? 'SUNNY' : 'CLOUDY'}</text>
  
  <g transform="translate(40, 160)">
    <text font-family="monospace" font-size="10" fill="#fff" opacity="0.6">WIND: ${u.following}km/h • HUMIDITY: 45%</text>
  </g>

  <defs>
    <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4facfe"/>
      <stop offset="100%" stop-color="#00f2fe"/>
    </linearGradient>
  </defs>
</svg>`.trim();
};
