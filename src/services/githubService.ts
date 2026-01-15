
import { GitHubUser } from '../types';

export const fetchGithubUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    if (response.status === 404) throw new Error('User not found');
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

export const fetchGithubRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) return [];
  return response.json();
};

export const fetchGithubEvents = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`);
  if (!response.ok) return [];
  return response.json();
};
