import { ReactNode } from 'react';

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  tags: string[];
  link: string;
}

export interface ClientProject {
  name: string;
  type: string;
  status: 'Deployed' | 'Stable' | 'Maintenance';
  load: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  image: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  logs: string[];
}

export interface GithubStat {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface Language {
  name: string;
  percent: number;
  color: string;
}

export interface NavLink {
  label: string;
  id: string;
}
