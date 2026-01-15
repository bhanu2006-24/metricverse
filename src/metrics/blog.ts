
import { GitHubUser } from '../types';

export const blogSVG = (user: GitHubUser): string => {
  const url = user.blog || 'github.com';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#bc8cff">Digital Home</text>
  <text x="25" y="115" font-family="Arial, sans-serif" font-size="18" fill="#c9d1d9">${url}</text>
  <circle cx="350" cy="80" r="25" stroke="#bc8cff" stroke-width="2" fill="none"/>
  <path d="M340 80 Q350 60 360 80 Q350 100 340 80" stroke="#bc8cff" stroke-width="2" fill="none"/>
</svg>`.trim();
};
