import type { TechStackSlug } from '@/types/projects';
import { BsJavascript } from 'react-icons/bs';
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAxios,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiMongoose,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

interface TechStackItem {
  name: string;
  bgColor: string;
  textColor: string;
  icon: IconType;
}

export const techStacks: Record<TechStackSlug, TechStackItem> = {
  html: {
    name: 'HTML',
    bgColor: 'bg-orange-100 dark:bg-orange-950/60',
    textColor: 'text-orange-800 dark:text-orange-300',
    icon: FaHtml5,
  },
  css: {
    name: 'CSS',
    bgColor: 'bg-blue-100 dark:bg-blue-950/60',
    textColor: 'text-blue-800 dark:text-blue-300',
    icon: FaCss3Alt,
  },
  javascript: {
    name: 'JavaScript',
    bgColor: 'bg-amber-100 dark:bg-amber-950/60',
    textColor: 'text-amber-800 dark:text-amber-300',
    icon: BsJavascript,
  },
  typescript: {
    name: 'TypeScript',
    bgColor: 'bg-blue-100 dark:bg-blue-950/60',
    textColor: 'text-blue-800 dark:text-blue-300',
    icon: SiTypescript,
  },
  tailwind: {
    name: 'Tailwind CSS',
    bgColor: 'bg-teal-100 dark:bg-teal-950/60',
    textColor: 'text-teal-800 dark:text-teal-300',
    icon: RiTailwindCssFill,
  },
  react: {
    name: 'React',
    bgColor: 'bg-sky-100 dark:bg-sky-950/60',
    textColor: 'text-sky-800 dark:text-sky-300',
    icon: FaReact,
  },
  reactQuery: {
    name: 'React Query',
    bgColor: 'bg-rose-100 dark:bg-rose-950/60',
    textColor: 'text-rose-800 dark:text-rose-300',
    icon: SiReactquery,
  },
  nextjs: {
    name: 'Next.js',
    bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
    textColor: 'text-zinc-800 dark:text-zinc-300',
    icon: RiNextjsFill,
  },
  framerMotion: {
    name: 'Framer Motion',
    bgColor: 'bg-purple-100 dark:bg-purple-950/60',
    textColor: 'text-purple-800 dark:text-purple-300',
    icon: SiFramer,
  },
  express: {
    name: 'Express',
    bgColor: 'bg-zinc-200 dark:bg-zinc-800/80',
    textColor: 'text-zinc-800 dark:text-zinc-300',
    icon: SiExpress,
  },
  mongodb: {
    name: 'MongoDB',
    bgColor: 'bg-emerald-100 dark:bg-emerald-950/60',
    textColor: 'text-emerald-800 dark:text-emerald-300',
    icon: SiMongodb,
  },
  mongoose: {
    name: 'Mongoose',
    bgColor: 'bg-red-100 dark:bg-red-950/60',
    textColor: 'text-red-800 dark:text-red-300',
    icon: SiMongoose,
  },
  nodejs: {
    name: 'Node.js',
    bgColor: 'bg-green-100 dark:bg-green-950/60',
    textColor: 'text-green-800 dark:text-green-300',
    icon: FaNodeJs,
  },
  rhf: {
    name: 'React Hook Form',
    bgColor: 'bg-pink-100 dark:bg-pink-950/60',
    textColor: 'text-pink-800 dark:text-pink-300',
    icon: SiReacthookform,
  },
  shadcn: {
    name: 'Shadcn UI',
    bgColor: 'bg-slate-200 dark:bg-slate-800/80',
    textColor: 'text-slate-800 dark:text-slate-300',
    icon: SiShadcnui,
  },
  axios: {
    name: 'Axios',
    bgColor: 'bg-purple-100 dark:bg-purple-950/60',
    textColor: 'text-purple-800 dark:text-purple-300',
    icon: SiAxios,
  },
  zod: {
    name: 'Zod',
    bgColor: 'bg-indigo-100 dark:bg-indigo-950/60',
    textColor: 'text-indigo-800 dark:text-indigo-300',
    icon: SiZod,
  },
};
