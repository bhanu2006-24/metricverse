
import { GitHubUser } from '../types';

export const typewriterSkillsSVG = (u: GitHubUser): string => {
  const bio = u.bio || "Full Stack Developer";
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes typing { from { width: 0; } to { width: 100%; } }
    @keyframes blink-cursor { from, to { border-color: transparent; } 50% { border-color: #58a6ff; } }
    .typewriter { 
      font-family: monospace;
      font-size: 16px;
      fill: #58a6ff;
      overflow: hidden;
      white-space: nowrap;
      animation: typing 3s steps(40, end);
    }
  </style>
  <rect width="400" height="150" rx="20" fill="#0d1117" stroke="#30363d"/>
  <text x="30" y="45" font-family="monospace" font-size="10" fill="#8b949e">TERMINAL v1.0.4</text>
  <text x="30" y="75" class="typewriter">> ${u.login.toUpperCase()}</text>
  <text x="30" y="105" font-family="monospace" font-size="12" fill="#fff" opacity="0.8">STATUS: ${bio.substring(0, 30)}...</text>
  <rect x="30" y="115" width="10" height="2" fill="#58a6ff">
    <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
  </rect>
</svg>`.trim();
};
