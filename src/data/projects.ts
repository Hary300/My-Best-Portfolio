import type { Projects, Total } from '@/types/projects';
import {
  LibraryApp,
  RestaurantApp,
  MovieDB,
  TodoListApp,
  TodoListApi,
  CompanyProfile,
  ItachiLandingPage,
  VoiceCounter,
  NeumorphicCalculator,
  GreenPortfolio,
  ElementDb,
  MyPortfolio,
  SimpleTodoList,
  SimplePortfolio,
  SharinganEyes,
  TimeTracking,
  TipCalculator,
  RatingComponent,
  FaqAccordion,
  ContactFormAPI,
  ContactUs,
  BluePortfolio,
  NewsletterSignUp,
  BoomNumber,
  QrCode,
  BlogPreviewCard,
  SocialLinksProfile,
  SimpleOmeletteRecipe,
  ProductPreviewCard,
  FourCardFeatureSection,
  TestimonialsGridSection,
  ArticlePreviewComponent,
  PinkPortfolio,
  TealCyanPortfolio,
} from '@/assets/images/projects-ss';

export const projects: Projects = {
  /** ==============
   * FEATURED PROJECTS
   * ================*/
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

  /** ==============
   * ALL PROJECTS
   * ================*/
  allProjects: [
    {
      id: 'teal-cyan-portfolio',
      title: 'Teal Cyan Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: TealCyanPortfolio,
      description:
        'A fresh, modern developer portfolio featuring a vibrant teal and cyan theme with polished interactive components.',
      techStack: ['react', 'typescript', 'shadcn', 'tailwind'],
      links: {
        github:
          'https://github.com/Hary300/Personal-Project-35-Teal-Cyan-Portfolio',
        liveDemo: 'https://personal-project-35-teal-cyan-portf.vercel.app/',
      },
    },
    {
      id: 'pink-portfolio',
      title: 'Pink Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: PinkPortfolio,
      description:
        'A modern, stylish personal portfolio featuring a sleek pink aesthetic, dynamic UI components, and fully responsive layout.',
      techStack: ['react', 'typescript', 'shadcn', 'tailwind'],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-34-Pink-Portfolio',
        liveDemo: 'https://personal-project-34-pink-portfolio.vercel.app/',
      },
    },
    {
      id: 'library-management-app',
      title: 'Library Management App',
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
      id: 'todo-management-app',
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
      id: 'hary-movies-db',
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
      id: 'itachi-landing-page',
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
      id: 'simple-todo-list-app',
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
      id: 'voice-counter-app',
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
      id: 'neumorphic-calculator',
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
      id: 'todo-management-api',
      title: 'Todo Management API',
      category: {
        name: 'Utility',
        slug: 'utility',
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
      id: 'modern-company-profile',
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
      id: 'green-personal-portfolio',
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
      id: 'element-db',
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
      id: 'my-best-portfolio',
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
      id: 'simple-portfolio',
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
      id: 'sharingan-spinning-animation',
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
      id: 'time-tracking-dashboard',
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
      id: 'tip-calculator-app',
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
      id: 'interactive-rating-component',
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
      id: 'faq-accordion-component',
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
    {
      id: 'contact-form-api',
      title: 'Contact Form API',
      category: {
        name: 'Utility',
        slug: 'utility',
      },
      image: ContactFormAPI,
      description:
        'A RESTful backend service built to handle contact form submissions, message storage, and Swagger API documentation.',
      techStack: ['javascript', 'express', 'mongodb', 'mongoose'],
      links: {
        github:
          'https://github.com/Hary300/Personal-Project-23-contact-Message-Backend',
        liveDemo:
          'https://personal-project-23-contact-message-backend-production.up.railway.app/api-docs',
      },
    },
    {
      id: 'contact-us-component',
      title: 'Contact Us Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: ContactUs,
      description:
        'An interactive contact form component featuring custom form validation, field focus states, and a success toast notification.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-14-Contact-Form',
        liveDemo: 'https://frontendmentor-project-14-contact-f.vercel.app/',
      },
    },
    {
      id: 'blue-portfolio',
      title: 'Blue Portfolio',
      category: {
        name: 'Landing Page',
        slug: 'landing-page',
      },
      image: BluePortfolio,
      description:
        'A modern and responsive personal portfolio built with Next.js and Tailwind CSS, featuring smooth animations powered by Framer Motion.',
      techStack: ['nextjs', 'typescript', 'tailwind', 'framerMotion'],
      links: {
        github: 'https://github.com/Hary300/WPH-Project-11-Portfolio',
        liveDemo: 'https://portfolio1-teal-nine.vercel.app/',
      },
    },
    {
      id: 'newsletter-sign-up-form',
      title: 'Newsletter Sign-Up Form',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: NewsletterSignUp,
      description:
        'A responsive newsletter subscription card featuring email format validation and a success confirmation state.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-09-Newsletter-Sign-Up-Form',
        liveDemo: 'https://newsletter-sign-up-form-teal.vercel.app/',
      },
    },
    {
      id: 'boom-number',
      title: 'Boom Number',
      category: {
        name: 'Game',
        slug: 'game',
      },
      image: BoomNumber,
      description:
        'An interactive web-based number game featuring customizable game limits, real-time feedback, and dynamic visual state updates.',
      techStack: ['html', 'css', 'tailwind', 'javascript'],
      links: {
        github: 'https://github.com/Hary300/Personal-Project-04-Boom-Number',
        liveDemo: 'https://personal-project-04-boom-number.vercel.app/',
      },
    },
    {
      id: 'qr-code-component',
      title: 'QR Code Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: QrCode,
      description:
        'A clean, responsive component displaying a QR code card built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github: 'https://github.com/Hary300/Frontendmentor-Project-01-QR-Code',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-01-QR-Code/',
      },
    },
    {
      id: 'blog-preview-card',
      title: 'Blog Preview Card',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: BlogPreviewCard,
      description:
        'A clean, responsive blog preview card component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-02-Blog-Preview-Card',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-02-Blog-Preview-Card/',
      },
    },
    {
      id: 'social-links-profile',
      title: 'Social Links Profile',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: SocialLinksProfile,
      description:
        'A clean, responsive social links profile component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-03-Social-Links-Profile',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-03-Social-Links-Profile/',
      },
    },
    {
      id: 'simple-omelette-recipe',
      title: 'Simple Omelette Recipe',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: SimpleOmeletteRecipe,
      description:
        'A clean, responsive recipe page component displaying an omelette recipe built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-04-Recipe-Page',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-04-Recipe-Page/',
      },
    },
    {
      id: 'product-preview-card',
      title: 'Product Preview Card',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: ProductPreviewCard,
      description:
        'A clean, responsive product preview card component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-05-Product-Preview-Card',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-05-Product-Preview-Card/',
      },
    },
    {
      id: 'four-card-feature-section',
      title: 'Four Card Feature Section',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: FourCardFeatureSection,
      description:
        'A clean, responsive four card feature section component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-06-Four-Card-Feature-Section',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-06-Four-Card-Feature-Section/',
      },
    },
    {
      id: 'testimonials-grid-section',
      title: 'Testimonials Grid Section',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: TestimonialsGridSection,
      description:
        'A clean, responsive testimonials grid section component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-07-Testimonials-Grid-Section',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-07-Testimonials-Grid-Section/',
      },
    },
    {
      id: 'article-preview-component',
      title: 'Article Preview Component',
      category: {
        name: 'UI Component',
        slug: 'ui-component',
      },
      image: ArticlePreviewComponent,
      description:
        'A clean, responsive article preview component built with precise layout styling and modern CSS techniques.',
      techStack: ['html', 'javascript', 'css'],
      links: {
        github:
          'https://github.com/Hary300/Frontendmentor-Project-08-Article-Preview-Component',
        liveDemo:
          'https://hary300.github.io/Frontendmentor-Project-08-Article-Preview-Component/',
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
