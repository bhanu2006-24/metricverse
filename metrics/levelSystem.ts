
import { GitHubUser } from '../types';

export const levelSystemSVG = (u: GitHubUser): string => {
  const score = (u.public_repos * 5) + (u.followers * 2) + (u.public_gists * 10);
  const level = Math.floor(Math.sqrt(score)) + 1;
  const xpIntoLevel = score % (level * 10);
  const xpNeeded = level * 10;
  const progress = (xpIntoLevel / xpNeeded) * 100;

  return `
<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" rx="24" fill="#0d1117" stroke="#30363d" stroke-width="1"/>
  
  <g transform="translate(30, 40)">
    <text y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#8b949e">DEVELOPER RANK</text>
    <text y="40" font-family="Inter, sans-serif" font-size="42" font-weight="black" fill="#fff">LVL ${level}</text>
    
    <g transform="translate(0, 70)">
      <text y="10" font-family="monospace" font-size="10" fill="#3fb950">EXPERIENCE POINTS: ${score} XP</text>
      <rect y="20" width="340" height="12" rx="6" fill="#161b22"/>
      <rect y="20" width="${(progress / 100) * 340}" height="12" rx="6" fill="#3fb950">
        <animate attributeName="width" from="0" to="${(progress / 100) * 340}" dur="1.5s" fill="freeze" />
      </rect>
    </g>
    
    <text y="125" font-family="sans-serif" font-size="10" fill="#444">Next level in ${xpNeeded - xpIntoLevel} activity points</text>
  </g>
  
  <path d="M340 40 L360 20 L380 40 L380 70 L360 90 L340 70 Z" fill="#3fb950" fill-opacity="0.1" stroke="#3fb950" stroke-width="2"/>
  <text x="360" y="60" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#3fb950">S</text>
</svg>`.trim();
};
