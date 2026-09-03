import { BsJavascript, BsTypescript } from 'react-icons/bs';
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';
import {
  RiNextjsFill,
  RiNotionFill,
  RiTailwindCssFill,
  RiBearSmileFill,
} from 'react-icons/ri';
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiRailway,
  SiSwagger,
  SiVite,
  SiShadcnui,
  SiAxios,
  SiZod,
  SiReactquery,
  SiReacthookform,
  SiFramer,
  SiReact,
  SiLucide,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { CodeXml, type LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: IconType;
  percentage: number;
  color: string;
  url: string;
}

interface Category {
  id: number;
  name:
    | 'Languages'
    | 'Frontend'
    | 'Backend'
    | 'Deployment'
    | 'Tools'
    | 'Libraries';
  skills: Skill[];
}

interface SkillData {
  icon: LucideIcon;
  categories: Category[];
}

export const skillData: SkillData = {
  icon: CodeXml,
  categories: [
    {
      id: 1,
      name: 'Languages',
      skills: [
        {
          name: 'HTML5',
          icon: FaHtml5,
          percentage: 90,
          color: 'text-orange-600 dark:text-orange-400',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS3',
          icon: FaCss3Alt,
          percentage: 85,
          color: 'text-blue-600 dark:text-blue-400',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'JavaScript',
          icon: BsJavascript,
          percentage: 85,
          color: 'text-amber-500 dark:text-amber-400',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'TypeScript',
          icon: BsTypescript,
          percentage: 80,
          color: 'text-blue-600 dark:text-blue-400',
          url: 'https://www.typescriptlang.org',
        },
      ],
    },
    {
      id: 2,
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          icon: FaReact,
          percentage: 85,
          color: 'text-sky-500 dark:text-sky-400',
          url: 'https://react.dev',
        },
        {
          name: 'Next.js',
          icon: RiNextjsFill,
          percentage: 80,
          color: 'text-zinc-800 dark:text-zinc-200',
          url: 'https://nextjs.org',
        },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          percentage: 90,
          color: 'text-teal-500 dark:text-teal-400',
          url: 'https://tailwindcss.com',
        },
        {
          name: 'Zustand',
          icon: RiBearSmileFill,
          percentage: 80,
          color: 'text-amber-800 dark:text-amber-200',
          url: 'https://zustand-demo.pmnd.rs',
        },
        {
          name: 'Shadcn UI',
          icon: SiShadcnui,
          percentage: 85,
          color: 'text-zinc-800 dark:text-zinc-200',
          url: 'https://ui.shadcn.com',
        },
        {
          name: 'TanStack Query',
          icon: SiReactquery,
          percentage: 80,
          color: 'text-rose-500 dark:text-rose-400',
          url: 'https://tanstack.com/query',
        },
        {
          name: 'Vite',
          icon: SiVite,
          percentage: 85,
          color: 'text-purple-500 dark:text-purple-400',
          url: 'https://vite.dev/',
        },
      ],
    },
    {
      id: 3,
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          icon: FaNodeJs,
          percentage: 75,
          color: 'text-emerald-600 dark:text-emerald-400',
          url: 'https://nodejs.org',
        },
        {
          name: 'Express.js',
          icon: SiExpress,
          percentage: 75,
          color: 'text-stone-700 dark:text-stone-300',
          url: 'https://expressjs.com',
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          percentage: 75,
          color: 'text-emerald-600 dark:text-emerald-400',
          url: 'https://www.mongodb.com',
        },
        {
          name: 'Mongoose',
          icon: SiMongoose,
          percentage: 70,
          color: 'text-red-600 dark:text-red-400',
          url: 'https://mongoosejs.com',
        },
      ],
    },
    {
      id: 4,
      name: 'Deployment',
      skills: [
        {
          name: 'Vercel',
          icon: IoLogoVercel,
          percentage: 80,
          color: 'text-zinc-800 dark:text-zinc-200',
          url: 'https://vercel.com',
        },
        {
          name: 'Railway',
          icon: SiRailway,
          percentage: 70,
          color: 'text-purple-600 dark:text-purple-400',
          url: 'https://railway.com',
        },
      ],
    },
    {
      id: 5,
      name: 'Libraries',
      skills: [
        {
          name: 'Axios',
          icon: SiAxios,
          percentage: 85,
          color: 'text-purple-600 dark:text-purple-400',
          url: 'https://axios-http.com',
        },
        {
          name: 'Zod',
          icon: SiZod,
          percentage: 80,
          color: 'text-blue-500 dark:text-blue-400',
          url: 'https://zod.dev',
        },
        {
          name: 'RHF',
          icon: SiReacthookform,
          percentage: 85,
          color: 'text-pink-600 dark:text-pink-400',
          url: 'https://react-hook-form.com',
        },
        {
          name: 'Framer Motion',
          icon: SiFramer,
          percentage: 85,
          color: 'text-violet-600 dark:text-violet-400',
          url: 'https://motion.dev',
        },
        {
          name: 'React Icons',
          icon: SiReact,
          percentage: 85,
          color: 'text-red-600 dark:text-red-400',
          url: 'https://react-icons.github.io/react-icons/',
        },
        {
          name: 'Lucide React',
          icon: SiLucide,
          percentage: 85,
          color: 'text-orange-600 dark:text-orange-400',
          url: 'https://lucide.dev',
        },
        {
          name: 'RHF Resolvers',
          icon: SiReacthookform,
          percentage: 80,
          color: 'text-green-600 dark:text-green-400',
          url: 'https://github.com/react-hook-form/resolvers',
        },
      ],
    },
    {
      id: 6,
      name: 'Tools',
      skills: [
        {
          name: 'Git',
          icon: FaGitAlt,
          percentage: 80,
          color: 'text-orange-600 dark:text-orange-400',
          url: 'https://git-scm.com',
        },
        {
          name: 'GitHub',
          icon: FaGithub,
          percentage: 85,
          color: 'text-zinc-800 dark:text-zinc-200',
          url: 'https://github.com',
        },
        {
          name: 'Postman',
          icon: SiPostman,
          percentage: 80,
          color: 'text-orange-500 dark:text-orange-400',
          url: 'https://www.postman.com',
        },
        {
          name: 'Swagger',
          icon: SiSwagger,
          percentage: 70,
          color: 'text-emerald-500 dark:text-emerald-400',
          url: 'https://swagger.io',
        },
        {
          name: 'VS Code',
          icon: VscVscode,
          percentage: 95,
          color: 'text-sky-600 dark:text-sky-400',
          url: 'https://code.visualstudio.com',
        },
        {
          name: 'Figma',
          icon: FaFigma,
          percentage: 65,
          color: 'text-rose-500 dark:text-rose-400',
          url: 'https://www.figma.com',
        },
        {
          name: 'Notion',
          icon: RiNotionFill,
          percentage: 75,
          color: 'text-stone-800 dark:text-stone-200',
          url: 'https://www.notion.so',
        },
      ],
    },
  ],
};
