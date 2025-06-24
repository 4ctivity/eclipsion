import AnimatedBackground from "@/components/animated-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function StorePage() {
  const storeCategories = [
    {
      id: 'ranks',
      name: 'Rangos VIP',
      icon: 'fas fa-crown',
      color: 'bg-primary-orange',
      description: 'Desbloquea privilegios exclusivos y beneficios únicos',
      items: ['Lunar - $1.50', 'Nebula - $3.50', 'Stellar - $5.00', 'Eclipsion - $7.50']
    },
    {
      id: 'cosmetics',
      name: 'Cosméticos',
      icon: 'fas fa-palette',
      color: 'bg-purple-600',
      description: 'Personaliza tu apariencia con efectos y partículas',
      items: ['Trails de partículas', 'Efectos de muerte', 'Pets especiales', 'Auras brillantes']
    },
    {
      id: 'tools',
      name: 'Herramientas',
      icon: 'fas fa-tools',
      color: 'bg-blue-600',
      description: 'Equipamiento avanzado para facilitar tu gameplay',
      items: ['Picos encantados', 'Armaduras especiales', 'Armas únicas', 'Bloques raros']
    }
  ];

  const featuredItems = [
    {
      name: 'Paquete Starter',
      price: '$4.99',
      originalPrice: '$8.99',
      discount: '45% OFF',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      description: 'Kit completo para nuevos jugadores',
      features: ['Rango Lunar incluido', '200 Tokens', 'Kit de inicio', 'Protección de base']
    },
    {
      name: 'Paquete Premium',
      price: '$12.99',
      originalPrice: '$19.99',
      discount: '35% OFF',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      description: 'La experiencia completa de Eclipsion',
      features: ['Rango Stellar incluido', '1000 Tokens', 'Kit premium', 'Cosméticos exclusivos']
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
              Tienda del Servidor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mejora tu experiencia de juego con nuestros productos premium. 
              Desde rangos VIP hasta cosméticos únicos y herramientas especiales.
            </p>
          </div>



          {/* Store Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-poppins font-bold mb-8 text-center text-white">
              Categorías de Productos
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {storeCategories.map((category) => (
                <div key={category.id} className="bg-dark-card p-6 rounded-2xl border border-gray-700 hover:border-primary-orange transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold mb-3 text-white">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="text-xs text-gray-400">
                        • {item}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="https://eclipsionstore.tebex.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 inline-block text-center"
                  >
                    Ver Productos
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-poppins font-bold mb-6 text-center text-primary-orange">
              Métodos de Pago Seguros
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <i className="fab fa-paypal text-4xl text-blue-500 mb-2"></i>
                <p className="text-gray-300">PayPal</p>
              </div>
              <div>
                <i className="fab fa-cc-visa text-4xl text-blue-600 mb-2"></i>
                <p className="text-gray-300">Visa</p>
              </div>
              <div>
                <i className="fab fa-cc-mastercard text-4xl text-red-500 mb-2"></i>
                <p className="text-gray-300">Mastercard</p>
              </div>
              <div>
                <i className="fab fa-bitcoin text-4xl text-yellow-500 mb-2"></i>
                <p className="text-gray-300">Criptomonedas</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6">
              Todas las transacciones están protegidas con cifrado SSL de 256 bits
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}