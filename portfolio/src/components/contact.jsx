export default function Contact() {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Vamos conversar?
        </h2>

        <p className="text-zinc-400 mb-10">
          Estou sempre aberta a novos projetos,
          oportunidades e colaborações.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="px-6 py-3 rounded-xl bg-pink-500">
            GitHub
          </button>

          <button className="px-6 py-3 rounded-xl border border-zinc-700">
            LinkedIn
          </button>

          <button className="px-6 py-3 rounded-xl border border-zinc-700">
            Email
          </button>

        </div>

      </div>
    </section>
  );
}