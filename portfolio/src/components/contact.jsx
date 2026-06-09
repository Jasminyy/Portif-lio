export default function Contact() {
  return (
    <section id="contato" className="py-15 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Deseja conversar?
        </h2>

        <p className="text-zinc-400 mb-10">
          Estou sempre aberta a novos projetos,
          oportunidades e colaborações.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl">
            GitHub
          </button>

          <button className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl">
            LinkedIn
          </button>

          <button className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl">
            Email
          </button>

        </div>

      </div>
    </section>
  );
}