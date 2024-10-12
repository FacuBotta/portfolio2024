import { readdirSync, writeFileSync } from "fs";
import { resolve, basename } from "path";

// Ruta al directorio donde están los archivos de íconos .astro
const iconsDir = resolve("./src/components/icons");
const outputFile = resolve("./src/components/icon-names.ts");

// Obtener la lista de archivos .astro en el directorio de íconos
const iconFiles = readdirSync(iconsDir)
  .filter((file) => file.endsWith(".astro"))
  .map((file) => basename(file, ".astro"));

// Generar el archivo de nombres de íconos
const iconNamesContent = `
export const availableIcons = ${JSON.stringify(iconFiles)} as const;

export type IconName = typeof availableIcons[number];
`;

// Escribir el archivo generado
writeFileSync(outputFile, iconNamesContent);

console.log(`Archivo de nombres de íconos generado: ${outputFile}`);
