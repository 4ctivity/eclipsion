import AnimatedBackground from "@/components/animated-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function RanksPage() {
  const ranks = [
    {
      id: 'lunar',
      name: 'Lunar',
      price: '$1.50',
      icon: 'fas fa-moon',
      color: 'blue',
      popular: false,
      vip: true,
      features: [
        'Prefix especial [Lunar]',
        'Kit básico diario',
        'Acceso a /sethome (1 casa)',
        'Chat con colores',
        'Acceso prioritario al servidor',
        'Soporte técnico básico'
      ]
    },
    {
      id: 'nebula',
      name: 'Nebula',
      price: '$3.50',
      icon: 'fas fa-star',
      color: 'purple',
      popular: false,
      vip: true,
      features: [
        'Todo de Lunar +',
        'Prefix especial [Nebula]',
        'Kit mejorado diario',
        '3 homes disponibles',
        'Acceso a /fly (30 segundos)',
        'Comandos de teletransporte'
      ]
    },
    {
      id: 'stellar',
      name: 'Stellar',
      price: '$5.00',
      icon: 'fas fa-star',
      color: 'yellow',
      popular: true,
      vip: true,
      features: [
        'Todo de Nebula +',
        'Prefix especial [Stellar]',
        'Kit premium diario',
        '5 homes disponibles',
        'Acceso a /fly (2 minutos)',
        'Comandos VIP avanzados'
      ]
    },
    {
      id: 'eclipsion',
      name: 'Eclipsion',
      price: '$7.50',
      icon: 'fas fa-crown',
      color: 'orange',
      popular: false,
      vip: 'plus',
      features: [
        'Todo de Stellar +',
        'Prefix especial [Eclipsion]',
        'Kit épico diario',
        'Homes ilimitados',
        '/fly ilimitado',
        'Acceso total a comandos VIP'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        border: 'border-blue-500',
        hover: 'hover:border-blue-500',
        bg: 'bg-blue-500',
        button: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-400',
        check: 'text-blue-400'
      },
      purple: {
        border: 'border-purple-500',
        hover: 'hover:border-purple-500',
        bg: 'bg-purple-500',
        button: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-400',
        check: 'text-purple-400'
      },
      yellow: {
        border: 'border-yellow-500',
        hover: 'hover:border-yellow-500',
        bg: 'bg-yellow-500',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        text: 'text-yellow-400',
        check: 'text-yellow-400'
      },
      orange: {
        border: 'border-primary-orange',
        hover: 'hover:border-accent-orange',
        bg: 'bg-primary-orange',
        button: 'bg-primary-orange hover:bg-accent-orange',
        text: 'text-primary-orange',
        check: 'text-primary-orange'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-primary-orange">
              Rangos Disponibles
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desbloquea beneficios exclusivos y características especiales que elevarán 
              tu experiencia de juego a otro nivel. Cada rango incluye ventajas únicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ranks.map((rank) => {
              const colors = getColorClasses(rank.color);
              return (
                <div 
                  key={rank.id} 
                  className={`rank-card bg-dark-card p-8 rounded-2xl border-2 border-gray-700 ${colors.hover} transition-all duration-300 relative`}
                >
                  {rank.popular && !rank.vip && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {rank.vip === true && !rank.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        VIP
                      </span>
                    </div>
                  )}
                  
                  {rank.vip === true && rank.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {rank.vip === 'plus' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        VIP+
                      </span>
                    </div>
                  )}
                  
                  <div className={`flex items-center justify-center mb-6 ${rank.popular || rank.vip ? 'mt-4' : ''}`}>
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center ${rank.id === 'eclipsion' ? 'animate-pulse-glow' : ''}`}>
                      <i className={`${rank.icon} text-2xl ${rank.color === 'yellow' ? 'text-black' : 'text-white'}`}></i>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-poppins font-bold text-center mb-2 ${colors.text}`}>
                    {rank.name}
                  </h3>
                  <p className={`text-3xl font-bold text-center mb-6 ${colors.text}`}>
                    {rank.price}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {rank.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <i className={`fas fa-check ${colors.check} mr-3`}></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="https://eclipsionstore.tebex.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full ${colors.button} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center`}
                  >
                    <i className="fas fa-shopping-cart mr-2"></i>Obtener
                  </a>
                </div>
              );
            })}
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-700 text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4 text-primary-orange">
              Especificaciones Completas
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Para conocer todas las especificaciones detalladas de cada rango, 
              visita nuestra tienda oficial donde encontrarás información completa.
            </p>
            <a 
              href="https://eclipsionstore.tebex.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-orange hover:bg-accent-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-block transform hover:scale-105"
            >
              <i className="fas fa-external-link-alt mr-2"></i>Visitar Tienda Oficial
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}