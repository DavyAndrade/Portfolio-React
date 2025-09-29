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
        <article className="flex flex-col justify-center gap-8 w-full">
          <h3 className="text-2xl font-semibold">Nível de Proficiência</h3>

          {/* Lista de Proficiência */}
          <ProficiencyList />
        </article>

        {/* Especialização */}
        <article className="flex flex-col justify-center gap-8 w-full">
          <h3 className="text-2xl font-semibold">Especialização</h3>

          {/* Lista de Especialização */}
          <SpecializationList />
        </article>
      </div>
    </section>
  );
}

// Componente do Carrossel
function Carousel() {
  return (
    <div className="carousel flex w-full overflow-x-auto">
      <SkillsGroup />
      <SkillsGroup />
    </div>
  );
}

// Componente do Grupo de Habilidades
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
    <div className="group flex items-center justify-center gap-12 px-6">
      {skills.map((skill) => (
        <SkillItem key={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
}

// Componente de Item de Habilidade
function SkillItem({ icon }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
      <span className="text-7xl text-white/25">{icon}</span>
    </div>
  );
}

// Componente da Lista de Proficiência
function ProficiencyList() {
  const proficiencies = [
    { skill: "HTML5", level: "85%" },
    { skill: "CSS3", level: "85%" },
    { skill: "JavaScript", level: "80%" },
    { skill: "React", level: "75%" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {proficiencies.map((item) => (
        <ProficiencyItem
          key={item.skill}
          skill={item.skill}
          level={item.level}
        />
      ))}
    </div>
  );
}

// Componente de Item de Proficiência
function ProficiencyItem({ skill, level }) {
  return (
    <div className="flex flex-col gap-2">
      <ProficiencyInfo skill={skill} level={level} />
      <ProgressBar level={level} />
    </div>
  );
}

// Componente de Informação de Proficiência
function ProficiencyInfo({ skill, level }) {
  return (
    <div className="flex items-center w-full justify-between">
      <p className="font-medium">{skill}</p>
      <p className="text-emerald-500">{level}</p>
    </div>
  );
}

// Componente da Barra de Progresso
function ProgressBar({ level }) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-emerald-500 to-sky-500 h-3 rounded-full"
        style={{ width: level }}
      ></div>
    </div>
  );
}

function SpecializationList() {
  const specializations = [
    { icon: "🖥️", name: "Front-end" },
    { icon: "🎨", name: "Design UI/UX" },
    { icon: "📱", name: "Responsividade" },
    { icon: "⚙️", name: "Versionamento" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {specializations.map((item) => (
        <SpecializationItem key={item.name} icon={item.icon} name={item.name} />
      ))}
    </div>
  );
}

function SpecializationItem({ icon, name }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-700 rounded-lg hover:translate-y-[-4px] hover:shadow-xl transition-all delay-100">
      <span className="text-4xl">{icon}</span>
      <p className="font-medium text-center">{name}</p>
    </div>
  );
}
