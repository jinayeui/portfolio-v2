export interface PersonalInfo {
  name: string;
  role: string;
  phone?: string;
  email: string;
  github: string;
}

export interface Career {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export type ProjectCategory = 'company' | 'personal' | 'design';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  contribution?: string;
  description?: string;
  techStack?: string[];
  url: string;
  thumbnail: string;
  category: ProjectCategory;
}
