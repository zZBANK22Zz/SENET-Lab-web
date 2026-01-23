import ResearchAreaData from "@/data/ResearchArea/ResearchAreaData";

export default function ResearchAreas() {
  const Research = ResearchAreaData;

  const researchAreas = [
    {
      icon: Research[0].icon,
      title: Research[0].title,
      description: Research[0].description,
    },
    {
      icon: Research[1].icon,
      title: Research[1].title,
      description: Research[1].description,
    },
    {
      icon: Research[2].icon,
      title: Research[2].title,
      description: Research[2].description,
    },
  ];

  return (
    <section id="research" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Research <span className="text-gradient-official">Areas</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            We explore innovative solutions at the intersection of software engineering 
            and network technologies to solve real-world challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="card-base p-8 lg:p-10 group"
            >
              <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-deep mb-8 group-hover:bg-gradient-official group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                {area.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-4 group-hover:text-primary-deep transition-colors">
                {area.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {area.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-border-light flex items-center text-sm font-semibold text-primary-deep opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more 
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
