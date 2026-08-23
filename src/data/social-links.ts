import { FaGithub } from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';
import { FaLinkedin } from 'react-icons/fa';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/Hary300',
    icon: FaGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hary-np-7a370a413/',
    icon: FaLinkedin,
  },
];
