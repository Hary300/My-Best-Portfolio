import homeHeroLight from '@/assets/images/hero-img/home-hero-light.png';
import homeHeroDark from '@/assets/images/hero-img/home-hero-dark.png';
import {
  LibraryApp,
  MovieDB,
  RestaurantApp,
} from '@/assets/images/projects-ss';
import type { HeaderData } from '@/types/header';
import type { Project } from '@/types/projects';
import type { HeroImg } from '@/types/hero';

import { Home, type LucideIcon } from 'lucide-react';

interface HomeData {
  icon: LucideIcon;
  header: HeaderData;
  heroImg: HeroImg;
  featuredProjects: Project[];
}
export const homeData: HomeData = {
  icon: Home,
  header: {
    title: "Hi, I'm Hary",
    highlightTitle: 'Full Stack Developer',
    description:
      'I build modern, responsive web applications with React, TypeScript, Node.js, and modern backend technologies.',
  },
  heroImg: {
    light: homeHeroLight,
    dark: homeHeroDark,
  },
  featuredProjects: [
    {
      id: 'library-app',
      title: 'Library App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: LibraryApp,
      description:
        'A library platform for discovering books, managing borrowing, and handling user accounts with role-based access.',
      techStack: ['react', 'typescript', 'reactQuery', 'tailwind'],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-31-Library-App',
        liveDemo: 'https://personal-project-31-library-app.vercel.app',
      },
    },

    {
      id: 'meal-order-app',
      title: 'Meal Order App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: RestaurantApp,
      description:
        'A food ordering interface where users can browse meals, manage their cart, and review their selected orders.',
      techStack: ['nextjs', 'typescript', 'reactQuery', 'tailwind'],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-29-Meal-Order-App',
        liveDemo: 'https://personal-project-29-meal-order-app.vercel.app/',
      },
    },

    {
      id: 'hary-movie-db',
      title: 'Hary Movies DB',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: MovieDB,
      description:
        'A movie discovery platform where users can search, explore movies, view movie details, and save their favorite content.',
      techStack: ['react', 'typescript', 'reactQuery', 'tailwind'],
      service: 'TMDB API',
      links: {
        github: 'https://github.com/Hary300/Personal-Project-28-Movie-DB-App',
        liveDemo: 'https://personal-project-28-movie-db-app.vercel.app/',
      },
    },
  ],
};
