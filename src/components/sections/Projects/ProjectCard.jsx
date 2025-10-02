import Button from "../../ui/Button";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-gray-800 rounded-2xl hover:translate-y-[-4px] hover:shadow-xl focus:translate-y-[-4px] focus:shadow-xl transition-all duration-300 flex flex-col w-full border border-gray-700" tabIndex={0}>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      <div className="flex flex-col p-6 justify-between gap-4 h-full">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="odd:bg-emerald-400/10 odd:text-emerald-400 even:bg-blue-500/10 even:text-blue-500 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button
            style={
              "bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors focus:bg-emerald-600 cursor-pointer flex-1 text-center"
            }
            text={"Ver Demo"}
            action={() => {
              window.open(project.demo, "_blank");
            }}
          />
          <Button
            style={
              "border border-sky-500 text-sky-500 py-2 rounded-lg hover:bg-sky-500 hover:text-white focus:bg-sky-500 focus:text-white transition-colors cursor-pointer flex-1 text-center"
            }
            text={"Código"}
            action={() => {
              window.open(project.repo, "_blank");
            }}
          />
        </div>
      </div>
    </article>
  );
}
