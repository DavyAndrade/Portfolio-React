import ProjectContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <section
      className="bg-gray-900 min-h-screen py-20 flex flex-col items-center justify-center gap-16 px-6 xl:px-42"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center">
        Meus{" "}
        <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          Projetos
        </span>
      </h2>

      <ProjectContainer />
    </section>
  );
}
