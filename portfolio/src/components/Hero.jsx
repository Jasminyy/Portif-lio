export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <div>

          <span className="text-pink-500 font-medium">
            ✦ Desenvolvedora Full Stack
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Olá, eu sou
            <br />
            <span className="text-pink-500">
              Jasminy
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
            Finalizando o curso de Informática para Internet e
            desenvolvendo aplicações modernas utilizando React,
            Node.js, Express e MySQL.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#projetos"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl font-medium"
            >
              Ver Projetos
            </a>

            <a
              href="#contato"
              className="border border-zinc-700 hover:border-pink-500 transition px-6 py-3 rounded-xl"
            >
              Contato
            </a>

          </div>

        </div>

        {/* Card */}

        <div className="flex justify-center">

          <div className="w-full max-w-md bg-[#111118] border border-zinc-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <pre className="text-sm overflow-x-auto">

{`const jasminy = {
  role: "Full Stack",
  course: "Informática para Internet",

  skills: [
    "React",
    "Node.js",
    "MySQL",
    "Tailwind"
  ],

  projects: 10,

  status: "Learning & Building"
};`}
            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}