import Carousel from "./Carousel/Carousel";
import Proficiency from "./Proficiency/Proficiency";
import Specialization from "./Specialization/Specialization";

export default function Skills() {
  return (
    <section
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-gray-800 w-full"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center gap-16 w-full max-w-6xl mx-auto">
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
            <Proficiency />
          </article>

          {/* Especialização */}
          <article className="flex flex-col justify-center gap-8 w-full">
            <h3 className="text-2xl font-semibold">Especialização</h3>

            {/* Lista de Especialização */}
            <Specialization />
          </article>
        </div>
      </div>
    </section>
  );
}
