export interface PersonalInfo {
  id?: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  profileImage?: string;
}

export interface WorkExperience {
  id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  id?: string;
  name: string;
  category: 'technical' | 'soft' | 'language' | 'tool';
  level: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
}

export interface Education {
  id?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  completedDate: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
  read?: boolean;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}