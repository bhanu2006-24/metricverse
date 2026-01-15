
import { GitHubUser } from '../types';

const brute = (title: string, value: string, color: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#fff"/>
  <rect x="10" y="10" width="380" height="130" fill="${color}" stroke="#000" stroke-width="4"/>
  <rect x="15" y="15" width="380" height="130" fill="none" stroke="#000" stroke-width="4"/>
  <text x="35" y="55" font-family="Impact, sans-serif" font-size="28" fill="#000">${title.toUpperCase()}</text>
  <text x="35" y="115" font-family="Impact, sans-serif" font-size="54" fill="#000">${value}</text>
</svg>`.trim();

export const bruteReposSVG = (u: GitHubUser) => brute("Repositories", u.public_repos.toString(), "#FFD600");
export const bruteFollowersSVG = (u: GitHubUser) => brute("Followers", u.followers.toString(), "#FF6B6B");
export const bruteFollowingSVG = (u: GitHubUser) => brute("Following", u.following.toString(), "#4ECDC4");
