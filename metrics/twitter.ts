
import { GitHubUser } from '../types';

export const twitterSVG = (user: GitHubUser): string => {
  const handle = user.twitter_username ? `@${user.twitter_username}` : 'Not linked';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#1d9bf0">Twitter Sync</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">Social Identity</text>
  <text x="25" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#c9d1d9">${handle}</text>
  <path d="M350 60 C330 60 330 100 370 100" stroke="#1d9bf0" stroke-width="3" fill="none"/>
</svg>`.trim();
};
