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
import TimeTracking from '@/assets/images/projects-ss/TimeTracking.webp';
import TipCalculator from '@/assets/images/projects-ss/TipCalculator.webp';
import RatingComponent from '@/assets/images/projects-ss/RatingComponent.webp';
import FaqAccordion from '@/assets/images/projects-ss/FaqAccordion.webp';

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
      techStack: ['nextjs', 'typescript', 'reactQuery', 'tailwind'],
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
      techStack: ['nextjs', 'typescript', 'reactQuery', 'tailwind'],
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
      techStack: ['react', 'typescript', 'reactQuery', 'tailwind'],
      service: 'TMDB API',
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
      techStack: ['nextjs', 'typescript', 'reactQuery', 'tailwind'],
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
      techStack: ['react', 'typescript', 'reactQuery', 'tailwind'],
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
      techStack: ['react', 'typescript', 'reactQuery', 'framerMotion'],
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
      techStack: ['html', 'css', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/WPH-REP-Project-01-Itachi-landing-page',
        liveDemo: 'https://itachi-uchiha-hary300.vercel.app/',
      },
    },
    {
      id: 'proj-05',
      title: 'Simple Todo List App',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: SimpleTodoList,
      description:
        'A clean and lightweight task manager application for creating, tracking, and managing daily tasks using REST API integrations.',
      techStack: ['html', 'css', 'javascript'],
      service: 'REST API',
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
      techStack: ['nextjs', 'typescript', 'reactQuery', 'tailwind'],
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
      techStack: ['html', 'css', 'javascript'],
      service: 'Web Speech API',
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
      techStack: ['html', 'css', 'javascript'],
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
      techStack: ['express', 'typescript', 'mongodb', 'nodejs'],
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
      techStack: ['react', 'typescript', 'rhf', 'zod'],
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
      techStack: ['nextjs', 'typescript', 'framerMotion', 'shadcn'],
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
      techStack: ['nextjs', 'typescript', 'framerMotion', 'reactQuery'],
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
      techStack: ['react', 'typescript', 'rhf', 'zod'],
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
      techStack: ['html', 'css', 'tailwind', 'javascript'],
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
      techStack: ['html', 'css'],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-05-Sharingan',
        liveDemo: 'https://sharingan-hary300.vercel.app/',
      },
    },
    {
      id: 'proj-16',
      title: 'Time Tracking Dashboard',
      category: {
        name: 'Web App',
        slug: 'web-app',
      },
      image: TimeTracking,
      description:
        'A frontend mentor challenge app to track daily, weekly, and monthly activity hours fetched dynamically via Axios.',
      techStack: ['html', 'tailwind', 'javascript', 'axios'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-10-Time-Tracking-Dashboard',
        liveDemo: 'https://time-tracking-dashboard-henna-alpha.vercel.app/',
      },
    },
    {
      id: 'proj-17',
      title: 'Tip Calculator App',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image: TipCalculator,
      description:
        'A handy bill splitter and tip calculator built for dynamic percentage selection, custom tip input, and per-person cost calculations.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-11-Tip-Calculator-App',
        liveDemo: 'https://tip-calculator-app-mocha-omega.vercel.app/',
      },
    },
    {
      id: 'proj-18',
      title: 'Interactive Rating Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: RatingComponent,
      description:
        'An interactive rating card component allowing users to select a rating score, submit feedback, and view a dedicated thank-you state.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-12-Interactive-Rating-Component',
        liveDemo: 'https://frontendmentor-project-12-interacti.vercel.app/',
      },
    },
    {
      id: 'proj-19',
      title: 'FAQ Accordion Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: FaqAccordion,
      description:
        'An interactive FAQ accordion component featuring collapsible questions, dynamic icon toggling, and fully accessible state handling.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-13-FAQ-Accordion',
        liveDemo: 'https://frontendmentor-project-13-faq-accor.vercel.app/',
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
