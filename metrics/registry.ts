import { MetricDefinition } from '../types';

import { accountAgeSVG } from './accountAge';
import { activityClockSVG } from './activityClock';
import { activityMatrixSVG } from './activityMatrix';
import { analystProSVG } from './analystPro';
import { asciiArtSVG } from './asciiArt';
import { badgeWallSVG } from './badgeWall';
import { wideBannerSVG, neonBannerSVG } from './banners';
import { bentoGridSVG } from './bentoGrid';
import { bioSVG } from './bio';
import { blogSVG } from './blog';
import { blueprintProSVG } from './blueprintPro';
import { carRaceSVG } from './carRace';
import { clockMetricSVG } from './clockMetric';
import { comicReposSVG, comicFollowersSVG, comicActivitySVG } from './comic';
import { commitHistorySVG } from './commitHistory';
import { commitsSVG } from './commits';
import { companySVG } from './company';
import { confettiSVG } from './confetti';
import { contributionGridSVG } from './contributionGrid';
import { cyberReposSVG, cyberFollowersSVG, cyberActivitySVG } from './cyberpunk';
import { devConsoleSVG } from './devConsole';
import { dnaProfileSVG } from './dnaProfile';
import { emojiSwarmSVG } from './emojiSwarm';
import { fireworksSVG } from './fireworks';
import { flappyMetricsSVG } from './flappyMetrics';
import { followersSVG } from './followers';
import { followingSVG } from './following';
import { glassReposSVG, glassFollowersSVG, glassGistsSVG } from './glassmorphism';
import { glitchTextSVG } from './glitchText';
import { gradientSVG } from './gradient';
import { activityGraphSVG, circularProgressSVG } from './graphs';
import { growingTreeSVG } from './growingTree';
import { hackerReposSVG, hackerFollowersSVG, hackerGistsSVG } from './hacker';
import { heartbeatSVG } from './heartbeat';
import { hireableSVG } from './hireable';
import { iconGridProSVG } from './iconGridPro';
import { impactSVG } from './impact';
import { infinityLoopSVG } from './infinityLoop';
import { summaryStatsSVG, cardIdentitySVG } from './infographic';
import { isoBoxSVG } from './isoBox';
import { joinDateSVG } from './joinDate';
import { languagePieSVG } from './languagePie';
import { languageStackSVG } from './languageStack';
import { levelSystemSVG } from './levelSystem';
import { locationSVG } from './location';
import { marioJumpSVG } from './marioJump';
import { marqueeSVG } from './marquee';
import { matrixRainSVG } from './matrixRain';
import { repoMilestoneSVG } from './milestones';
import { minimalistSVG } from './minimalist';
import { bruteReposSVG, bruteFollowersSVG, bruteFollowingSVG } from './neobrutalist';
import { orbitingSkillsSVG } from './orbitingSkills';
import { outlineReposSVG, outlineFollowersSVG, outlineActivitySVG } from './outline';
import { pacmanFollowersSVG } from './pacman';
import { pingPongSVG } from './pingPong';
import { pixelReposSVG, pixelFollowersSVG, pixelActivitySVG } from './pixel';
import { pixelDanceSVG } from './pixelDance';
import { goldCardSVG, silverCardSVG, bronzeCardSVG } from './premium';
import { proAnalyticsSVG } from './proAnalytics';
import { projectPortfolioSVG } from './projectPortfolio';
import { projectTimelineSVG } from './projectTimeline';
import { radarChartSVG } from './radarChart';
import { radarScanSVG } from './radarScan';
import { rainbowTextSVG } from './rainbowText';
import { ratioSVG } from './ratio';
import { readmeHeaderSVG } from './readmeHeader';
import { reposSVG } from './repos';
import { retroSVG } from './retro';
import { rocketLaunchSVG } from './rocketLaunch';
import { securitySVG } from './security';
import { skillGaugesSVG } from './skillGauges';
import { skylineActivitySVG } from './skylineActivity';
import { snakeActivitySVG } from './snakeActivity';
import { socialBannerSVG } from './socialBanner';
import { socialStatusSVG } from './socialStatus';
import { spinningCubeSVG } from './spinningCube';
import { streakStatsSVG } from './streakStats';
import { techIconsGridSVG } from './techIconsGrid';
import { techSphereSVG } from './techSphere';
import { tetrisMetricsSVG } from './tetrisMetrics';
import { topicCloudSVG } from './topicCloud';
import { trophyCaseSVG } from './trophyCase';
import { twitterSVG } from './twitter';
import { typewriterSkillsSVG } from './typewriter';
import { ultimateAnalyticsSVG } from './ultimateAnalytics';
import { waterRippleSVG } from './waterRipple';
import { waveTextSVG } from './waveText';
import { weatherWidgetSVG } from './weatherWidget';
import { wordMorphSVG } from './wordMorph';
import { workflowAnalyticsSVG } from './workflowAnalytics';

