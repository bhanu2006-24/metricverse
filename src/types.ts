export interface Lesson {
  id: string;
  title: string;
  type: 'read' | 'practice';
  content: React.ReactNode;
  practiceMode?: 'markdown' | 'math' | 'bash';
  initialCode?: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  lessons: Lesson[];
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  bio: string;
  created_at: string;
  repos_data?: GithubRepo[];
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export interface MetricCategory {
  id: string;
  label: string;
}
