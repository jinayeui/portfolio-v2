export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  github: string;
}

export interface Career {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  contribution?: string;
  description?: string;
  tags?: string[];
  url?: string;
  thumbnail: string;
  period?: string;
}
