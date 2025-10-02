import AboutText from "./AboutText.jsx";
import AboutItem from "./AboutItem.jsx";

export default function About() {
  return (
    <section
      className="bg-gray-900 min-h-screen py-20 px-6 flex flex-col items-center justify-center w-full"
      id="about"
    >
      <div className="flex flex-col items-center justify-center gap-16 w-full max-w-6xl mx-auto">
        {/* Título da Sessão */}
        <h2 className="text-4xl font-bold">
          Sobre{" "}
          <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Mim
          </span>
        </h2>

        {/* Conteúdo da Sessão */}
        <div className="flex flex-col items-center justify-center gap-12 w-full md:grid md:grid-cols-2">
          {/* Column 1 */}
          <div className="flex items-center justify-center h-96 w-full bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl">
            <span className="text-8xl">👨‍💻</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <AboutText text="Sou um desenvolvedor apaixonado por tecnologia com mais de 2 anos de experiência criando soluções digitais inovadoras. Especializo-me em desenvolvimento web moderno e sempre busco aprender novas tecnologias." />
            <AboutText text="Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje transformo ideias em realidade através de código limpo e design intuitivo." />

            {/* Experience */}
            <div className="grid grid-cols-2 gap-4">
              <AboutItem
                title="3+"
                subtitle="Projetos"
                color="text-emerald-500"
              />
              <AboutItem title="2+" subtitle="Anos" color="text-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
