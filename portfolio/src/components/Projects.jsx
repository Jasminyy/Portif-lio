const projects = [
  "Sloth Bee",
  "Drive Elite",
  "Comunidade Drive Elite",
  "Coffee House",
  "Lotus Oriental",
  "Outros Projetos",
];

export default function Projects() {
  return (
    <section id="projetos" className="py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project}
              className="bg-[#111118] border border-zinc-800 rounded-3xl overflow-hidden hover:border-pink-500 transition"
            >

              <div className="h-48 bg-zinc-900" />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project}
                </h3>

                <p className="text-zinc-400 mb-5">
                  Projeto desenvolvido durante meus estudos.
                </p>

                <button className="text-pink-500">
                  Ver Projeto →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}