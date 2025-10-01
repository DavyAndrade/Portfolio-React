// Import do useState
import { useState } from "react";

// Import dos componentes
import ProjectCard from "./ProjectCard.jsx";
import Button from "../../ui/Button.jsx";

// import dos projetos
import projects from "./projects.js";

// import das imagens
import FitCheckImg from "../../../assets/fitcheck.png";
import TaskFlowImg from "../../../assets/taskflow.png";
import LocalizaCEPImg from "../../../assets/localizacep.png";
import BentoGridImg from "../../../assets/bentogrid.png";
import SocialLinkProfileImg from "../../../assets/social-links.png";

// import dos ícones
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function ProjectContainer() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);

    if (showAll) {
      setTimeout(() => {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {projects.length > 3 && (
        <Button
          action={toggleShowAll}
          text={showAll ? "Ver Menos" : `Ver Mais (${projects.length - 3})`}
          icon={
            showAll ? <IoArrowUpCircleOutline /> : <IoArrowDownCircleOutline />
          }
          style={
            "bg-gray-700/50 px-6 py-3 rounded-xl cursor-pointer text-center text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
          }
        />
      )}
    </div>
  );
}
