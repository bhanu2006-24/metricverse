
import { GitHubUser } from '../types';

const comicFrame = (title: string, value: string, color: string, rotate: number) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#fff"/>
  <rect x="10" y="10" width="380" height="130" fill="${color}" stroke="#000" stroke-width="5" transform="rotate(${rotate} 200 75)"/>
  <text x="40" y="60" font-family="'Comic Sans MS', cursive" font-size="24" font-weight="black" fill="#000" stroke="#fff" stroke-width="1">${title.toUpperCase()}!</text>
  <text x="40" y="120" font-family="'Comic Sans MS', cursive" font-size="50" font-weight="black" fill="#000" stroke="#fff" stroke-width="2">${value}</text>
  <circle cx="340" cy="50" r="30" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="340" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000">POW!</text>
</svg>`.trim();

export const comicReposSVG = (u: GitHubUser) => comicFrame("Repos", u.public_repos.toString(), "#FFEB3B", -1);
export const comicFollowersSVG = (u: GitHubUser) => comicFrame("Fans", u.followers.toString(), "#E91E63", 1);
export const comicActivitySVG = (u: GitHubUser) => comicFrame("Action", (u.public_repos + u.public_gists).toString(), "#2196F3", -0.5);
