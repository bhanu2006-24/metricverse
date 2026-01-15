
import { GitHubUser } from '../types';

export const dnaProfileSVG = (u: GitHubUser): string => {
  return `
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes dna-rotate {
      0% { transform: translateY(0); }
      100% { transform: translateY(-40px); }
    }
    .base-pair { animation: dna-rotate 2s linear infinite; }
  </style>
  <rect width="400" height="400" rx="40" fill="#0a0a0a" stroke="#1a1a1a"/>
  
  <g transform="translate(200, 50)">
    ${Array.from({length: 15}).map((_, i) => {
      const delay = i * 0.2;
      return `
        <g class="base-pair" style="animation-delay: -${delay}s">
          <line x1="-40" y1="${i * 25}" x2="40" y2="${i * 25}" stroke="#333" stroke-width="1">
            <animate attributeName="x1" values="-40;40;-40" dur="2s" begin="-${delay}s" repeatCount="indefinite" />
            <animate attributeName="x2" values="40;-40;40" dur="2s" begin="-${delay}s" repeatCount="indefinite" />
          </line>
          <circle cx="0" cy="${i * 25}" r="5" fill="#58a6ff">
            <animate attributeName="cx" values="-40;40;-40" dur="2s" begin="-${delay}s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="${i * 25}" r="5" fill="#bc8cff">
            <animate attributeName="cx" values="40;-40;40" dur="2s" begin="-${delay}s" repeatCount="indefinite" />
          </circle>
        </g>
      `;
    }).join('')}
  </g>
  <rect x="20" y="20" width="360" height="360" rx="20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
  <text x="40" y="360" font-family="Inter, sans-serif" font-size="18" font-weight="900" fill="#fff">DEVELOPER_BLUEPRINT</text>
  <text x="40" y="340" font-family="monospace" font-size="10" fill="#8b949e">GENOTYPE: @${u.login.toUpperCase()}</text>
</svg>`.trim();
};
