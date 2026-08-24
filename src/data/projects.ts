import type { IconType } from 'react-icons/lib';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiZod } from 'react-icons/si';
import { BsJavascript } from 'react-icons/bs';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa6';

interface TechStack {
  name: string;
  bgColor: string;
  textColor: string;
  icon: IconType;
}

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
  techStack: TechStack[];
  links: {
    github: string;
    liveDemo: string;
  };
}

interface Total {
  all: number;
  webApp: number;
  landingPage: number;
  utility: number;
  uiComponent: number;
  game: number;
}

interface Projects {
  featuredProjects: Project[];
  allProjects: Project[];
  total: Total;
}

export const projects: Projects = {
  /** ==============
   * FEATURED PROJECTS
   * ================*/
  featuredProjects: [
    {
      id: 'featProj-01',
      title: 'Library Management App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000',
      description:
        'A full-stack library platform for discovering books, managing borrowing, and handling user accounts with role-based access.',
      techStack: [
        {
          name: 'Next.js',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: RiNextjsFill,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Node.js',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: FaNodeJs,
        },
        {
          name: 'MongoDB',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: SiMongodb,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-31-Library-App',
        liveDemo: 'https://personal-project-31-library-app.vercel.app',
      },
    },

    {
      id: 'featProj-02',
      title: 'Todo Management App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000',
      description:
        'A productivity application for organizing daily tasks, priorities, schedules, and completed activities through a responsive interface.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Express',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: SiExpress,
        },
        {
          name: 'MongoDB',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: SiMongodb,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-25-Todo-App',
        liveDemo: 'https://personal-project-25-todo-app-frontend.vercel.app',
      },
    },

    {
      id: 'featProj-03',
      title: 'Hary Movies DB',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000',
      description:
        'A movie discovery platform where users can search, explore popular titles, view movie details, and save their favorite content.',
      techStack: [
        {
          name: 'Next.js',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: RiNextjsFill,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'React Query',
          bgColor: 'bg-rose-100 dark:bg-rose-950/60',
          textColor: 'text-rose-800 dark:text-rose-300',
          icon: SiReactquery,
        },
        {
          name: 'TMDB API',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: TbApi,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://hary-movies-db.vercel.app',
      },
    },

    {
      id: 'featProj-04',
      title: 'Itachi Landing Page',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image:
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000',
      description:
        'A visually focused landing page inspired by Itachi Uchiha, featuring responsive layouts, animations, and interactive content sections.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
        {
          name: 'Framer Motion',
          bgColor: 'bg-purple-100 dark:bg-purple-950/60',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: SiFramer,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://itachi-landing-page.vercel.app',
      },
    },
  ],

  /** ==============
   * ALL PROJECTS
   * ================*/
  allProjects: [
    {
      id: 'proj-01',
      title: 'Library Management App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000',
      description:
        'A full-stack library platform for discovering books, managing borrowing, and handling user accounts with role-based access.',
      techStack: [
        {
          name: 'Next.js',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: RiNextjsFill,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'MongoDB',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: SiMongodb,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-31-Library-App',
        liveDemo: 'https://personal-project-31-library-app.vercel.app',
      },
    },

    {
      id: 'proj-02',
      title: 'Todo Management App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000',
      description:
        'A productivity application for organizing daily tasks, priorities, schedules, and completed activities.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Express',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: SiExpress,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-25-Todo-App',
        liveDemo: 'https://personal-project-25-todo-app-frontend.vercel.app',
      },
    },

    {
      id: 'proj-03',
      title: 'Hary Movies DB',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000',
      description:
        'A movie discovery platform for searching movies, exploring popular titles, and viewing detailed movie information.',
      techStack: [
        {
          name: 'Next.js',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: RiNextjsFill,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'TMDB API',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: TbApi,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://hary-movies-db.vercel.app',
      },
    },

    {
      id: 'proj-04',
      title: 'Itachi Landing Page',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image:
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000',
      description:
        'A visually focused anime-inspired landing page with responsive layouts, animations, and interactive content sections.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'Tailwind CSS',

          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
        {
          name: 'Framer Motion',
          bgColor: 'bg-purple-100 dark:bg-purple-950/60',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: SiFramer,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://itachi-landing-page.vercel.app',
      },
    },

    {
      id: 'proj-05',
      title: 'Time Tracking Dashboard',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
      description:
        'A responsive dashboard for tracking working hours, monitoring activities, and visualizing productivity data.',
      techStack: [
        {
          name: 'React',

          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Tailwind CSS',

          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://time-tracking-dashboard.vercel.app',
      },
    },

    {
      id: 'proj-06',
      title: 'Meal Order App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000',
      description:
        'A food ordering interface where users can browse meals, manage their cart, and review their selected orders.',
      techStack: [
        {
          name: 'React',

          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'CSS',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: FaCss3Alt,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://meal-order-app.vercel.app',
      },
    },

    {
      id: 'proj-07',
      title: 'Voice Counter App',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image:
        'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000',
      description:
        'An experimental web application that uses voice interaction to control and update a simple counter.',
      techStack: [
        {
          name: 'JavaScript',
          bgColor: 'bg-amber-100 dark:bg-amber-950/60',
          textColor: 'text-amber-800 dark:text-amber-300',
          icon: BsJavascript,
        },
        {
          name: 'Web Speech API',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: TbApi,
        },
        {
          name: 'CSS',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: FaCss3Alt,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://voice-counter-app.vercel.app',
      },
    },

    {
      id: 'proj-08',
      title: 'Neumorphic Calculator',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image:
        'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1000',
      description:
        'A clean calculator interface inspired by neumorphic design principles with responsive layouts and interactive controls.',
      techStack: [
        {
          name: 'HTML',
          bgColor: 'bg-orange-100 dark:bg-orange-950/60',
          textColor: 'text-orange-800 dark:text-orange-300',
          icon: FaHtml5,
        },
        {
          name: 'CSS',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: FaCss3Alt,
        },
        {
          name: 'JavaScript',
          bgColor: 'bg-amber-100 dark:bg-amber-950/60',
          textColor: 'text-amber-800 dark:text-amber-300',
          icon: BsJavascript,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://neumorphic-calculator.vercel.app',
      },
    },

    {
      id: 'proj-09',
      title: 'Interactive Rating Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000',
      description:
        'A compact interactive rating component designed to provide users with a simple and intuitive feedback experience.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://interactive-rating-component.vercel.app',
      },
    },

    {
      id: 'proj-10',
      title: 'Contact Form API',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000',
      description:
        'A contact form project demonstrating form validation, API integration, error handling, and secure backend communication.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'Node.js',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: FaNodeJs,
        },
        {
          name: 'Express',
          bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
          textColor: 'text-zinc-800 dark:text-zinc-300',
          icon: SiExpress,
        },
        {
          name: 'Zod',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiZod,
        },
      ],
      links: {
        github: 'https://github.com/Hary300',
        liveDemo: 'https://contact-form-api.vercel.app',
      },
    },
    {
      id: 'proj-11',
      category: {
        name: 'Game',
        slug: 'game',
      },
      title: 'Neon Snake',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000',
      description:
        'A classic snake game redesigned with a modern neon interface, smooth controls, increasing difficulty, and a persistent high score.',
      techStack: [
        {
          name: 'React',
          bgColor: 'bg-sky-100 dark:bg-sky-950/60',
          textColor: 'text-sky-800 dark:text-sky-300',
          icon: FaReact,
        },
        {
          name: 'TypeScript',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: SiTypescript,
        },
        {
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/neon-snake',
        liveDemo: 'https://neon-snake.vercel.app',
      },
    },
  ],
  get total(): Total {
    return {
      all: this.allProjects.length,
      webApp: this.allProjects.filter(
        (project) => project.category.name === 'Web App'
      ).length,
      landingPage: this.allProjects.filter(
        (project) => project.category.name === 'Landing Page'
      ).length,
      uiComponent: this.allProjects.filter(
        (project) => project.category.name === 'UI Component'
      ).length,
      utility: this.allProjects.filter(
        (project) => project.category.name === 'Utility'
      ).length,
      game: this.allProjects.filter(
        (project) => project.category.name === 'Game'
      ).length,
    };
  },
};
