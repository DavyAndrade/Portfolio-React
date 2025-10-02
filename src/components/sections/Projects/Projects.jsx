import ProjectContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <section
      className="bg-gray-900 min-h-screen py-20 flex flex-col items-center justify-center px-6 w-full"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center gap-16 w-full xl:max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Meus{" "}
          <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

        <ProjectContainer />
      </div>
    </section>
  );
}
