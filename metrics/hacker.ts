
import { GitHubUser } from '../types';

const hackerFrame = (title: string, value: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#0a0a0a"/>
  <defs>
    <pattern id="matrix" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <text x="0" y="15" font-family="monospace" font-size="10" fill="#0f0" opacity="0.1">01</text>
    </pattern>
  </defs>
  <rect width="400" height="150" fill="url(#matrix)"/>
  <text x="20" y="40" font-family="monospace" font-size="14" fill="#0f0" opacity="0.8">root@github:~# get ${title.toLowerCase()}</text>
  <text x="20" y="90" font-family="monospace" font-size="36" font-weight="bold" fill="#0f0">${value}</text>
  <rect x="20" y="110" width="360" height="4" fill="#0f0" opacity="0.2"/>
  <rect x="20" y="110" width="240" height="4" fill="#0f0"/>
</svg>`.trim();

export const hackerReposSVG = (u: GitHubUser) => hackerFrame("Repositories", u.public_repos.toString());
export const hackerFollowersSVG = (u: GitHubUser) => hackerFrame("Followers", u.followers.toString());
export const hackerGistsSVG = (u: GitHubUser) => hackerFrame("Gists", u.public_gists.toString());
