import type { IconName } from "./components/icons/icon-names";

export interface ProjectType {
  title: string;
  description: string;
  link: string;
  image: string;
  readme?: string;
  stack: IconName[];
}
