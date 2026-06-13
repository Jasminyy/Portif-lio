import Counter from "./Counter";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projetos",
  },
  {
    value: 15,
    suffix: "+",
    label: "Tecnologias",
  },
  {
    value: 100,
    suffix: "+",
    label: "Commits",
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedicação",
  },
];

export default function Stats() {
  return (
    <section className="py-15 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111118] border border-zinc-800 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-pink-500">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />
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