
import { GitHubUser } from '../types';

export const proAnalyticsSVG = (u: GitHubUser): string => {
  const name = u.name || u.login;
  const bio = u.bio || "Full Stack Developer • Open Source Contributor";
  const years = (Math.abs(new Date().getTime() - new Date(u.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  
  return `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" rx="24" fill="#000"/>
  
  <!-- Header -->
  <text x="30" y="55" font-family="Arial, sans-serif" font-size="28" font-weight="black" fill="#fff">${name}</text>
  <text x="30" y="80" font-family="Arial, sans-serif" font-size="14" fill="#888">${bio}</text>
  <text x="770" y="55" text-anchor="end" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#555" letter-spacing="2">PRO ANALYTICS</text>

  <!-- Main Grid -->
  <!-- Box 1: Stars -->
  <rect x="30" y="115" width="200" height="110" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="45" y="140" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#888" letter-spacing="1">TOTAL STARS</text>
  <text x="45" y="185" font-family="Arial, sans-serif" font-size="32" font-weight="black" fill="#fff">0</text>
  <text x="45" y="205" font-family="Arial, sans-serif" font-size="10" fill="#444">Across all repositories</text>
  <path d="M205 135 L210 125 L215 135 L225 135 L217 142 L220 152 L210 145 L200 152 L203 142 L195 135 Z" fill="#d29922"/>

  <!-- Box 2: Streak -->
  <rect x="250" y="115" width="200" height="110" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="265" y="140" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#888" letter-spacing="1">CURRENT STREAK</text>
  <text x="265" y="185" font-family="Arial, sans-serif" font-size="32" font-weight="black" fill="#fff">12 Days</text>
  <text x="265" y="205" font-family="Arial, sans-serif" font-size="10" fill="#444">Keep the fire burning</text>
  <path d="M415 135 C425 135 425 155 415 155 S405 135 415 135" fill="#f70"/>

  <!-- Activity Hub Sidebar -->
  <rect x="470" y="115" width="300" height="305" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="485" y="145" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#888" letter-spacing="1">ACTIVITY HUB</text>
  
  <g transform="translate(485, 175)">
    <text x="30" y="10" font-family="Arial, sans-serif" font-size="14" fill="#fff">📦 ${u.public_repos} Commits</text>
    <line x1="30" y1="25" x2="270" y2="25" stroke="#222"/>
    
    <text x="30" y="55" font-family="Arial, sans-serif" font-size="14" fill="#fff">🔀 ${u.public_gists} Pull Requests</text>
    <line x1="30" y1="70" x2="270" y2="70" stroke="#222"/>
    
    <text x="30" y="100" font-family="Arial, sans-serif" font-size="14" fill="#fff">❗ 0 Issues</text>
    <line x1="30" y1="115" x2="270" y2="115" stroke="#222"/>
    
    <text x="30" y="145" font-family="Arial, sans-serif" font-size="14" fill="#fff">⚡ ${u.followers + u.public_repos} Total</text>
  </g>

  <!-- Bottom Row small boxes -->
  <rect x="30" y="240" width="130" height="100" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="45" y="265" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555">COMMUNITY</text>
  <text x="45" y="295" font-family="Arial, sans-serif" font-size="28" font-weight="black" fill="#fff">${u.followers}</text>
  <text x="45" y="315" font-family="Arial, sans-serif" font-size="10" fill="#333">Followers</text>

  <rect x="175" y="240" width="130" height="100" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="190" y="265" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555">PROJECTS</text>
  <text x="190" y="295" font-family="Arial, sans-serif" font-size="28" font-weight="black" fill="#fff">${u.public_repos}</text>
  <text x="190" y="315" font-family="Arial, sans-serif" font-size="10" fill="#333">Repositories</text>

  <rect x="320" y="240" width="130" height="100" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="335" y="265" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555">PEAK DAY</text>
  <text x="335" y="295" font-family="Arial, sans-serif" font-size="28" font-weight="black" fill="#fff">Mon</text>
  <text x="335" y="315" font-family="Arial, sans-serif" font-size="10" fill="#333">Most Active</text>

  <!-- Footer Section: Tech Stack -->
  <rect x="30" y="355" width="420" height="65" rx="16" fill="#111" stroke="#222" stroke-width="1"/>
  <text x="45" y="375" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555">TOP TECHNOLOGIES</text>
  <rect x="45" y="388" width="390" height="6" rx="3" fill="#222"/>
  <rect x="45" y="388" width="180" height="6" rx="3" fill="#007acc"/>
  <rect x="225" y="388" width="120" height="6" rx="3" fill="#f7df1e"/>
  <rect x="345" y="388" width="90" height="6" rx="3" fill="#4f5d95"/>
  <text x="45" y="410" font-family="Arial, sans-serif" font-size="9" fill="#444">TypeScript • JavaScript • PHP • Python</text>

  <rect x="30" y="425" width="80" height="20" rx="4" fill="#111"/>
  <text x="30" y="330" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#555">EXPERIENCE</text>
  <text x="30" y="410" font-family="Arial, sans-serif" font-size="24" font-weight="black" fill="#fff">${years}y</text>

</svg>`.trim();
};
