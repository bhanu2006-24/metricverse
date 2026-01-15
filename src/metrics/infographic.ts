
import { GitHubUser } from '../types';

export const summaryStatsSVG = (u: GitHubUser): string => `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="15" fill="#161b22" stroke="#30363d" stroke-width="1"/>
  <text x="20" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#58a6ff">Developer DNA</text>
  <line x1="20" y1="55" x2="380" y2="55" stroke="#30363d" stroke-width="1"/>
  <g transform="translate(20, 80)">
    <text y="0" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">REPOS</text>
    <text y="25" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#fff">${u.public_repos}</text>
    
    <text x="120" y="0" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">FOLLOWERS</text>
    <text x="120" y="25" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#fff">${u.followers}</text>
    
    <text x="240" y="0" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">GISTS</text>
    <text x="240" y="25" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#fff">${u.public_gists}</text>
  </g>
  <g transform="translate(20, 150)">
    <rect width="360" height="8" rx="4" fill="#30363d"/>
    <rect width="${Math.min(360, (u.public_repos / 50) * 360)}" height="8" rx="4" fill="#238636"/>
    <text y="25" font-family="Arial, sans-serif" font-size="10" fill="#8b949e">REPO PROGRESS TO 50</text>
  </g>
</svg>`.trim();

export const cardIdentitySVG = (u: GitHubUser): string => `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="20" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
  <circle cx="60" cy="60" r="30" fill="#30363d"/>
  <text x="110" y="55" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#fff">${u.login}</text>
  <text x="110" y="75" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">${u.location || 'The Web'}</text>
  <rect x="20" y="110" width="360" height="70" rx="10" fill="#161b22"/>
  <text x="40" y="140" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">HIREABLE</text>
  <text x="40" y="165" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${u.hireable ? '#3fb950' : '#f85149'}">${u.hireable ? 'YES' : 'NO'}</text>
  <text x="150" y="140" font-family="Arial, sans-serif" font-size="12" fill="#8b949e">SINCE</text>
  <text x="150" y="165" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#fff">${new Date(u.created_at).getFullYear()}</text>
</svg>`.trim();
