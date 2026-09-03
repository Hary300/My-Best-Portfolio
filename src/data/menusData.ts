import {
  Home,
  UserRound,
  Mail,
  CodeXml,
  Folder,
  type LucideIcon,
  Award,
} from 'lucide-react';

export type MenuSlug =
  | 'home'
  | 'projects'
  | 'skills'
  | 'about'
  | 'achievement'
  | 'contact';

interface Menu {
  id: number;
  label: string;
  slug: MenuSlug;
  icon: LucideIcon;
}

export const menus: Menu[] = [
  {
    id: 1,
    label: 'Home',
    slug: 'home',
    icon: Home,
  },
  {
    id: 2,
    label: 'Projects',
    slug: 'projects',
    icon: Folder,
  },
  {
    id: 3,
    label: 'Skills',
    slug: 'skills',
    icon: CodeXml,
  },
  {
    id: 4,
    label: 'About',
    slug: 'about',
    icon: UserRound,
  },
  {
    id: 5,
    label: 'Achievement',
    slug: 'achievement',
    icon: Award,
  },
  {
    id: 6,
    label: 'Contact',
    slug: 'contact',
    icon: Mail,
  },
];
