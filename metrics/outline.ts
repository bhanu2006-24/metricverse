
import { GitHubUser } from '../types';

const outlineFrame = (title: string, value: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="398" height="148" rx="20" stroke="#c9d1d9" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="200" y="60" text-anchor="middle" font-family="serif" font-size="14" font-style="italic" fill="#8b949e">${title}</text>
  <text x="200" y="110" text-anchor="middle" font-family="sans-serif" font-size="48" font-weight="100" fill="#c9d1d9">${value}</text>
</svg>`.trim();

export const outlineReposSVG = (u: GitHubUser) => outlineFrame("Registered Repositories", u.public_repos.toString());
export const outlineFollowersSVG = (u: GitHubUser) => outlineFrame("Profile Subscribers", u.followers.toString());
export const outlineActivitySVG = (u: GitHubUser) => outlineFrame("Total Contributions", (u.public_repos + u.public_gists).toString());
