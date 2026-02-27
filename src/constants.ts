import React from 'react';
import {
  Server,
  Database,
  Activity,
  Layers,
  Code2,
  Globe,
  Github,
  ChevronRight
} from 'lucide-react';
import { Skill, Project, ClientProject, ExperienceItem, GithubStat, Language, NavLink } from './types';

export const SKILLS: Skill[] = [
  { name: 'Node.js', category: 'Runtime', level: 95, icon: React.createElement(Server, { className: "w-4 h-4" }) },
  { name: 'PostgreSQL', category: 'Database', level: 90, icon: React.createElement(Database, { className: "w-4 h-4" }) },
  { name: 'MongoDB', category: 'Database', level: 90, icon: React.createElement(Database, { className: "w-4 h-4" }) },
  { name: 'Redis', category: 'Caching', level: 85, icon: React.createElement(Activity, { className: "w-4 h-4" }) },
  { name: 'Docker', category: 'Infrastructure', level: 80, icon: React.createElement(Layers, { className: "w-4 h-4" }) },
  { name: 'TypeScript', category: 'Language', level: 92, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
  { name: 'GraphQL', category: 'API', level: 88, icon: React.createElement(Globe, { className: "w-4 h-4" }) },
  { name: 'Golang', category: 'Language', level: 80, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
  { name: 'Kafka', category: 'Event Streaming', level: 80, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
  { name: 'AWS', category: 'Cloud', level: 80, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
  { name: 'React.js', category: 'UI', level: 90, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
  { name: 'Vue.js', category: 'UI', level: 75, icon: React.createElement(Code2, { className: "w-4 h-4" }) },
];

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Video Streaming System',
    method: 'POST',
    endpoint: '/v1/video/upload',
    description: 'A scalable video streaming platform where educators can upload videos and students can watch the videos in quality which is suitable to them based on network condition.',
    tags: ['Node.js', 'AWS', 'Docker', 'MongoDB'],
    link: 'https://github.com/jhamayank02/Scalable-Video-Streaming-System'
  },
  {
    id: '02',
    title: 'Problem Battles',
    method: 'GET',
    endpoint: '/v1/problems',
    description: 'Problem Battles is a full-stack, microservice-based coding platform inspired by competitive programming and problem-solving platforms. It allows users to authenticate, solve coding problems, submit solutions, and get evaluated in real time.',
    tags: ['Node.js', 'Golang', 'Redis', 'Docker', 'React.js', 'MongoDB'],
    link: 'https://github.com/jhamayank02/ProblemBattles'
  },
  {
    id: '03',
    title: 'bhaideploykarde',
    method: 'POST',
    endpoint: '/v1/deploy',
    description: 'A bot similar to your coder bro, who can quickly deploy your projects to showcase them to the world.',
    tags: ['Node.js', 'AWS', 'Consul', 'MySQL', 'Clickhouse', 'Websocket'],
    link: 'https://github.com/jhamayank02/bhaideploykarde'
  }
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    name: 'AKY Solutions',
    type: 'Company Portfolio',
    status: 'Deployed',
    load: 'Medium',
    description: 'Created a modern business website with an intuitive admin panel for real-time content control.',
    image: 'https://picsum.photos/seed/commerce/800/600'
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Fullstack Developer',
    company: 'DigiExcel Services',
    period: '2025 - PRESENT',
    logs: [
      'Developed and enhanced TP-Link’s Partner Portal, handling 1000+ partners/day.',
      'Built backend services for a citizen identity verification platform using Go microservices, handling 10k+ verification requests/day',
      'Integrated Firebase-based real-time notifications and PDF parsing pipelines'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'Deepnap Softech',
    period: '2024 - 2025',
    logs: [
      'Developed and maintained a full-stack CRM application.',
      'Optimized database queries and refactored backend logic, reducing average API response times.',
      'Implemented secure authentication, authorization, and role-based access control (RBAC).'
    ]
  },
  {
    role: 'Fullstack Developer (Intern)',
    company: 'Maxester',
    period: '2023 - 2024',
    logs: [
      'Refactored legacy PHP services to Node.js/TypeScript.',
      'Optimized SQL queries and normalized relational schemas.'
    ]
  }
];

export const GITHUB_STATS: GithubStat[] = [
  { label: 'Total Contributions', value: '511', icon: React.createElement(Activity, { className: "w-4 h-4" }) },
  { label: 'Repositories', value: '78', icon: React.createElement(Github, { className: "w-4 h-4" }) },
  { label: 'Pull Requests', value: '156', icon: React.createElement(ChevronRight, { className: "w-4 h-4" }) },
  { label: 'Stars Earned', value: '6', icon: React.createElement(Activity, { className: "w-4 h-4" }) },
];

export const LANGUAGES: Language[] = [
  { name: 'JavaScript', percent: 30, color: '#3178c6' },
  { name: 'TypeScript', percent: 40, color: '#3178c6' },
  { name: 'Go', percent: 10, color: '#00add8' },
  { name: 'MySQL', percent: 5, color: '#336791' },
  { name: 'MongoDB', percent: 7, color: '#336791' },
  { name: 'Other', percent: 8, color: '#444' },
];

export const NAV_LINKS: NavLink[] = [
  { label: '/about', id: 'about' },
  { label: '/stack', id: 'stack' },
  { label: '/metrics', id: 'metrics' },
  { label: '/experience', id: 'experience' },
  { label: '/portfolio', id: 'portfolio' },
  { label: '/endpoints', id: 'endpoints' },
  { label: '/contact', id: 'contact' },
];
