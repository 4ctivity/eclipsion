import AnimatedBackground from "@/components/animated-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function GameModesPage() {
  const gameModes = [
    {
      id: 'survival',
      name: 'Survival',
      icon: 'fas fa-tree',
      iconColor: 'text-green-500',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Construye, explora y sobrevive en un mundo lleno de desafíos. Recolecta recursos, crea herramientas y construye tu hogar ideal.',
      features: [
        'Protección de terrenos',
        'Economía balanceada',
        'Eventos semanales',
        'Sistema de casas',
        'Mercado de jugadores',
        'Misiones diarias'
      ]
    },
    {
      id: 'kitmap',
      name: 'Kitmap',
      icon: 'fas fa-sword',
      iconColor: 'text-red-500',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Combate estratégico con kits predefinidos. Forma facciones, controla territorios y domina el mapa con tu equipo.',
      features: [
        'Kits balanceados',
        'Sistema de facciones',
        'Ranking de jugadores',
        'Control de territorios',
        'Guerras programadas',
        'Recompensas por conquista'
      ]
    },
    {
      id: 'kitpvp',
      name: 'KitPvP',
      icon: 'fas fa-bolt',
      iconColor: 'text-yellow-500',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Acción pura y combate rápido. Elige tu kit favorito y demuestra tus habilidades en batallas intensas.',
      features: [
        'Combate instantáneo',
        'Múltiples arenas',
        'Sistema de killstreaks',
        'Kits personalizables',
        'Torneos semanales',
        'Tabla de líderes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-primary-orange">
              Modalidades de Juego
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestras emocionantes modalidades de juego. Cada una ofrece una experiencia única 
              llena de desafíos, aventuras y diversión sin límites.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {gameModes.map((mode) => (
              <div key={mode.id} className="mode-card p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src={mode.image} 
                  alt={`${mode.name} Mode`} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="flex items-center mb-4">
                  <i className={`${mode.icon} ${mode.iconColor} text-3xl mr-3`}></i>
                  <h2 className="text-3xl font-poppins font-bold text-white">{mode.name}</h2>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {mode.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Características:</h3>
                  {mode.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <i className={`fas fa-check ${mode.iconColor} mr-3`}></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                

              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-primary-orange">
                ¿Listo para la Aventura?
              </h3>
              <p className="text-gray-300 mb-6">
                Únete a miles de jugadores en eclipsion.sytes.net y vive experiencias únicas 
                en cada modalidad de juego.
              </p>
              <div className="server-ip-box px-6 py-4 rounded-xl mb-6 inline-block">
                <p className="text-sm text-gray-400 mb-1">Dirección del Servidor:</p>
                <p className="text-2xl font-poppins font-bold text-primary-orange">
                  eclipsion.sytes.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}