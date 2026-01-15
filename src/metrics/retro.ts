
import { GitHubUser } from '../types';

export const retroSVG = (user: GitHubUser): string => {
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#000" stroke="#0f0" stroke-width="2"/>
  <text x="20" y="40" font-family="monospace" font-size="18" fill="#0f0">USER@GITHUB:~$ ls -l</text>
  <text x="20" y="75" font-family="monospace" font-size="16" fill="#0f0">REPOS: ${user.public_repos}</text>
  <text x="20" y="100" font-family="monospace" font-size="16" fill="#0f0">FOLLOWERS: ${user.followers}</text>
  <text x="20" y="125" font-family="monospace" font-size="16" fill="#0f0">_</text>
  <rect x="30" y="115" width="10" height="15" fill="#0f0">
    <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>`.trim();
};
