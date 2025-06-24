import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [playerCount, setPlayerCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch('https://api.mcsrvstat.us/2/eclipsion.sytes.net');
        const data = await response.json();
        
        if (data.online) {
          setPlayerCount(data.players.online || 0);
        } else {
          setPlayerCount(0);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching player count:', error);
        setPlayerCount(0);
        setLoading(false);
      }
    };

    // Fetch immediately
    fetchPlayerCount();
    
    // Update every 60 seconds
    const interval = setInterval(fetchPlayerCount, 60000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-10 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/YnFydYR.png" 
              alt="Eclipsion Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="ml-3 text-2xl font-poppins font-bold text-primary-orange">
              ECLIPSION
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location === '/' ? 'text-primary-orange' : 'text-gray-300 hover:text-primary-orange'
                }`}
              >
                <i className="fas fa-home mr-2"></i>Inicio
              </Link>
              <Link 
                href="/modalidades"
                className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location === '/modalidades' ? 'text-primary-orange' : 'text-gray-300 hover:text-primary-orange'
                }`}
              >
                <i className="fas fa-gamepad mr-2"></i>Modalidades
              </Link>
              <Link 
                href="/rangos"
                className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location === '/rangos' ? 'text-primary-orange' : 'text-gray-300 hover:text-primary-orange'
                }`}
              >
                <i className="fas fa-crown mr-2"></i>Rangos
              </Link>
              <Link 
                href="/tienda"
                className={`nav-link px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  location === '/tienda' ? 'text-primary-orange' : 'text-gray-300 hover:text-primary-orange'
                }`}
              >
                <i className="fas fa-shopping-cart mr-2"></i>Tienda
              </Link>
              <a 
                href="https://discord.gg/FFaaH4t6Rp"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link px-3 py-2 text-sm font-medium text-gray-300 hover:text-primary-orange transition-all duration-300"
              >
                <i className="fab fa-discord mr-2"></i>Discord
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-dark-card px-3 py-2 rounded-lg">
              <div className={`w-3 h-3 rounded-full mr-2 ${
                loading ? 'bg-yellow-500 animate-pulse' : 
                playerCount > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <span className="text-sm font-medium">
                {loading ? 'Cargando...' : `${playerCount} jugadores`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
