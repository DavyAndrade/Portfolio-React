import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col items-center justify-center py-8 px-6 gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col w-full items-center justify-center md:flex-row md:justify-between gap-8">
        <h3 className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent text-2xl font-bold">
          Davy Andrade
        </h3>

        <ul className="flex gap-6">
          <li className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
            <a
              href="https://www.linkedin.com/in/davy-andrade"
              target="_blank"
              className="text-2xl p-2 rounded-full text-black hover:text-gray-300 transition-colors"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="bg-sky-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
            <a
              href="https://github.com/DavyAndrade"
              target="_blank"
              className="text-2xl p-2 rounded-full text-black hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
          </li>
          <li className="bg-gradient-to-r from-emerald-500 to-sky-500 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-colors">
            <a
              href="https://x.com/davyandrade_dev"
              className="text-2xl p-2 rounded-full text-black hover:text-gray-300 transition-colors"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex w-full items-center justify-center border-t border-gray-800">
        <p className="text-gray-400 pt-8">
          &copy; 2025 Davy Andrade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
