import type { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    title: "Tasks Manager API",
    description:
      "A full API made in Node.js and Express.js that provides all endpoints needed to a task manager system.\
      It's type safe and includes JWT authentication. This project brinds me to a deeper understanding of APIs and how to build them from scratch.",
    image:
      "https://github.com/FacuBotta/Task-Management-API/raw/main/files/consoleCapure.png",
    link: "https://github.com/FacuBotta/Task-Management-API",
    // TODO: add express icon and jwt icon
    stack: ["NodeIcon", "TypesCriptIcon", "MysqlIcon"],
    readme: "taskManagerAPI",
  },
  {
    title: "Background Topics generator",
    description:
      "A little python project that generates backgrounds for windows about any of the topics of your choice. It use Ollama installed locally with llama LLM to generate the new\
    content. I use it in my computer so I can have a different background for each day with different tips and tricks about the topics I'm learning.",
    image:
      "https://github.com/FacuBotta/background_generator/blob/main/assets/newBackgroung.jpg?raw=true",
    link: "https://github.com/FacuBotta/background_generator/tree/main",
    // TODO: add ollama icon
    stack: ["PythonIcon"],
    readme: "backgroundGenerator",
  },
  {
    title: "Full Website with Admin page",
    description:
      "A full website for a theater company. It's a full CRUD app with admin panel and google authentication. It was my final project for my first year of web development\
    studies and now is the base for the real website of the theater company but I'm migrating the project to react and node.js.",
    image:
      "https://github.com/FacuBotta/filrouge2023/raw/master/readmeFiles/image3.png",
    link: "https://github.com/FacuBotta/filrouge2023",
    stack: [
      "PhpIcon",
      "MysqlIcon",
      "ApacheIcon",
      "JavaScriptIcon",
      "HtmlIcon",
      "CssIcon",
    ],
    readme: "filRouge",
  },
];
