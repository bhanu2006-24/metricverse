
import { GitHubUser } from '../types';

export const wordMorphSVG = (u: GitHubUser): string => {
  const roles = ["CODER", "HACKER", "BUILDER", "TEACHER"];
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes morph {
      0%, 20% { opacity: 0; transform: translateY(10px); }
      25%, 45% { opacity: 1; transform: translateY(0); }
      50%, 100% { opacity: 0; transform: translateY(-10px); }
    }
    .role { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 42px; fill: #bc8cff; opacity: 0; }
  </style>
  <rect width="400" height="150" rx="20" fill="#0d1117" stroke="#30363d"/>
  <text x="200" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#8b949e" letter-spacing="4">IDENTITY CORE</text>
  ${roles.map((role, i) => `
    <text x="200" y="110" text-anchor="middle" class="role" style="animation: morph 8s infinite; animation-delay: ${i * 2}s">${role}</text>
  `).join('')}
</svg>`.trim();
};
