const fs = require('fs');
const path = require('path');

// Ruta al archivo sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Obtener la fecha actual en formato ISO (sin milisegundos)
const today = new Date().toISOString().split('.')[0] + 'Z';

// Leer el archivo sitemap.xml
fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo sitemap.xml:', err);
    process.exit(1);
  }

  // Reemplazar todas las fechas <lastmod> con la fecha actual
  const updatedData = data.replace(
    /<lastmod>.*?<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );

  // Escribir los cambios en el archivo sitemap.xml
  fs.writeFile(sitemapPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir en el archivo sitemap.xml:', err);
      process.exit(1);
    }
    console.log(
      'El archivo sitemap.xml ha sido actualizado con la fecha de hoy:',
      today
    );
  });
});
