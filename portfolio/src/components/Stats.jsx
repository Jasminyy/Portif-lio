const stats = [
  {
    value: "10+",
    label: "Projetos",
  },
  {
    value: "15+",
    label: "Tecnologias",
  },
  {
    value: "100+",
    label: "Commits",
  },
  {
    value: "100%",
    label: "Dedicação",
  },
];

export default function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111118] border border-zinc-800 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-pink-500">
                {stat.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}