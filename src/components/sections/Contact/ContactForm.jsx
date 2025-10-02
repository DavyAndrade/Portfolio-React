import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' ou 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const form = e.target;

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Email enviado:", result.text);
      setMessage("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setMessageType("success");
      form.reset(); // Limpa o formulário
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      setMessage("Erro ao enviar mensagem. Tente novamente mais tarde.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-md"
      id="contact-form"
    >
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="name" className="font-medium text-sm">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
          disabled={isLoading}
          className="bg-gray-800 px-4 py-4 rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <label htmlFor="email" className="font-medium text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
          required
          disabled={isLoading}
          className="bg-gray-800 px-4 py-4 rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <label htmlFor="message" className="font-medium text-sm">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Sua mensagem..."
          required
          disabled={isLoading}
          className="bg-gray-800 px-4 py-4 rounded-lg border border-gray-700 resize-none focus:border-emerald-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </button>
      {/* Feedback Message */}
      {message && (
        <div
          className={`p-4 rounded-lg text-sm ${
            messageType === "success"
              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
