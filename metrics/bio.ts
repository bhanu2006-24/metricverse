
import { GitHubUser } from '../types';

export const bioSVG = (user: GitHubUser): string => {
  const { login, bio } = user;
  const displayBio = bio ? (bio.length > 40 ? bio.substring(0, 37) + '...' : bio) : 'No bio provided';
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#bc8cff">Developer Bio</text>
  <text x="25" y="80" font-family="Arial, sans-serif" font-size="14" fill="#8b949e">@${login}</text>
  <text x="25" y="115" font-family="Arial, sans-serif" font-size="16" font-style="italic" fill="#c9d1d9">"${displayBio}"</text>
</svg>`.trim();
};
