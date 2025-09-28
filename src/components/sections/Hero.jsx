import davy from "../../assets/davy.jpg";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen pt-20 flex flex-col items-center justify-center gap-8 px-6 lg:px-78 animate-fade-in-up w-full"
      id="home"
    >
      <img
        src={davy}
        alt="Davy Andrade"
        className="w-32 h-32 rounded-full object-cover lg:w-48 lg:h-48"
      />
      <h1 className="text-5xl font-bold text-center md:text-7xl">
        Olá, eu sou{" "}
        <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          Davy Andrade
        </span>
      </h1>

      <p className="text-xl text-gray-300 text-center experiências digitais md:text-2xl max-w-2xl">
        Desenvolvedor Front-end apaixonado por criar experiências digitais
        incríveis
      </p>

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-medium focus:bg-emerald-600 cursor-pointer"
          onClick={() => {
            window.location.href = "#projects";
          }}
        >
          Ver Projetos
        </button>
        <button className="border border-sky-500 text-sky-500 px-8 py-4 rounded-lg hover:bg-sky-500 hover:text-white focus:bg-sky-500 focus:text-white transition-colors font-medium cursor-pointer">
          Baixar CV
        </button>
      </div>
    </section>
  );
}
