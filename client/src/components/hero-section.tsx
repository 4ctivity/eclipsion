import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  const serverIP = "eclipsion.sytes.net";

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      toast({
        title: "¡IP Copiada!",
        description: "La dirección del servidor ha sido copiada al portapapeles.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar la IP del servidor.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-float">
        <div className="mb-8">
          <img 
            src="https://i.imgur.com/YnFydYR.png" 
            alt="Eclipsion Server Logo" 
            className="w-32 h-32 mx-auto rounded-2xl shadow-2xl animate-pulse-glow"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-6 gradient-text">
          ECLIPSION
        </h1>
        

        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Cada aventura es única. Elige tu destino y forja tu leyenda en mundos 
          llenos de magia y misterio.
        </p>
        
        <div className="server-ip-box px-6 py-4 rounded-xl mb-8 inline-block">
          <p className="text-sm text-gray-400 mb-1">Dirección del Servidor:</p>
          <p className="text-2xl font-poppins font-bold text-primary-orange">
            {serverIP}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={copyServerIP}
            className="btn-primary font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <i className="fas fa-copy mr-2"></i>Copiar IP
          </button>
          <a 
            href="https://discord.gg/FFaaH4t6Rp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            <i className="fab fa-discord mr-2"></i>Únete a Discord
          </a>
        </div>
      </div>
    </section>
  );
}
