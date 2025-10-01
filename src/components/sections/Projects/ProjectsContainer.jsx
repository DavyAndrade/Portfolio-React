// Import do useState
import { useEffect, useState } from "react";

// Import dos componentes
import ProjectCard from "./ProjectCard.jsx";
import Button from "../../ui/Button.jsx";

// import dos ícones
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

import projects from "./projects.js";

export default function ProjectContainer() {
  const getInitialLimit = () => {
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(getInitialLimit());

  useEffect(() => {
    const handleResize = () => {
      setLimit(getInitialLimit());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const displayProjects = showAll ? projects : projects.slice(0, limit);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {projects.length > limit && (
        <Button
          action={toggleShowAll}
          text={
            showAll ? "Ver Menos" : `Ver Mais (${projects.length - limit})`
          }
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
