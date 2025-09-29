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

export default function Skills() {
  return (
    <section
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center gap-16 bg-gray-800 xl:px-42"
      id="skills"
    >
      {/* Título da Sessão */}
      <h2 className="text-4xl font-bold text-center">
        Minhas{" "}
        <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          Habilidades
        </span>
      </h2>

      {/* Tecnologias & Ferramentas */}
      <article className="flex flex-col items-center justify-center gap-8 w-full">
        <h3 className="text-2xl font-semibold text-center">
          Tecnologias & Ferramentas
        </h3>

        {/* Carrossel */}
        <Carousel />
      </article>

      <div className="flex flex-col items-center justify-center gap-12 w-full md:grid md:grid-cols-2">
        {/* Proficiência */}
        <article className="flex flex-col justify-center gap-8">
          <h3 className="text-2xl font-semibold">Nível de Proficiência</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nobis quibusdam corporis pariatur accusantium, quaerat unde
            veritatis culpa itaque esse omnis voluptate similique? Corporis
            ipsa, assumenda voluptatum nisi quis itaque.
          </p>
        </article>

        {/* Especialização */}
        <article className="flex flex-col justify-center gap-8">
          <h3 className="text-2xl font-semibold">Especialização</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam debitis voluptatem et perferendis aut, consequuntur dolorum mollitia soluta molestiae culpa dolore nobis corporis veritatis neque nulla veniam blanditiis temporibus.</p>
        </article>
      </div>
    </section>
  );
}

function Carousel() {
  return (
    <div className="carousel flex w-full overflow-x-auto">
      <SkillsGroup />
      <SkillsGroup />
    </div>
  );
}

function SkillsGroup() {
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
    <div className="group flex items-center justify-center gap-8 px-4">
      {skills.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
}

function SkillItem({ name, icon }) {
  return (
    <div
      className={`bg-gray-700/10 h-32 w-32 p-4 flex flex-col items-center justify-center rounded-xl gap-2`}
    >
      <span className="text-6xl text-gray-400/50">{icon}</span>
      <p className="text-gray-300/50 text-sm text-center">{name}</p>
    </div>
  );
}
