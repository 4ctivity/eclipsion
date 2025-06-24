export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Mejoras de Rendimiento',
      excerpt: 'Hemos optimizado el servidor para ofrecer una experiencia más fluida. Reducción del lag, mejor estabilidad y nuevas características de calidad de vida que mejorarán significativamente tu experiencia de juego.',
      category: 'Información',
      categoryColor: 'bg-blue-600',
      date: 'Hace 2 semanas'
    }
  ];

  return (
    <section id="noticias" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-primary-orange">
            Noticias y Actualizaciones
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las últimas novedades, eventos y mejoras del servidor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {news.map((article) => (
            <article 
              key={article.id}
              className="bg-dark-card p-6 rounded-2xl border border-gray-700 hover:border-primary-orange transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {article.category}
                </span>
                <span className="text-gray-400 text-sm">{article.date}</span>
              </div>
              
              <h3 className="text-xl font-poppins font-bold mb-3 text-white">
                {article.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {article.excerpt}
              </p>
              
              <button className="text-primary-orange hover:text-accent-orange transition-colors duration-300 font-semibold">
                Leer más <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