export const METRIC_REGISTRY: MetricDefinition[] = [
  { id: 'accountAge', title: 'Account Age', category: 'intelligence', generate: accountAgeSVG }, 
  { id: 'activityClock', title: 'Activity Clock', category: 'intelligence', generate: activityClockSVG }, 
  { id: 'activityMatrix', title: 'Activity Matrix', category: 'intelligence', generate: activityMatrixSVG }, 
  { id: 'analystPro', title: 'Analyst Pro', category: 'intelligence', generate: analystProSVG }, 
  { id: 'asciiArt', title: 'Ascii Art', category: 'intelligence', generate: asciiArtSVG }, 
  { id: 'badgeWall', title: 'Badge Wall', category: 'themed', generate: badgeWallSVG }, 
  { id: 'wideBanner', title: 'Wide Banner', category: 'banner', generate: wideBannerSVG }, 
  { id: 'neonBanner', title: 'Neon Banner', category: 'banner', generate: neonBannerSVG }, 
  { id: 'bentoGrid', title: 'Bento Grid', category: 'intelligence', generate: bentoGridSVG }, 
  { id: 'bio', title: 'Bio', category: 'intelligence', generate: bioSVG }, 
  { id: 'blog', title: 'Blog', category: 'intelligence', generate: blogSVG }, 
  { id: 'blueprintPro', title: 'Blueprint Pro', category: 'intelligence', generate: blueprintProSVG }, 
  { id: 'carRace', title: 'Car Race', category: 'gamified', generate: carRaceSVG }, 
  { id: 'clockMetric', title: 'Clock Metric', category: 'intelligence', generate: clockMetricSVG }, 
  { id: 'comicRepos', title: 'Comic Repos', category: 'intelligence', generate: comicReposSVG }, 
  { id: 'comicFollowers', title: 'Comic Followers', category: 'intelligence', generate: comicFollowersSVG }, 
  { id: 'comicActivity', title: 'Comic Activity', category: 'intelligence', generate: comicActivitySVG }, 
  { id: 'commitHistory', title: 'Commit History', category: 'intelligence', generate: commitHistorySVG }, 
  { id: 'commits', title: 'Commits', category: 'intelligence', generate: commitsSVG }, 
  { id: 'company', title: 'Company', category: 'intelligence', generate: companySVG }, 
  { id: 'confetti', title: 'Confetti', category: 'motion', generate: confettiSVG }, 
  { id: 'contributionGrid', title: 'Contribution Grid', category: 'intelligence', generate: contributionGridSVG }, 
  { id: 'cyberRepos', title: 'Cyber Repos', category: 'motion', generate: cyberReposSVG }, 
  { id: 'cyberFollowers', title: 'Cyber Followers', category: 'motion', generate: cyberFollowersSVG }, 
  { id: 'cyberActivity', title: 'Cyber Activity', category: 'motion', generate: cyberActivitySVG }, 
  { id: 'devConsole', title: 'Dev Console', category: 'intelligence', generate: devConsoleSVG }, 
  { id: 'dnaProfile', title: 'Dna Profile', category: 'intelligence', generate: dnaProfileSVG }, 
  { id: 'emojiSwarm', title: 'Emoji Swarm', category: 'intelligence', generate: emojiSwarmSVG }, 
  { id: 'fireworks', title: 'Fireworks', category: 'motion', generate: fireworksSVG }, 
  { id: 'flappyMetrics', title: 'Flappy Metrics', category: 'gamified', generate: flappyMetricsSVG }, 
  { id: 'followers', title: 'Followers', category: 'intelligence', generate: followersSVG }, 
  { id: 'following', title: 'Following', category: 'intelligence', generate: followingSVG }, 
  { id: 'glassRepos', title: 'Glass Repos', category: 'themed', generate: glassReposSVG }, 
  { id: 'glassFollowers', title: 'Glass Followers', category: 'themed', generate: glassFollowersSVG }, 
  { id: 'glassGists', title: 'Glass Gists', category: 'themed', generate: glassGistsSVG }, 
  { id: 'glitchText', title: 'Glitch Text', category: 'motion', generate: glitchTextSVG }, 
  { id: 'gradient', title: 'Gradient', category: 'themed', generate: gradientSVG }, 
  { id: 'activityGraph', title: 'Activity Graph', category: 'intelligence', generate: activityGraphSVG }, 
  { id: 'circularProgress', title: 'Circular Progress', category: 'intelligence', generate: circularProgressSVG }, 
  { id: 'growingTree', title: 'Growing Tree', category: 'intelligence', generate: growingTreeSVG }, 
  { id: 'hackerRepos', title: 'Hacker Repos', category: 'themed', generate: hackerReposSVG }, 
  { id: 'hackerFollowers', title: 'Hacker Followers', category: 'themed', generate: hackerFollowersSVG }, 
  { id: 'hackerGists', title: 'Hacker Gists', category: 'themed', generate: hackerGistsSVG }, 
  { id: 'heartbeat', title: 'Heartbeat', category: 'intelligence', generate: heartbeatSVG }, 
  { id: 'hireable', title: 'Hireable', category: 'intelligence', generate: hireableSVG }, 
  { id: 'iconGridPro', title: 'Icon Grid Pro', category: 'themed', generate: iconGridProSVG }, 
  { id: 'impact', title: 'Impact', category: 'intelligence', generate: impactSVG }, 
  { id: 'infinityLoop', title: 'Infinity Loop', category: 'intelligence', generate: infinityLoopSVG }, 
  { id: 'summaryStats', title: 'Summary Stats', category: 'intelligence', generate: summaryStatsSVG }, 
  { id: 'cardIdentity', title: 'Card Identity', category: 'gamified', generate: cardIdentitySVG }, 
  { id: 'isoBox', title: 'Iso Box', category: 'intelligence', generate: isoBoxSVG }, 
  { id: 'joinDate', title: 'Join Date', category: 'intelligence', generate: joinDateSVG }, 
  { id: 'languagePie', title: 'Language Pie', category: 'intelligence', generate: languagePieSVG }, 
  { id: 'languageStack', title: 'Language Stack', category: 'intelligence', generate: languageStackSVG }, 
  { id: 'levelSystem', title: 'Level System', category: 'intelligence', generate: levelSystemSVG }, 
  { id: 'location', title: 'Location', category: 'intelligence', generate: locationSVG }, 
  { id: 'marioJump', title: 'Mario Jump', category: 'gamified', generate: marioJumpSVG }, 
  { id: 'marquee', title: 'Marquee', category: 'intelligence', generate: marqueeSVG }, 
  { id: 'matrixRain', title: 'Matrix Rain', category: 'motion', generate: matrixRainSVG }, 
  { id: 'repoMilestone', title: 'Repo Milestone', category: 'intelligence', generate: repoMilestoneSVG }, 
  { id: 'minimalist', title: 'Minimalist', category: 'themed', generate: minimalistSVG }, 
  { id: 'bruteRepos', title: 'Brute Repos', category: 'themed', generate: bruteReposSVG }, 
  { id: 'bruteFollowers', title: 'Brute Followers', category: 'themed', generate: bruteFollowersSVG }, 
  { id: 'bruteFollowing', title: 'Brute Following', category: 'themed', generate: bruteFollowingSVG }, 
  { id: 'orbitingSkills', title: 'Orbiting Skills', category: 'motion', generate: orbitingSkillsSVG }, 
  { id: 'outlineRepos', title: 'Outline Repos', category: 'themed', generate: outlineReposSVG }, 
  { id: 'outlineFollowers', title: 'Outline Followers', category: 'themed', generate: outlineFollowersSVG }, 
  { id: 'outlineActivity', title: 'Outline Activity', category: 'themed', generate: outlineActivitySVG }, 
  { id: 'pacmanFollowers', title: 'Pacman Followers', category: 'gamified', generate: pacmanFollowersSVG }, 
  { id: 'pingPong', title: 'Ping Pong', category: 'gamified', generate: pingPongSVG }, 
  { id: 'pixelRepos', title: 'Pixel Repos', category: 'gamified', generate: pixelReposSVG }, 
  { id: 'pixelFollowers', title: 'Pixel Followers', category: 'gamified', generate: pixelFollowersSVG }, 
  { id: 'pixelActivity', title: 'Pixel Activity', category: 'gamified', generate: pixelActivitySVG }, 
  { id: 'pixelDance', title: 'Pixel Dance', category: 'gamified', generate: pixelDanceSVG }, 
  { id: 'goldCard', title: 'Gold Card', category: 'gamified', generate: goldCardSVG }, 
  { id: 'silverCard', title: 'Silver Card', category: 'gamified', generate: silverCardSVG }, 
  { id: 'bronzeCard', title: 'Bronze Card', category: 'gamified', generate: bronzeCardSVG }, 
  { id: 'proAnalytics', title: 'Pro Analytics', category: 'intelligence', generate: proAnalyticsSVG }, 
  { id: 'projectPortfolio', title: 'Project Portfolio', category: 'intelligence', generate: projectPortfolioSVG }, 
  { id: 'projectTimeline', title: 'Project Timeline', category: 'intelligence', generate: projectTimelineSVG }, 
  { id: 'radarChart', title: 'Radar Chart', category: 'intelligence', generate: radarChartSVG }, 
  { id: 'radarScan', title: 'Radar Scan', category: 'intelligence', generate: radarScanSVG }, 
  { id: 'rainbowText', title: 'Rainbow Text', category: 'motion', generate: rainbowTextSVG }, 
  { id: 'ratio', title: 'Ratio', category: 'intelligence', generate: ratioSVG }, 
  { id: 'readmeHeader', title: 'Readme Header', category: 'banner', generate: readmeHeaderSVG }, 
  { id: 'repos', title: 'Repos', category: 'intelligence', generate: reposSVG }, 
  { id: 'retro', title: 'Retro', category: 'themed', generate: retroSVG }, 
  { id: 'rocketLaunch', title: 'Rocket Launch', category: 'intelligence', generate: rocketLaunchSVG }, 
  { id: 'security', title: 'Security', category: 'intelligence', generate: securitySVG }, 
  { id: 'skillGauges', title: 'Skill Gauges', category: 'intelligence', generate: skillGaugesSVG }, 
  { id: 'skylineActivity', title: 'Skyline Activity', category: 'intelligence', generate: skylineActivitySVG }, 
  { id: 'snakeActivity', title: 'Snake Activity', category: 'gamified', generate: snakeActivitySVG }, 
  { id: 'socialBanner', title: 'Social Banner', category: 'banner', generate: socialBannerSVG }, 
  { id: 'socialStatus', title: 'Social Status', category: 'banner', generate: socialStatusSVG }, 
  { id: 'spinningCube', title: 'Spinning Cube', category: 'motion', generate: spinningCubeSVG }, 
  { id: 'streakStats', title: 'Streak Stats', category: 'intelligence', generate: streakStatsSVG }, 
  { id: 'techIconsGrid', title: 'Tech Icons Grid', category: 'themed', generate: techIconsGridSVG }, 
  { id: 'techSphere', title: 'Tech Sphere', category: 'motion', generate: techSphereSVG }, 
  { id: 'tetrisMetrics', title: 'Tetris Metrics', category: 'gamified', generate: tetrisMetricsSVG }, 
  { id: 'topicCloud', title: 'Topic Cloud', category: 'intelligence', generate: topicCloudSVG }, 
  { id: 'trophyCase', title: 'Trophy Case', category: 'intelligence', generate: trophyCaseSVG }, 
  { id: 'twitter', title: 'Twitter', category: 'intelligence', generate: twitterSVG }, 
  { id: 'typewriterSkills', title: 'Typewriter Skills', category: 'intelligence', generate: typewriterSkillsSVG }, 
  { id: 'ultimateAnalytics', title: 'Ultimate Analytics', category: 'intelligence', generate: ultimateAnalyticsSVG }, 
  { id: 'waterRipple', title: 'Water Ripple', category: 'motion', generate: waterRippleSVG }, 
  { id: 'waveText', title: 'Wave Text', category: 'motion', generate: waveTextSVG }, 
  { id: 'weatherWidget', title: 'Weather Widget', category: 'intelligence', generate: weatherWidgetSVG }, 
  { id: 'wordMorph', title: 'Word Morph', category: 'intelligence', generate: wordMorphSVG }, 
  { id: 'workflowAnalytics', title: 'Workflow Analytics', category: 'intelligence', generate: workflowAnalyticsSVG }, 
]
