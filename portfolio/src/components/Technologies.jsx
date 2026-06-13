const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Vite",
];

const backend = [
  "JavaScript",
  "Node.js",
  "Express",
  "MySQL",
  "JWT",
  "Bcrypt",
  "Cors",
  "Dotenv",
];

const tools = [
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
  "VS Code",
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Tecnologias
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <TechCard title="Frontend" items={frontend} />
          <TechCard title="Backend" items={backend} />
          <TechCard title="Ferramentas" items={tools} />

        </div>

      </div>
    </section>
  );
}

function TechCard({ title, items }) {
  return (
    <div className="bg-[#111118] border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-2xl font-semibold mb-6 text-pink-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-xl bg-zinc-900"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}