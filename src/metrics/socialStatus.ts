
import { GitHubUser } from '../types';

export const socialStatusSVG = (user: GitHubUser): string => {
  let rank = 'Newcomer';
  let color = '#8b949e';
  if (user.followers > 1000) { rank = 'Titan'; color = '#d29922'; }
  else if (user.followers > 500) { rank = 'Influencer'; color = '#bc8cff'; }
  else if (user.followers > 100) { rank = 'Pro'; color = '#58a6ff'; }
  else if (user.followers > 10) { rank = 'Rising Star'; color = '#3fb950'; }

  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="${color}">Social Status</text>
  <text x="25" y="115" font-family="Arial, sans-serif" font-size="36" font-weight="black" fill="#c9d1d9">${rank.toUpperCase()}</text>
  <path d="M330 100 L350 60 L370 100 Z" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.2"/>
</svg>`.trim();
};
