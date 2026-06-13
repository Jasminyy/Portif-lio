const projects = [
  {
    name: "Sloth Bee",
    description: "Marketplace automotivo desenvolvido com React, Node.js e MySQL.",
    link: "https://sloth-bee.vercel.app",
  },
  {
    name: "Drive Elite",
    description: "Plataforma automotiva desenvolvida durante meus estudos.",
    link: "#",
  },
  {
    name: "Comunidade Drive Elite",
    description: "Comunidade online voltada para o universo automotivo.",
    link: "#",
  },
  {
    name: "Coffee House",
    description: "Sistema para cafeteria desenvolvido com foco em experiência do usuário.",
    link: "#",
  },
  {
    name: "Lotus Oriental",
    description: "Site institucional moderno para restaurante oriental.",
    link: "https://lotus-oriental.vercel.app",
  },
  {
    name: "Frases do Dia",
    description: "Projeto desenvolvido durante meus estudos.",
    link: "#",
  },
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
              key={project.name}
              className="
                bg-[#111118]
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                hover:border-pink-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(255,77,166,0.25)]
                transition-all duration-300
              "
            >
              <div className="h-48 bg-zinc-900" />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.name}
                </h3>

                <p className="text-zinc-400 mb-5">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:text-pink-400"
                >
                  Ver Projeto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}