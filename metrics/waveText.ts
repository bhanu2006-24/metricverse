
import { GitHubUser } from '../types';

export const waveTextSVG = (u: GitHubUser): string => {
  const chars = u.login.toUpperCase().split('');
  return `
<svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .wave-char { 
      font-family: 'Inter', sans-serif; 
      font-weight: 900; 
      font-size: 32px; 
      fill: #58a6ff; 
      display: inline-block;
      animation: wave 2s ease-in-out infinite;
    }
  </style>
  <rect width="400" height="150" rx="24" fill="#0d1117" stroke="#30363d"/>
  <g transform="translate(200, 85)">
    ${chars.map((char, i) => {
      const offset = (i - chars.length / 2) * 25;
      return `<text text-anchor="middle" x="${offset}" y="0" class="wave-char" style="animation-delay: ${i * 0.1}s">${char}</text>`;
    }).join('')}
  </g>
  <path d="M50,110 Q125,90 200,110 T350,110" stroke="#58a6ff" stroke-width="2" fill="none" opacity="0.3">
    <animate attributeName="d" values="M50,110 Q125,90 200,110 T350,110; M50,110 Q125,130 200,110 T350,110; M50,110 Q125,90 200,110 T350,110" dur="4s" repeatCount="indefinite" />
  </path>
</svg>`.trim();
};
