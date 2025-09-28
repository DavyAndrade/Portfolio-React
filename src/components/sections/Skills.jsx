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
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center gap-16 bg-gray-800 lg:px-42"
      id="skills"
    >
      {/* Título da Sessão */}
      <h2 className="text-4xl font-bold text-center">
        Minhas{" "}
        <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          Habilidades
        </span>
      </h2>

      {/* Conteúdo da Sessão */}
      <article className="flex flex-col items-center justify-center gap-8 w-full">
        <h3 className="text-2xl font-semibold text-center">
          Tecnologias & Ferramentas
        </h3>

        {/* Carrossel */}
        <Carousel />
      </article>
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
  return (
    <div className="group flex items-center justify-center gap-8 px-4">
      <SkillItem name="HTML5" icon={<BiLogoHtml5 />} />
      <SkillItem name="CSS3" icon={<BiLogoCss3 />} />
      <SkillItem name="JavaScript" icon={<BiLogoJavascript />} />
      <SkillItem name="Sass" icon={<BiLogoSass />} />
      <SkillItem name="Tailwind CSS" icon={<BiLogoTailwindCss />} />
      <SkillItem name="Bootstrap" icon={<BiLogoBootstrap />} />
      <SkillItem name="React" icon={<BiLogoReact />} />
      <SkillItem name="TypeScript" icon={<BiLogoTypescript />} />
      <SkillItem name="PHP" icon={<BiLogoPhp />} />
      <SkillItem name="Java" icon={<BiLogoJava />} />
      <SkillItem name="PostgreSQL" icon={<BiLogoPostgresql />} />
      <SkillItem name="Git" icon={<BiLogoGit />} />
    </div>
  );
}

function SkillItem({ name, icon }) {
  return (
    <div
      className={`bg-gray-700 h-32 w-32 p-4 flex flex-col items-center justify-center rounded-xl gap-2`}
    >
      <span className="text-7xl text-gray-300">{icon}</span>
      <p className="text-gray-200 text-sm text-center">{name}</p>
    </div>
  );
}
