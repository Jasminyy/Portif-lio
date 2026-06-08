export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#07070A]/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">
          Jasminy
          <span className="text-pink-500">&lt;/&gt;</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li>
            <a href="#sobre">Sobre</a>
          </li>

          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>

          <li>
            <a href="#projetos">Projetos</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}