import { defineCollection } from "astro:content";

// Definir una colección de proyectos
const projectsCollection = defineCollection({});

// Exportar las colecciones
export const collections = {
  projects: projectsCollection,
};
