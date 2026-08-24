import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import {
  SiMongoose,
  SiReacthookform,
  SiShadcnui,
  SiTypescript,
} from 'react-icons/si';
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
import type { Projects, Total } from '@/types/projects';
import LibraryApp from '@/assets/images/projects-ss/LibraryApp.webp';
import RestaurantApp from '@/assets/images/projects-ss/RestaurantApp.webp';
import MovieDB from '@/assets/images/projects-ss/MovieDB.webp';
import TodoListApp from '@/assets/images/projects-ss/TodoListApp.webp';
import TodoListApi from '@/assets/images/projects-ss/TodoListAPI.webp';
import CompanyProfile from '@/assets/images/projects-ss/CompanyProfile.webp';
import ItachiLandingPage from '@/assets/images/projects-ss/ItachiLandingPage.webp';
import VoiceCounter from '@/assets/images/projects-ss/VoiceCounter.webp';
import NeumorphicCalculator from '@/assets/images/projects-ss/NeumorphicCalculator.webp';
import GreenPortfolio from '@/assets/images/projects-ss/GreenPortfolio.webp';
import ElementDb from '@/assets/images/projects-ss/ElementDb.webp';
import MyPortfolio from '@/assets/images/projects-ss/MyPortfolio.webp';
import SimpleTodoList from '@/assets/images/projects-ss/SimpleTodoList.webp';
import SimplePortfolio from '@/assets/images/projects-ss/SimplePortfolio.webp';
import SharinganEyes from '@/assets/images/projects-ss/SharinganEyes.webp';

