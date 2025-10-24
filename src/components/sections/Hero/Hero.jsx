import davy from "../../../assets/davy.jpg";
import Button from "../../ui/Button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-20 flex flex-col items-center justify-center px-6 animate-fade-in-up"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-6xl mx-auto h-full">
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

        <div className="flex w-full flex-col mt-2 gap-4 sm:flex-row sm:justify-center">
          <Button
            style={
              "flex justify-center items-center bg-emerald-500 text-white px-8 py-4 gap-2 rounded-lg text-lg hover:bg-emerald-600 transition-colors font-medium focus:bg-emerald-600 cursor-pointer"
            }
            text={"Ver Projetos"}
            action={() => {
              document.getElementById("projects").scrollIntoView();
            }}
            icon={<HiOutlineFolder />}
          />
          <Button
            style={
              "flex justify-center items-center border border-sky-500 text-sky-500 px-8 py-4 gap-2 text-lg rounded-lg hover:bg-sky-500 hover:text-white focus:bg-sky-500 focus:text-white transition-colors font-medium cursor-pointer"
            }
            text={"Ver GitHub"}
            action={() => {
              window.open("https://github.com/DavyAndrade", "_blank");
            }}
            icon={<FaGithub />}
          />
        </div>
      </div>
    </section>
  );
}
