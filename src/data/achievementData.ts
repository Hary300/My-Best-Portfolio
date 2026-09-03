import achievementHeroDark from '@/assets/images/hero-img/achievement-hero-dark.webp';
import achievementHeroLight from '@/assets/images/hero-img/achievement-hero-light.webp';
import type { HeaderData } from '@/types/header';
import type { HeroImg } from '@/types/hero';
import { Award, type LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons/lib';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { RxGear } from 'react-icons/rx';
import { IoBookOutline } from 'react-icons/io5';

export interface Learning {
  id: string;
  title: string;
  description: string;
  linkNotion: string;
  tags?: string[];
  icon: IconType;
  accentColor: string;
  accentColorDark: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedYear: string;
  credentialUrl: string;
}

interface AchievementData {
  icon: LucideIcon;
  header: HeaderData;
  heroImg: HeroImg;

  learning: Learning[];
  certificate: Certificate[];
}

export const achievementData: AchievementData = {
  icon: Award,
  header: {
    title: 'My',
    highlightTitle: 'Achievement',
    description:
      'Milestones I have reached and skills I have developed through learning, building, and solving real problems.',
  },
  heroImg: {
    dark: achievementHeroDark,
    light: achievementHeroLight,
  },
  certificate: [
    {
      id: 'frontEnd Ahademy boothcamp',
      issuer: 'Ahademy',
      issuedYear: '2026',
      title: 'Front-End Developer Web Programming Hack',
      credentialUrl:
        'https://credsverse.com/credentials/006f7807-010e-4e48-934a-35c4e7a56dcc?preview=1',
    },
  ],
  learning: [
    {
      id: 'learning-backend-typescript',
      title: 'Backend — TypeScript',
      linkNotion:
        'https://app.notion.com/p/Learning-Backend-TypeScript-Version-37dda22dd34180889049e8d3dba8f8ce?source=copy_link',
      tags: ['Backend', 'TypeScript', 'Node.js'],
      description:
        'Backend architecture notes and REST API handling with TypeScript.',
      icon: IoDocumentTextOutline,
      accentColor: '#BADFDB',
      accentColorDark: '#2E5B55',
    },
    {
      id: 'learning-react-hook-form',
      title: 'React Hook Form',
      description:
        'Building forms in React, handling form, validation, and integration with Zod.',
      linkNotion:
        'https://app.notion.com/p/React-Hook-Form-RHF-37eda22dd34180d2a595e741ae4fe190',
      tags: ['React', 'React Hook Form', 'Zod', 'Frontend'],
      icon: IoDocumentTextOutline,
      accentColor: '#B6AE9F',
      accentColorDark: '#4A463D',
    },
    {
      id: 'react-with-hary300',
      title: 'React with Hary300',
      description:
        'Notes and exercises following the React with Hary300 learning series.',
      linkNotion:
        'https://app.notion.com/p/React-with-Hary300-35cda22dd34180e1ac79f54a763881db?source=copy_link',
      tags: ['React', 'JavaScript', 'Course', 'Learning', 'Frontend'],
      icon: IoDocumentTextOutline,
      accentColor: '#8CA9FF',
      accentColorDark: '#2B3C68',
    },
    {
      id: 'setup-typescript',
      title: 'Typescript Setup',
      description: 'A step-by-step guide to configuring TypeScript projects.',
      linkNotion:
        'https://app.notion.com/p/Setup-Typescript-37cda22dd3418049bc51c954bdad4ff2',
      tags: ['TypeScript', 'Setup', 'Tooling', 'DX', 'Config'],
      icon: RxGear,
      accentColor: '#E2A16F',
      accentColorDark: '#6B4323',
    },
    {
      id: 'logic-notes',
      title: 'Logic Notes',
      description:
        'Notes and exercises for programming logic and problem solving.',
      linkNotion:
        'https://app.notion.com/p/Logic-Notes-3ccda22dd341806693b9fb2783670fe3?source=copy_link',
      tags: [
        'Logic',
        'Algorithm',
        'Problem Solving',
        'Learning',
        'Programming',
      ],
      icon: IoBookOutline,
      accentColor: '#BADFDB',
      accentColorDark: '#233835',
    },
    {
      id: 'setup-css',
      title: 'CSS initial setup',
      description: 'Initial CSS setup and global styling configuration',
      linkNotion:
        'https://app.notion.com/p/Global-Css-Initial-setup-3c9da22dd341803694fdc3ee5688dc9b?source=copy_link',
      tags: ['CSS', 'Setup', 'Global CSS'],
      icon: RxGear,
      accentColor: '#C5B3D3',
      accentColorDark: '#4E3E5E',
    },
    {
      id: 'api-documentation-swagger',
      title: 'Swagger',
      description: 'Documenting REST APIs using Swagger and OpenAPI',
      linkNotion:
        'https://app.notion.com/p/API-Documentation-with-Swagger-OpenAPI-3b0da22dd341808b8633c99c2308837a?source=copy_link',
      tags: ['API', 'Swagger', 'OpenAPI'],
      icon: IoDocumentTextOutline,
      accentColor: '#F08787',
      accentColorDark: '#5E2E2E',
    },
    {
      id: 'skeleton-height',
      title: 'Skeleton Height',
      description:
        'Converting font sizes (typography) into appropriate skeleton loader heights.',
      linkNotion:
        'https://app.notion.com/p/Skeleton-Height-3aada22dd34180d7b3f6f0c1b8180a94?source=copy_link',
      tags: ['UI', 'Skeleton', 'CSS', 'Frontend'],
      icon: IoBookOutline,
      accentColor: '#A0AEC0',
      accentColorDark: '#2D3748',
    },
    {
      id: 'javascript-methods',
      title: 'JavaScript Methods',
      description:
        'Quick-reference cheat sheet of key JavaScript methods for everyday frontend work.',
      linkNotion:
        'https://app.notion.com/p/JavaScript-Methods-294da22dd341803f9d55ff1ad80d92dc?source=copy_link',
      tags: ['JavaScript', 'Methods', 'Frontend', 'Cheatsheet', 'React'],
      icon: IoBookOutline,
      accentColor: '#FFCB56',
      accentColorDark: '#523F16',
    },
    {
      id: 'svg-roadmap-react',
      title: 'SVG Roadmap',
      description:
        'Learning SVG: from core concepts to animation and optimization.',
      linkNotion:
        'https://app.notion.com/p/Roadmap-SVG-untuk-React-Developer-3a3da22dd3418081a05de4c08d5f34ca?source=copy_link',
      tags: ['SVG', 'React', 'Frontend', 'Roadmap', 'Graphics'],
      icon: IoDocumentTextOutline,
      accentColor: '#DDAED3',
      accentColorDark: '#5A3B53',
    },
    {
      id: 'wpu-javascript',
      title: 'Basic JavaScript',
      description: 'Notes and exercises about basic Javascript.',
      linkNotion:
        'https://app.notion.com/p/WPU-JavaScript-302da22dd341807ca1cae243198d1cab?source=copy_link',
      tags: ['JavaScript', 'Course', 'WPU', 'Learning'],
      icon: IoDocumentTextOutline,
      accentColor: '#91AE6E',
      accentColorDark: '#2C391E',
    },
    {
      id: 'javascript-advanced',
      title: 'Advanced JavaScript',
      description:
        'Notes and exercises on advanced JavaScript concepts and patterns.',
      linkNotion:
        'https://app.notion.com/p/WPU-Javascript-lanjutan-322da22dd34180bc843cfda17983e5b3?source=copy_link',
      tags: ['JavaScript', 'Advanced', 'Learning', 'Notes'],
      icon: IoDocumentTextOutline,
      accentColor: '#D25353',
      accentColorDark: '#4D1C1C',
    },
  ],
};
