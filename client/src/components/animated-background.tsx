import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: number;
}

interface Particle {
  id: number;
  left: string;
  size: string;
  delay: number;
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars: Star[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 8 + 4}px`,
      delay: Math.random() * 3,
    }));

    // Generate random particles
    const generatedParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 8}px`,
      delay: Math.random() * 20,
    }));

    setStars(generatedStars);
    setParticles(generatedParticles);
  }, []);

  return (
    <>
      {/* Animated Background Gradient */}
      <div className="animated-bg" />
      
      {/* Minecraft Background Image */}
      <div 
        className="minecraft-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Floating Stars and Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particle"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
