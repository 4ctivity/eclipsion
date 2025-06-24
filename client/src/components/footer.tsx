export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 bg-black bg-opacity-80 py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://i.imgur.com/YnFydYR.png" 
                alt="Eclipsion Logo" 
                className="h-12 w-12 rounded-lg"
              />
              <span className="ml-3 text-3xl font-poppins font-bold text-primary-orange">
                ECLIPSION
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              El servidor de Minecraft más mágico y emocionante. Únete a nuestra 
              comunidad y vive aventuras épicas en mundos llenos de misterio.
            </p>
            <p className="text-sm text-gray-400">
              IP del Servidor: <span className="text-primary-orange font-semibold">eclipsion.sytes.net</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('modalidades')}
                  className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
                >
                  Modalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('rangos')}
                  className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
                >
                  Rangos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('noticias')}
                  className="text-gray-300 hover:text-primary-orange transition-colors duration-300"
                >
                  Noticias
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-white">Comunidad</h4>
            <div className="space-y-3">
              <a 
                href="https://discord.gg/FFaaH4t6Rp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-orange transition-colors duration-300"
              >
                <i className="fab fa-discord mr-3 text-xl"></i>
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Eclipsion Server. Todos los derechos reservados. | Minecraft es una marca registrada de Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
}
