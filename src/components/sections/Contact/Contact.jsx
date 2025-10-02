import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="min-h-screen py-20 flex items-center justify-center bg-black w-full"
      id="contact"
    >
      {/* Container */}
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto w-full gap-16 px-6">
        {/* Título da Sessão */}
        <h2 className="text-4xl font-bold text-center">
          Entre em{" "}
          <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Contato
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">Vamos conversar!</h3>
            <p className="text-lg text-gray-300">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Entre em contato comigo!
            </p>

            <div className="flex flex-col gap-4">
              <ContactItem
                icon="📧"
                title="Email"
                info="davyandrade.dev@gmail.com"
                color="bg-emerald-500"
              />
              <ContactItem
                icon="📱"
                title="Telefone"
                info="+55 21 99166-4923"
                color="bg-sky-500"
              />
              <ContactItem
                icon="🌍"
                title="Localização"
                info="Rio de Janeiro, Brasil"
                color="bg-gradient-to-r from-emerald-500 to-sky-500"
              />
            </div>
          </article>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
