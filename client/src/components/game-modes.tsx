export default function GameModes() {
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
        'Eventos semanales'
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
        'Ranking de jugadores'
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
        'Sistema de killstreaks'
      ]
    }
  ];

  return (
    <section id="modalidades" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-primary-orange">
            Modalidades Épicas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada aventura es única. Elige tu destino y forja tu leyenda en mundos 
            llenos de magia y misterio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {gameModes.map((mode) => (
            <div key={mode.id} className="mode-card p-8 rounded-2xl transition-all duration-300 hover:scale-105">
              <img 
                src={mode.image} 
                alt={`${mode.name} Mode`} 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <div className="flex items-center mb-4">
                <i className={`${mode.icon} ${mode.iconColor} text-2xl mr-3`}></i>
                <h3 className="text-2xl font-poppins font-bold text-white">{mode.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                {mode.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {mode.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-400">
                    <i className={`fas fa-check ${mode.iconColor} mr-2`}></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full ${mode.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300`}>
                <i className="fas fa-play mr-2"></i>Jugar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