export const projects: Projects = {
  /** ==============
   * FEATURED PROJECTS
   * ================*/
  featuredProjects: [
    {
      id: 'featProj-01',
      title: 'Library App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: LibraryApp,
      description:
        'A library platform for discovering books, managing borrowing, and handling user accounts with role-based access.',
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
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-31-Library-App',
        liveDemo: 'https://personal-project-31-library-app.vercel.app',
      },
    },

    {
      id: 'featProj-02',
      title: 'Meal Order App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: RestaurantApp,
      description:
        'A food ordering interface where users can browse meals, manage their cart, and review their selected orders.',
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
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-29-Meal-Order-App',
        liveDemo: 'https://personal-project-29-meal-order-app.vercel.app/',
      },
    },

    {
      id: 'featProj-03',
      title: 'Hary Movies DB',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: MovieDB,
      description:
        'A movie discovery platform where users can search, explore movies, view movie details, and save their favorite content.',
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
        github: 'https://github.com/Hary300/Personal-Project-28-Movie-DB-App',
        liveDemo: 'https://personal-project-28-movie-db-app.vercel.app/',
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
      image: LibraryApp,
      description:
        'A library platform for discovering books, managing borrowing, and handling user accounts with role-based access.',
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
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
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
      image: TodoListApp,
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
          name: 'React Query',
          bgColor: 'bg-rose-100 dark:bg-rose-950/60',
          textColor: 'text-rose-800 dark:text-rose-300',
          icon: SiReactquery,
        },
        {
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github:
          'https://github.com/Hary300/personal-Project-26-todo-app-frontend',
        liveDemo: 'https://personal-project-26-todo-app-fronte.vercel.app',
      },
    },
    {
      id: 'proj-03',
      title: 'Hary Movies DB',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: MovieDB,
      description:
        'A movie discovery platform where users can search, explore movies, view movie details, and save their favorite content.',
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
          name: 'Framer Motion',
          bgColor: 'bg-purple-100 dark:bg-purple-950/60',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: SiFramer,
        },
        {
          name: 'TMDB API',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: TbApi,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-28-Movie-DB-App',
        liveDemo: 'https://personal-project-28-movie-db-app.vercel.app/',
      },
    },
    {
      id: 'proj-04',
      title: 'Itachi Landing Page',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: ItachiLandingPage,
      description:
        'A visually focused anime-inspired landing page with responsive layouts, animations, and interactive content sections.',
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
        github:
          'https://github.com/Hary300/WPH-REP-Project-01-Itachi-landing-page',
        liveDemo: 'https://itachi-uchiha-hary300.vercel.app/',
      },
    },
    {
      id: 'proj-18',
      title: 'Simple Todo List App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: SimpleTodoList,
      description:
        'A clean and lightweight task manager application for creating, tracking, and managing daily tasks using REST API integrations.',
      techStack: [
        {
          name: 'HTML5',
          bgColor: 'bg-orange-100 dark:bg-orange-950/60',
          textColor: 'text-orange-800 dark:text-orange-300',
          icon: FaHtml5,
        },
        {
          name: 'CSS3',
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
        {
          name: 'REST API',
          bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
          textColor: 'text-emerald-800 dark:text-emerald-300',
          icon: TbApi,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/WPH-REP-Project-05-ToDo-List',
        liveDemo: 'https://wph-rep-project-05-to-do-list.vercel.app/',
      },
    },
    {
      id: 'Proj-06',
      title: 'Meal Order App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: RestaurantApp,
      description:
        'A food ordering interface where users can browse meals, manage their cart, and review their selected orders.',
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
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-29-Meal-Order-App',
        liveDemo: 'https://personal-project-29-meal-order-app.vercel.app/',
      },
    },
    {
      id: 'proj-07',
      title: 'Voice Counter App',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image: VoiceCounter,
      description:
        'An experimental web application that uses voice interaction to control and update a simple counter.',
      techStack: [
        {
          name: 'HTML',
          bgColor: 'bg-orange-100 dark:bg-orange-950/60',
          textColor: 'text-orange-800 dark:text-orange-300',
          icon: FaHtml5,
        },
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
        github:
          'https://github.com/Hary300/Personal-Project-06-Voice-Counter-App',
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
      image: NeumorphicCalculator,
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
        github:
          'https://github.com/Hary300/Personal-Project-08-Neumorphic-Calculator',
        liveDemo: 'https://neumorphic-soft-ui-calculator.vercel.app/',
      },
    },
    {
      id: 'proj-09',
      title: 'Todo Management API (Backend)',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: TodoListApi,
      description:
        'RESTful API service for task management, supporting authentication, CRUD operations, and database persistence.',
      techStack: [
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
        {
          name: 'Mongoose',
          bgColor: 'bg-red-100 dark:bg-red-950/60',
          textColor: 'text-red-800 dark:text-red-300',
          icon: SiMongoose,
        },
        {
          name: 'Node.js',
          bgColor: 'bg-green-100 dark:bg-green-950/60',
          textColor: 'text-green-800 dark:text-green-300',
          icon: FaNodeJs,
        },
      ],
      links: {
        github:
          'https://github.com/Hary300/personal-Project-25-todo-app-backend',
        liveDemo:
          'https://personal-project-25-todo-app-backend-production.up.railway.app/api-docs/',
      },
    },
    {
      id: 'proj-10',
      title: 'Modern Company Profile',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: CompanyProfile,
      description:
        'A responsive website showcasing services, portfolio, client testimonials, and an interactive contact form.',
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
          name: 'React Hook Form',
          bgColor: 'bg-pink-100 dark:bg-pink-950/60',
          textColor: 'text-pink-800 dark:text-pink-300',
          icon: SiReacthookform,
        },
        {
          name: 'Zod',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: SiZod,
        },
      ],
      links: {
        github:
          'https://github.com/Hary300/Personal-Project-27-Company-Profile',
        liveDemo: 'https://personal-project-27-company-profile.vercel.app/',
      },
    },
    {
      id: 'proj-11',
      title: 'Green Personal Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: GreenPortfolio,
      description:
        'A modern, eco-themed interactive portfolio built with seamless animations, dark style, and sleek UI components.',
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
          name: 'Framer Motion',
          bgColor: 'bg-purple-100 dark:bg-purple-950/60',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: SiFramer,
        },
        {
          name: 'Shadcn UI',
          bgColor: 'bg-slate-200 dark:bg-slate-800/80',
          textColor: 'text-slate-800 dark:text-slate-300',
          icon: SiShadcnui,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/My-Portfolio',
        liveDemo: 'https://my-portfolio-black-alpha-51.vercel.app/',
      },
    },
    {
      id: 'proj-12',
      title: 'ElementDB',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image: ElementDb,
      description:
        'An interactive periodic table for exploring chemical elements, properties, and trends with fast data fetching.',
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
          name: 'Framer Motion',
          bgColor: 'bg-purple-100 dark:bg-purple-950/60',
          textColor: 'text-purple-800 dark:text-purple-300',
          icon: SiFramer,
        },
        {
          name: 'React Query',
          bgColor: 'bg-rose-100 dark:bg-rose-950/60',
          textColor: 'text-rose-800 dark:text-rose-300',
          icon: SiReactquery,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-30-Chemistry-DB',
        liveDemo: 'https://personal-project-30-chemistry-db-sand.vercel.app/',
      },
    },
    {
      id: 'proj-13',
      title: 'My Best Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: MyPortfolio,
      description:
        'A personal portfolio website featuring interactive sections, smooth navigation, and a fully validated contact form.',
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
          name: 'React Hook Form',
          bgColor: 'bg-pink-100 dark:bg-pink-950/60',
          textColor: 'text-pink-800 dark:text-pink-300',
          icon: SiReacthookform,
        },
        {
          name: 'Zod',
          bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
          textColor: 'text-indigo-800 dark:text-indigo-300',
          icon: SiZod,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/My-Best-Portfolio',
        liveDemo: 'https://my-best-portfolio-three.vercel.app/',
      },
    },
    {
      id: 'proj-14',
      title: 'Simple Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: SimplePortfolio,
      description:
        'A portfolio landing page designed with Tailwind CSS for clean layout structure and smooth responsiveness.',
      techStack: [
        {
          name: 'HTML5',
          bgColor: 'bg-orange-100 dark:bg-orange-950/60',
          textColor: 'text-orange-800 dark:text-orange-300',
          icon: FaHtml5,
        },
        {
          name: 'CSS3',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: FaCss3Alt,
        },
        {
          name: 'Tailwind CSS',
          bgColor: 'bg-teal-100 dark:bg-teal-950/60',
          textColor: 'text-teal-800 dark:text-teal-300',
          icon: RiTailwindCssFill,
        },
        {
          name: 'JavaScript',
          bgColor: 'bg-amber-100 dark:bg-amber-950/60',
          textColor: 'text-amber-800 dark:text-amber-300',
          icon: BsJavascript,
        },
      ],
      links: {
        github:
          'https://github.com/Hary300/WPH-Project-15-Simple-Portfolio-Tailwinds',
        liveDemo: 'https://wph-project-15-simple-portfolio-tai.vercel.app/',
      },
    },
    {
      id: 'proj-15',
      title: 'Sharingan Spinning Animation',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: SharinganEyes,
      description:
        'An interactive anime-inspired Sharingan eye visual crafted purely using CSS keyframe animations and structural HTML layout.',
      techStack: [
        {
          name: 'HTML5',
          bgColor: 'bg-orange-100 dark:bg-orange-950/60',
          textColor: 'text-orange-800 dark:text-orange-300',
          icon: FaHtml5,
        },
        {
          name: 'CSS3',
          bgColor: 'bg-blue-100 dark:bg-blue-950/60',
          textColor: 'text-blue-800 dark:text-blue-300',
          icon: FaCss3Alt,
        },
      ],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-05-Sharingan',
        liveDemo: 'https://sharingan-hary300.vercel.app/',
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
