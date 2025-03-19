import type { ProjectType } from '../types';

export const projects: ProjectType[] = [
  {
    title: {
      en: 'PDF meta data editor',
      es: 'Editor de metadatos de PDF',
      fr: 'Éditeur de métadonnées PDF',
    },
    description: {
      en: "A web app that allows you to edit the metadata of PDF files completely free, securely, and privately. The entire process takes place in the user's browser, so no data is sent to any server. Additionally, there are no usage limits or registration requirements.",
      es: 'Una aplicación web que permite editar los metadatos de archivos PDF de manera 100 % gratuita, segura y privada. Todo el proceso se realiza en el navegador del usuario, por lo que no se envía información a ningún servidor. Además, no hay límites de uso ni necesidad de registrarse.',
      fr: 'Une application web qui permet de modifier les métadonnées des fichiers PDF de manière totalement gratuite, sécurisée et privée. Tout le processus s’effectue dans le navigateur de l’utilisateur, aucune donnée n’est donc envoyée à un serveur. De plus, il n’y a aucune limite d’utilisation ni obligation d’inscription.',
    },
    image: 'pdfMetadataEditor.webp',
    link_repo: 'https://github.com/FacuBotta/metadata-pdf-editor',
    link_demo: 'https://editmypdf.netlify.app/',
    stack: ['VueJsIcon', 'TailwindIcon', 'TypesCriptIcon'],
    readme: 'portfolio',
  },
  {
    title: {
      en: 'Tasks Manager API',
      es: 'API de gestión de tareas',
      fr: 'API de gestion des tâches',
    },
    description: {
      en: "A full API made in Node.js and Express.js that provides all endpoints needed to a task manager system.\
        It's type safe and includes JWT authentication. This project brinds me to a deeper understanding of APIs and how to build them from scratch.",
      es: 'Una full rest API hecha en Node.js y Express.js que proporciona todos los endpoints necesarios para un sistema de gestión de tareas.\
        Es type safe e incluye autenticación con JWT. Este proyecto me llevó a una comprensión más profunda de las APIs y cómo construirlas desde cero.',
      fr: "Une full rest API faite en Node.js et Express.js qui fournit tous les endpoints nécessaires à un système de gestion des tâches.\
        Elle est type safe et inclut l'authentification avec JWT. Ce projet m'a conduit à une compréhension plus profonde des APIs et comment les construire à partir de zéro.",
    },
    image: 'taskApi.webp',
    link_repo: 'https://github.com/FacuBotta/Task-Management-API',
    stack: ['NodeIcon', 'TypesCriptIcon', 'MysqlIcon', 'JwtIcon'],
    readme: 'taskManagerAPI',
  },
  {
    title: {
      en: 'Background generator',
      es: 'Generador de fondos de pantalla',
      fr: "Générateur de fonds d'écran",
    },
    description: {
      en: "A little python project that generates backgrounds for windows about any of the topics of your choice. It use Ollama installed locally with llama LLM to generate the new\
    content. I use it in my computer so I can have a different background for each day with different tips and tricks about the topics I'm learning.",
      es: 'Un proyecto de python que genera backgrounds para windows con consejos de cualquiera de los tópicos especificados. Utiliza Ollama instalado en local con modelos LLM de llama para generar el nuevo contenido.\
      Actualmente uso este proyecto en mi computadora para tener un background diferente para cada día con consejos y trucos sobre los tópicos que estoy aprendiendo.',
      fr: "Un petit projet python qui génère des backgrounds pour Windows sur les sujets de votre choix. Il utilise Ollama installé localement avec llama LLM pour générer le nouveau contenu.\
      Je l'utilise sur mon ordinateur pour avoir un background différent pour chaque jour avec des conseils et astuces sur les sujets que je m'apprends.",
    },
    image: 'backgroundGenerator.webp',
    link_repo: 'https://github.com/FacuBotta/background_generator/tree/main',
    stack: ['PythonIcon', 'OllamaIcon'],
    readme: 'backgroundGenerator',
  },
  {
    title: {
      en: 'Full Website with Admin page',
      es: 'Sitio web completo con página de administración',
      fr: "Site complet avec page d'administration",
    },
    description: {
      en: "A full website for a theater company. It's a full CRUD app with admin panel and google authentication. It was my final project for my first year of web development\
    studies and now is the base for the real website of the theater company but I'm migrating the project to react and node.js.",
      es: 'Un sitio web completo para una compañía de teatro. Es una aplicación CRUD completa con panel de administración y autenticación de google. Fue mi último proyecto para mi primer año de estudios de desarrollo web\
      y ahora es la base para el sitio web real de la compañía de teatro, pero estoy migrando el proyecto a react y node.js.',
      fr: "Un site complet pour une compagnie de théâtre. C'est une application CRUD complète avec panneau d'administration et authentification google. C'était mon dernier projet pour mon premier an de développement web\
      et maintenant c'est la base pour le site web réel de la compagnie de théâtre mais je suis migreant le projet en react et node.js.",
    },
    image: 'fullWebSite.webp',
    link_repo: 'https://github.com/FacuBotta/filrouge2023',
    stack: [
      'PhpIcon',
      'MysqlIcon',
      'ApacheIcon',
      'JavaScriptIcon',
      'HtmlIcon',
      'CssIcon',
    ],
    readme: 'filRouge',
  },
];
