  const researchAreas = [
  {
    id: "software-engineering",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    title: "Software Engineering",
    shortDescription:
      "Advanced methodologies and best practices for software development.",
    detailedDescription:
      "Our research in Software Engineering covers the entire lifecycle of software development, focusing on modern methodologies, design patterns, and scalable system architecture. We explore how to build reliable, maintainable, and efficient software systems in an increasingly complex digital landscape.",
    publications: 12,
    funding: "1.5M baht",
    currentProjects: [
      "Agile Transformation in Large Enterprises",
      "Microservices Architecture Patterns",
      "Sustainable Software Development Practices",
    ],
  },
  {
    id: "software-testing",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
      </svg>
    ),
    title: "Software Testing",
    shortDescription:
      "Comprehensive testing strategies and automated quality assurance.",
    detailedDescription:
      "We focus on enhancing software quality through rigorous testing strategies and automated frameworks. Our work includes research into test-driven development, continuous integration/continuous deployment (CI/CD) pipelines, and advanced debugging techniques to ensure robust software delivery.",
    publications: 8,
    funding: "800k baht",
    currentProjects: [
      "Automated Security Testing for Web Apps",
      "Performance Regression Testing Frameworks",
      "AI-driven Test Case Generation",
    ],
  },
  {
    id: "network",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,21H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7L2,12V10H7V5A2,2 0 0,1 9,3H17M17,5H9V15H17V5Z" />
      </svg>
    ),
    title: "Network",
    shortDescription:
      "Network protocols, infrastructure, and distributed systems.",
    detailedDescription:
      "Our Network research area delves into the infrastructure of modern communication. We study network protocols, optimize performance for distributed systems, and design scalable architectures for cloud and edge computing, ensuring reliable and fast data transmission.",
    publications: 15,
    funding: "2.4M baht",
    currentProjects: [
      "Edge Computing Resource Optimization",
      "Next-gen IoT Communication Protocols",
      "SDN-enabled Network Management",
    ],
  },
];

export default researchAreas;