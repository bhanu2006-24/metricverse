
export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  avatar_url: string;
  location: string | null;
  company: string | null;
  blog: string | null;
  twitter_username: string | null;
  hireable: boolean | null;
  repos_data?: any[];
  events_data?: any[];
}

export type MetricCategory = 'motion' | 'intelligence' | 'gamified' | 'essential' | 'themed' | 'banner';

export interface MetricDefinition {
  id: string;
  title: string;
  category: MetricCategory;
  generate: (user: GitHubUser) => string;
}
