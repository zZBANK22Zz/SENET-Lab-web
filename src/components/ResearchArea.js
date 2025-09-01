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
    <section id="research" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Research Areas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring innovative solutions in software engineering and network
            technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4 lg:mb-6">
                {area.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
