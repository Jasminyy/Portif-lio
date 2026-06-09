export default function About() {
  return (
    <section id="sobre" className=" px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#111118] border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              Minha Jornada
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Atualmente estou finalizando o curso de
              Informática para Internet e desenvolvendo
              aplicações Full Stack - Backend, Frontend e, é claro, responsividade. Com uma paixão por tecnologia e
              um compromisso com a excelência, busco criar
              soluções inovadoras e eficientes.
            </p>
          </div>

          <div className="bg-[#111118] border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              Objetivos
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Continuar evoluindo como desenvolvedora,
              criar projetos cada vez mais completos e
              aprender novas tecnologias.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}