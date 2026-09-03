import { FiMonitor } from 'react-icons/fi';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import { IoRocketOutline } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { RiUserHeartLine } from 'react-icons/ri';
import { HiOutlineUsers } from 'react-icons/hi2';
import { RiTargetFill } from 'react-icons/ri';
import { BsBarChart } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import type { IconType } from 'react-icons/lib';
import { MdArrowOutward } from 'react-icons/md';
import type { HeaderData } from '@/types/header';
import type { HeroImg } from '@/types/hero';
import aboutMeHeroDark from '@/assets/images/hero-img/about-me-hero-dark.webp';
import aboutMeHeroLight from '@/assets/images/hero-img/about-me-hero-light.webp';
import { UserRound, type LucideIcon } from 'lucide-react';

export interface AboutQuote {
  icon: IconType;
  text: string;
  highlight: string;
}

export interface WhatIDoItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface WhatIDoSection {
  icon: IconType;
  title: string;
  items: WhatIDoItem[];
}

export interface WhatIValueItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface WhatIValueSection {
  icon: IconType;
  title: string;
  items: WhatIValueItem[];
}

export interface AboutCTA {
  icon: IconType;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon: IconType;
}

export interface AboutMe {
  icon: LucideIcon;
  header: HeaderData;
  heroImg: HeroImg;
  quote: AboutQuote;
  whatIDo: WhatIDoSection;
  whatIValue: WhatIValueSection;
  cta: AboutCTA;
}

export const aboutMe: AboutMe = {
  icon: UserRound,
  header: {
    title: 'More about',
    highlightTitle: 'me.',
    description:
      "I'm Hary, a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. \n\nI love turning ideas into real products that solve problems and create meaningful experiences for users. \n\nI'm always learning, exploring new technologies, and improving my skills to build better applications every day.",
  },
  heroImg: {
    dark: aboutMeHeroDark,
    light: aboutMeHeroLight,
  },
  quote: {
    icon: BiSolidQuoteAltLeft,
    text: "Code is not just what I do, it's how I bring ideas to life.",
    highlight: 'bring ideas to life',
  },

  whatIDo: {
    icon: FaRegLightbulb,
    title: 'What I Do',
    items: [
      {
        icon: FiMonitor,
        title: 'Build',
        description: 'Creating modern and responsive web applications.',
      },
      {
        icon: IoExtensionPuzzleOutline,
        title: 'Solve',
        description: 'Solving real-world problems with effective solutions.',
      },
      {
        icon: IoRocketOutline,
        title: 'Improve',
        description:
          'Continuously learning and improving to deliver better results.',
      },
    ],
  },

  whatIValue: {
    icon: RiUserHeartLine,
    title: 'What I Value',
    items: [
      {
        icon: FaCode,
        title: 'Clean Code',
        description: 'Writing clean, readable, and maintainable code.',
      },
      {
        icon: HiOutlineUsers,
        title: 'User Focused',
        description: 'Building with users in mind to create great experiences.',
      },
      {
        icon: RiTargetFill,
        title: 'Consistency',
        description: 'Being consistent and dedicated in every project.',
      },
      {
        icon: BsBarChart,
        title: 'Growth Mindset',
        description: 'Always learning and embracing new challenges.',
      },
    ],
  },

  cta: {
    icon: MdMailOutline,
    title: "Let's work together!",
    subtitle: "I'm open to new opportunities and interesting projects.",
    buttonText: 'Get In Touch',
    buttonIcon: MdArrowOutward,
  },
};
