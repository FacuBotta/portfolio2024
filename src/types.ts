import type { IconName } from "./components/icons/icon-names";

export interface ProjectType {
  title: { en: string; es: string; fr: string };
  description: { en: string; es: string; fr: string };
  link: string;
  image: string;
  readme?: string;
  stack: IconName[];
}

export interface skillsType {
  skill: string;
  iconName: IconName;
  isInLove: "true" | "false";
  trainingLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
