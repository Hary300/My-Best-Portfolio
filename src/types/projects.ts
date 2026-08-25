export type TechStackSlug =
  | 'html'
  | 'css'
  | 'tailwind'
  | 'javascript'
  | 'typescript'
  | 'reactQuery'
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'express'
  | 'mongodb'
  | 'shadcn'
  | 'framerMotion'
  | 'rhf'
  | 'axios'
  | 'zod';

export type Categories =
  | 'Web App'
  | 'Landing Page'
  | 'Utility'
  | 'UI Component'
  | 'Game';

export type CategorySlug =
  | 'web-app'
  | 'landing-page'
  | 'utility'
  | 'ui-component'
  | 'game';

export interface Category {
  name: Categories;
  slug: CategorySlug;
}

export interface Project {
  id: string;
  category: Category;
  title: string;
  image: string;
  description: string;
  techStack: TechStackSlug[];
  service?: string;
  links: {
    github: string;
    liveDemo: string;
  };
}

export interface Total {
  all: number;
  webApp: number;
  landingPage: number;
  utility: number;
  uiComponent: number;
  game: number;
}

export interface Projects {
  featuredProjects: Project[];
  allProjects: Project[];
  total: Total;
}
