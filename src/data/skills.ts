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
import { RiNextjsFill, RiNotionFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiRailway,
  SiSwagger,
  SiVite,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: IconType;
  percentage: number;
  color: string;
}

interface Category {
  id: number;
  name: string;
  skills: Skill[];
}

export const skillCategories: Category[] = [
  {
    id: 1,
    name: 'Languages',
    skills: [
      {
        name: 'HTML5',
        icon: FaHtml5,
        percentage: 90,
        color: 'text-orange-600 dark:text-orange-400',
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        percentage: 85,
        color: 'text-blue-600 dark:text-blue-400',
      },
      {
        name: 'JavaScript',
        icon: BsJavascript,
        percentage: 85,
        color: 'text-amber-500 dark:text-amber-400',
      },
      {
        name: 'TypeScript',
        icon: BsTypescript,
        percentage: 80,
        color: 'text-blue-600 dark:text-blue-400',
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
      },
      {
        name: 'Next.js',
        icon: RiNextjsFill,
        percentage: 80,
        color: 'text-zinc-800 dark:text-zinc-200',
      },
      {
        name: 'Tailwind CSS',
        icon: RiTailwindCssFill,
        percentage: 90,
        color: 'text-teal-500 dark:text-teal-400',
      },
      {
        name: 'Vite',
        icon: SiVite,
        percentage: 85,
        color: 'text-purple-500 dark:text-purple-400',
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
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        percentage: 75,
        color: 'text-stone-700 dark:text-stone-300',
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        percentage: 75,
        color: 'text-emerald-600 dark:text-emerald-400',
      },
      {
        name: 'Mongoose',
        icon: SiMongoose,
        percentage: 70,
        color: 'text-red-600 dark:text-red-400',
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
      },
      {
        name: 'Railway',
        icon: SiRailway,
        percentage: 70,
        color: 'text-purple-600 dark:text-purple-400',
      },
    ],
  },
  {
    id: 5,
    name: 'Tools',
    skills: [
      {
        name: 'Git',
        icon: FaGitAlt,
        percentage: 80,
        color: 'text-orange-600 dark:text-orange-400',
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        percentage: 85,
        color: 'text-zinc-800 dark:text-zinc-200',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        percentage: 80,
        color: 'text-orange-500 dark:text-orange-400',
      },
      {
        name: 'Swagger',
        icon: SiSwagger,
        percentage: 70,
        color: 'text-emerald-500 dark:text-emerald-400',
      },
      {
        name: 'VS Code',
        icon: VscVscode,
        percentage: 95,
        color: 'text-sky-600 dark:text-sky-400',
      },
      {
        name: 'Figma',
        icon: FaFigma,
        percentage: 65,
        color: 'text-rose-500 dark:text-rose-400',
      },
      {
        name: 'Notion',
        icon: RiNotionFill,
        percentage: 75,
        color: 'text-stone-800 dark:text-stone-200',
      },
    ],
  },
];
