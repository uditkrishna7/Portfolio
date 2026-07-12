export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string;
  challenges: string;
  lessons: string;
  githubUrl: string;
  liveUrl: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
};

export type RoadmapItem = {
  label: string;
  stage: string;
};
