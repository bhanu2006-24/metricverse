
import { GitHubUser } from '../types';

export const wideBannerSVG = (u: GitHubUser): string => `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" rx="20" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
  <text x="40" y="80" font-family="Arial, sans-serif" font-size="42" font-weight="black" fill="#fff">${u.name || u.login}</text>
  <text x="40" y="120" font-family="Arial, sans-serif" font-size="18" fill="#8b949e">${u.bio || 'Building the future, one commit at a time.'}</text>
  <g transform="translate(40, 150)">
    <text x="0" y="0" font-family="monospace" font-size="14" fill="#58a6ff">${u.public_repos} Repos</text>
    <text x="120" y="0" font-family="monospace" font-size="14" fill="#bc8cff">${u.followers} Followers</text>
    <text x="260" y="0" font-family="monospace" font-size="14" fill="#3fb950">${u.location || 'Remote'}</text>
  </g>
</svg>`.trim();

export const neonBannerSVG = (u: GitHubUser): string => `
<svg width="800" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" fill="#000"/>
  <path d="M0 100 Q400 0 800 100" stroke="#00f3ff" stroke-width="1" opacity="0.3"/>
  <path d="M0 100 Q400 200 800 100" stroke="#ff00ff" stroke-width="1" opacity="0.3"/>
  <text x="400" y="100" text-anchor="middle" font-family="Courier, monospace" font-size="48" font-weight="bold" fill="#fff" style="text-shadow: 0 0 20px #00f3ff">@${u.login.toUpperCase()}</text>
  <text x="400" y="140" text-anchor="middle" font-family="Courier, monospace" font-size="14" fill="#00f3ff" opacity="0.8">ESTABLISHED ${new Date(u.created_at).getFullYear()}</text>
</svg>`.trim();
