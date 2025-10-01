import FitCheckImg from "../../../assets/fitcheck.png";
import TaskFlowImg from "../../../assets/taskflow.png";
import LocalizaCEPImg from "../../../assets/localizacep.png";
import BentoGridImg from "../../../assets/bentogrid.png";
import SocialLinkProfileImg from "../../../assets/social-links.png";

const projects = [
  {
    name: "FitCheck",
    description:
      "Plataforma web responsiva para monitoramento de saúde, com calculadora de IMC e Peso Corporal Ideal (PCI).",
    demo: "https://davyandrade.github.io/FitCheck/",
    repo: "https://github.com/DavyAndrade/FitCheck",
    tags: ["HTML", "CSS", "JavaScript"],
    image: FitCheckImg,
  },
  {
    name: "TaskFlow",
    description:
      "Aplicação web responsiva para organização de tarefas (ToDoList).",
    demo: "https://davyandrade.github.io/TaskFlow/",
    repo: "https://github.com/DavyAndrade/TaskFlow",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "TailwindCSS"],
    image: TaskFlowImg,
  },
  {
    name: "LocalizaCEP",
    description:
      "Aplicação web responsiva para consulta de endereços via CEP, utilizando a API ViaCEP.",
    demo: "https://davyandrade.github.io/LocalizaCEP/",
    repo: "https://github.com/DavyAndrade/LocalizaCEP",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    image: LocalizaCEPImg,
  },
  {
    name: "Bento Grid",
    description:
      "Um projeto simples feito com HTML e CSS utilizando Grid para montar um Bento Grid",
    demo: "https://davyandrade.github.io/Bento-Grid/",
    repo: "https://github.com/DavyAndrade/Bento-Grid",
    tags: ["HTML", "CSS", "Grid"],
    image: BentoGridImg,
  },
  {
    name: "Social Link Profile",
    description:
      "Um projeto simples feito com HTML e CSS para exibir links de redes sociais.",
    demo: "https://davyandrade.github.io/Social-Link-Profiles/",
    repo: "https://github.com/DavyAndrade/Social-Link-Profiles",
    tags: ["HTML", "CSS"],
    image: SocialLinkProfileImg,
  },
];

export default projects;
