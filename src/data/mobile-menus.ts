import {
  Home,
  UserRound,
  Mail,
  CodeXml,
  Folder,
  type LucideIcon,
} from 'lucide-react';

export type MobileMenuSlug =
  | 'home'
  | 'projects'
  | 'skills'
  | 'about'
  | 'contact';

interface MobileMenu {
  id: number;
  label: string;
  slug: MobileMenuSlug;
  icon: LucideIcon;
}

export const mobileMenus: MobileMenu[] = [
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
    label: 'Contact',
    slug: 'contact',
    icon: Mail,
  },
];
