
import { GitHubUser } from '../types';

const pixelFrame = (title: string, value: string, color: string) => `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="#000"/>
  <rect x="10" y="10" width="380" height="130" stroke="${color}" stroke-width="4" fill="none"/>
  <rect x="20" y="20" width="10" height="10" fill="${color}"/>
  <rect x="370" y="20" width="10" height="10" fill="${color}"/>
  <rect x="20" y="120" width="10" height="10" fill="${color}"/>
  <rect x="370" y="120" width="10" height="10" fill="${color}"/>
  <text x="45" y="60" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="${color}">${title.toUpperCase()}</text>
  <text x="45" y="110" font-family="'Courier New', monospace" font-size="40" font-weight="bold" fill="#fff">${value}</text>
  <path d="M330 80h10v10h-10zM340 70h10v10h-10zM350 60h10v10h-10zM360 70h10v10h-10zM370 80h10v10h-10z" fill="${color}"/>
</svg>`.trim();

export const pixelReposSVG = (u: GitHubUser) => pixelFrame("Invader Repos", u.public_repos.toString(), "#0f0");
export const pixelFollowersSVG = (u: GitHubUser) => pixelFrame("Pixel Party", u.followers.toString(), "#f0f");
export const pixelActivitySVG = (u: GitHubUser) => pixelFrame("Bit Score", (u.public_repos + u.public_gists).toString(), "#0ff");
