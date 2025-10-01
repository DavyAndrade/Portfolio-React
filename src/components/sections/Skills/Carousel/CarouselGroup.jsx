/* Componentes */
import CarouselItem from "./CarouselItem.jsx";

/* Ícones */
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPhp } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";

/* Carousel Group */
export default function CarouselGroup({ ariaHidden }) {
  const skills = [
    { name: "HTML5", icon: <BiLogoHtml5 /> },
    { name: "CSS3", icon: <BiLogoCss3 /> },
    { name: "JavaScript", icon: <BiLogoJavascript /> },
    { name: "Sass", icon: <BiLogoSass /> },
    { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
    { name: "Bootstrap", icon: <BiLogoBootstrap /> },
    { name: "React", icon: <BiLogoReact /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "PHP", icon: <BiLogoPhp /> },
    { name: "Java", icon: <BiLogoJava /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "Git", icon: <BiLogoGit /> },
  ];

  return (
    <div
      aria-hidden={ariaHidden}
      className="group flex items-center justify-center gap-12 px-6"
    >
      {skills.map((skill) => (
        <CarouselItem key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
