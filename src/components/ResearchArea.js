export default function ResearchAreas() {
  const researchAreas = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3v3.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5zM4 8v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z"/>
        </svg>
      ),
      title: "Software Architecture",
      description: "Advanced patterns and methodologies for scalable software systems design and implementation."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Network Security",
      description: "Cybersecurity protocols and threat detection systems for modern network infrastructures."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "AI-Driven Testing",
      description: "Machine learning approaches for automated software testing and quality assurance."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z"/>
        </svg>
      ),
      title: "Cloud Computing",
      description: "Distributed systems and cloud-native application development frameworks."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H9V16H4V4H20V9H22V4A2,2 0 0,0 20,2Z"/>
        </svg>
      ),
      title: "Performance Analysis",
      description: "Network performance optimization and software system efficiency measurement tools."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
        </svg>
      ),
      title: "IoT Systems",
      description: "Internet of Things protocols and embedded software development methodologies."
    }
  ]

  return (
    <section id="research" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Research Areas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring innovative solutions in software engineering and network technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
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
  )
}