export default function Contact() {
  return (
    <section id="contato" className="py-15 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Entre em contato:
        </h2>

        <p className="text-zinc-400 mb-10">
          Estou sempre aberta a novos projetos,
          oportunidades e colaborações.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/Jasminyy"
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jasminy-mendes-a56153396/"
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="mailto:minymendes15@gmail.com"
            className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl"
          >
            Email
          </a>

        </div>

      </div>
    </section>
  );
}