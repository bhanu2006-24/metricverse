
import { GitHubUser } from '../types';

export const socialBannerSVG = (u: GitHubUser): string => {
  return `
<svg width="800" height="120" viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="120" rx="16" fill="#161b22" stroke="#30363d" stroke-width="1"/>
  <text x="40" y="45" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#fff">🌐 CONNECT WITH ME</text>
  
  <g transform="translate(40, 70)">
    <rect width="120" height="30" rx="6" fill="#5865F2"/>
    <text x="60" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">DISCORD</text>
    
    <g transform="translate(140, 0)">
      <rect width="120" height="30" rx="6" fill="#E1306C"/>
      <text x="60" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">INSTAGRAM</text>
    </g>

    <g transform="translate(280, 0)">
      <rect width="120" height="30" rx="6" fill="#0077B5"/>
      <text x="60" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">LINKEDIN</text>
    </g>

    <g transform="translate(420, 0)">
      <rect width="120" height="30" rx="6" fill="#1DA1F2"/>
      <text x="60" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">TWITTER</text>
    </g>
  </g>
</svg>`.trim();
};
