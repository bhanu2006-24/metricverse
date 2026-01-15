
import { GitHubUser } from '../types';

export const accountAgeSVG = (user: GitHubUser): string => {
  const created = new Date(user.created_at);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - created.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ffa657">Account Age</text>
  <text x="25" y="115" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#c9d1d9">${diffYears}y ${diffMonths}m</text>
  <path d="M330 80 A20 20 0 1 1 370 80 A20 20 0 1 1 330 80" stroke="#ffa657" stroke-width="2" fill="none"/>
  <path d="M350 80 L350 70 M350 80 L360 80" stroke="#ffa657" stroke-width="2" stroke-linecap="round"/>
</svg>`.trim();
};
