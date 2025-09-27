import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-gray-800 to-gray-900 min-h-screen pt-20 flex items-center justify-center"
      id="home"
    >
      <h1 className="text-5xl font-bold text-center">
        Olá, eu sou <span className="bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">Davy Andrade</span>
      </h1>
    </section>
  );
}
