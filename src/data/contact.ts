import { BsSend } from 'react-icons/bs';
import { FiClock, FiMapPin } from 'react-icons/fi';
import type { IconType } from 'react-icons/lib';
import { TbMail } from 'react-icons/tb';

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  icon: IconType;
}

export interface ScheduleCallCard {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Field {
  label: string;
  name: 'name' | 'email' | 'subject' | 'message';
  isTextArea: boolean;
}

export interface ContactSectionData {
  header: {
    title: string;
    highlightTitle: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    fields: Field[];
    submitButtonText: string;
    loadingButtonText: string;
  };
  getInTouch: {
    title: string;
    description: string;
    items: ContactInfoItem[];
    scheduleCard: ScheduleCallCard;
  };
}

export const contactData: ContactSectionData = {
  header: {
    title: "Let's work",
    highlightTitle: 'together.',
    description:
      "I'm open to new opportunities, interesting projects, or just a friendly hello!",
  },
  form: {
    title: 'Send Me a Message',
    description: "Fill out the form below and I'll get back to you shortly.",
    fields: [
      {
        label: 'Name',
        name: 'name',
        isTextArea: false,
      },
      {
        label: 'Email',
        name: 'email',
        isTextArea: false,
      },
      {
        label: 'Subject',
        name: 'subject',
        isTextArea: false,
      },
      {
        label: 'Message',
        name: 'message',
        isTextArea: true,
      },
    ],
    submitButtonText: 'Send Message',
    loadingButtonText: 'Sending...',
  },
  getInTouch: {
    title: 'Get in Touch',
    description: 'Here are other ways you can reach me.',
    items: [
      {
        id: 'email',
        label: 'Email',
        value: 'hary300.dev@gmail.com',
        icon: TbMail,
      },
      {
        id: 'location',
        label: 'Location',
        value: 'Yogyakarta, Indonesia',
        icon: FiMapPin,
      },
      {
        id: 'response-time',
        label: 'Response Time',
        value: 'Usually within 24 hours',
        icon: FiClock,
      },
      {
        id: 'open-to',
        label: 'Open to',
        value: 'Freelance • Full-time • Collaboration',
        icon: BsSend,
      },
    ],
    scheduleCard: {
      title: "Let's schedule a call",
      description: 'Want to discuss your project in detail?',
      buttonText: 'Schedule a meeting',
      buttonLink: '#', // ganti link Calendly/Google Meet
    },
  },
};
