import type { IconName } from './components/icons/icon-names';

export interface ProjectType {
  title: { en: string; es: string; fr: string };
  description: { en: string; es: string; fr: string };
  link_repo?: string;
  link_demo?: string;
  image: string;
  readme?: string;
  stack: IconName[];
}

export interface skillsType {
  skill: string;
  iconName: IconName;
  isInLove: 'true' | 'false';
  trainingLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface DescriptionType {
  en: string;
  fr: string;
  es: string;
}
export interface StudiesType {
  en: {
    institution: string;
    where: string;
    start: string;
    end: string;
    title: string;
    details?: string;
    learned?: string[];
  };
  fr: {
    institution: string;
    where: string;
    start: string;
    end: string;
    title: string;
    details?: string;
    learned?: string[];
  };
  es: {
    institution: string;
    where: string;
    start: string;
    end: string;
    title: string;
    details?: string;
    learned?: string[];
  };
}
export interface AboutMeType {
  en: string[];
  fr: string[];
  es: string[];
}
