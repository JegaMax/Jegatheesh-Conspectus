export interface Education {
  year: string;
  degree: string;
  institution: string;
  percentage: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  fullImage: string;
  description: string;
  duration: string;
}

export interface Course {
  name: string;
  issuer: string;
  date?: string;
  duration?: string;
}

export interface Experience {
  title: string;
  company: string;
  type: string;
  location: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
  previousTitle?: string;
  previousDuration?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  image: string;
  bio: string[];
  skills: string[];
}
