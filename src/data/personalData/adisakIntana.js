const adisakIntana = {
  personalInfo: {
    id: "adisak-intana",
    firstName: "Adisak", 
    lastName: "Intana",
    fullName: "Asst.Prof.Dr. Adisak Intana",
    title: "Asst.Prof.Dr.",
    position: "Assistant Professor & Lab Co-Director",
    department: "Software Engineering",
    email: "adisak.i(at)phuket.psu.ac.th",
    phone: "+66 76-27(6711)",
    officeRoom: "Room 401, Engineering Building",
    profileImage: "/images/team/adisak-intana.jpg",
    bio: "Dr. Adisak Intana is an Assistant Professor and Co-Director of SEnet Research Lab, specializing in software architecture, cloud computing, and distributed systems. He leads research initiatives in modern software engineering practices with particular focus on test case generation, requirement engineering, and wireless sensor networks. Dr. Adisak is a certified Data Scientist (Level 5) by Thailand Professional Qualification Institute, bringing advanced data analytics expertise to software engineering research.",
    researchInterests: [
      "Software Testing & Quality Assurance",
      "Requirement Engineering", 
      "Test Case Generation",
      "Wireless Sensor Networks",
      "Software Architecture",
      "Formal Methods",
      "Machine Learning in Software Engineering",
      "Data Science & Analytics",
      "Big Data in Software Engineering",
      "Statistical Software Testing"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering",
        institution: "Chulalongkorn University", 
        year: "2018",
        specialization: "Software Engineering"
      },
      {
        degree: "M.Eng. in Computer Engineering",
        institution: "King Mongkut's University of Technology Thonburi",
        year: "2014"
      },
      {
        degree: "B.Eng. in Computer Engineering", 
        institution: "Kasetsart University",
        year: "2012"
      }
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/adisak-intana",
      googleScholar: "https://scholar.google.com/citations?user=adisakintana", 
      researchGate: "https://researchgate.net/profile/Adisak-Intana"
    }
  },

  // International Journal Articles
  publications: [
    {
      id: 1,
      title: "An Automated Impact Analysis Approach for Test Cases based on Changes of Use Case based Requirement Specifications",
      authors: ["A. Intana", "K. Laksarn", "T. Srisuksai"],
      leadAuthor: true,
      journal: "International Journal of Advanced Computer Science and Applications (IJACSA)",
      year: "2021",
      month: "May",
      volume: "12",
      issue: "5", 
      pages: "293-301",
      doi: "10.14569/IJACSA.2021.0120535",
      category: "software-testing",
      abstract: "This paper presents an automated impact analysis approach for test cases based on changes of use case based requirement specifications.",
      keywords: ["Test Case", "Impact Analysis", "Requirement Engineering", "Use Case", "Software Testing"],
      status: "published",
      type: "international-journal",
      impactFactor: 2.4,
      quartile: "Q3"
    },
    {
      id: 2,
      title: "Customer Needs Classification from Review Social Media using Bag of Concepts Representation", 
      authors: ["A. Laksarn", "A. Intana", "P. Thanapitak"],
      leadAuthor: false,
      journal: "International Journal on Advanced Science, Engineering and Information Technology (IJASEIT)",
      year: "2023",
      month: "August",
      volume: "13",
      issue: "4",
      pages: "1436-1445", 
      doi: "10.18517/ijaseit.13.4.18142",
      category: "data-mining",
      abstract: "This paper proposes a customer needs classification approach from social media reviews using bag of concepts representation.",
      keywords: ["Customer Needs", "Classification", "Social Media", "Bag of Concepts", "Text Mining"],
      status: "published",
      type: "international-journal",
      impactFactor: 1.8,
      quartile: "Q4"
    },
    {
      id: 3,
      title: "An Approach of Test Case Generation with Software Requirement Ontology",
      authors: ["A. Intana", "K. Tantayakul", "K. Laksarn", "S. Chanprach"],
      leadAuthor: true,
      journal: "International Journal of Advanced Computer Science and Applications (IJACSA)", 
      year: "2023",
      month: "August",
      volume: "14",
      issue: "8",
      pages: "1009-1014",
      doi: "10.14569/IJACSA.2023.0140893",
      category: "software-testing",
      abstract: "This work presents an approach for test case generation using software requirement ontology to improve testing effectiveness.",
      keywords: ["Test Case Generation", "Software Requirements", "Ontology", "Software Testing"],
      status: "published", 
      type: "international-journal",
      impactFactor: 2.4,
      quartile: "Q3"
    },
    {
      id: 4,
      title: "A formal co-optimization approach for wireless sensor network development",
      authors: ["A. Intana", "M. Pongpattanit", "G. K. Manines"],
      leadAuthor: true,
      journal: "Electronic Communications of the EASST",
      year: "2019", 
      month: "December",
      volume: "76",
      issue: "1",
      pages: "1-16",
      doi: "10.14279/tuj.eceasst.76.1089",
      category: "wireless-networks",
      abstract: "This paper presents a formal co-optimization approach for wireless sensor network development using mathematical modeling.",
      keywords: ["Wireless Sensor Networks", "Formal Methods", "Optimization", "Network Development"],
      status: "published",
      type: "international-journal", 
      impactFactor: 1.2,
      quartile: "Q4"
    }
  ],

  // International Conference Proceedings  
  conferenceProceedings: [
    {
      id: 5,
      title: "An N-Based Approach for Detecting Ambiguity of Thai Software Requirements Specifications",
      authors: ["A. Intana", "K. Laksarn", "P. Ruengtam", "K. Patiwattana", "T. Dumlikieat"],
      leadAuthor: true,
      conference: "International Joint Conference on Computer Science and Software Engineering (JCSSE)",
      year: "2014",
      month: "May",
      pages: "108-113",
      doi: "10.1109/JCSSE.2014.6841863",
      location: "Khon Kaen, Thailand", 
      category: "requirement-engineering",
      abstract: "This paper proposes an N-based approach for detecting ambiguity in Thai software requirements specifications.",
      keywords: ["Requirements Engineering", "Ambiguity Detection", "Thai Language", "Software Requirements"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 6, 
      title: "STAT-Test: An Automatic Test Case Generation Framework for State Transition Testing",
      authors: ["A. Intana", "A. Soontronsakkasem"],
      leadAuthor: true,
      conference: "International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
      year: "2022",
      month: "May", 
      pages: "1-5",
      doi: "10.1109/ECTI-CON54298.2022.9795168",
      location: "Phuket, Thailand",
      category: "software-testing",
      abstract: "STAT-Test is an automatic test case generation framework specifically designed for state transition testing.",
      keywords: ["Test Case Generation", "State Transition Testing", "Automation", "Software Testing Framework"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 7,
      title: "The Development of Burma Event Ontology for Sport Tourism in Thailand",
      authors: ["P. Senivongse", "A. Intana"],
      leadAuthor: false,
      conference: "International Technical Conference on Circuits/Systems, Computers and Communications (ITC-CSCC)",
      year: "2021", 
      month: "June",
      pages: "1-4",
      doi: "10.1109/ITC-CSCC51141.2021.9501419",
      location: "Jeju, South Korea",
      category: "ontology-engineering", 
      abstract: "This work presents the development of Burma event ontology specifically designed for sport tourism applications in Thailand.",
      keywords: ["Ontology Engineering", "Sport Tourism", "Event Management", "Knowledge Representation"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 8,
      title: "A Formal Modelling Framework for Wireless Sensor Networks",
      authors: ["A. Intana", "M. Pongpattanit"],
      leadAuthor: true,
      conference: "International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
      year: "2020",
      month: "June",
      pages: "1-5", 
      doi: "10.1109/ECTI-CON49241.2020.9158136",
      location: "Chiang Mai, Thailand",
      category: "wireless-networks",
      abstract: "This paper presents a formal modelling framework for wireless sensor networks using mathematical approaches.",
      keywords: ["Formal Modelling", "Wireless Sensor Networks", "Mathematical Framework", "Network Design"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 9,
      title: "Impact Analysis Framework of Test Cases Based on Changes of Use Case Requirements", 
      authors: ["A. Intana", "T. Srisuksai"],
      leadAuthor: true,
      conference: "International Computer Science and Engineering Conference (ICSEC)",
      year: "2019",
      month: "November",
      pages: "384-389",
      doi: "10.1109/ICSEC47112.2019.8974810",
      location: "Chiang Mai, Thailand",
      category: "software-testing",
      abstract: "This work proposes an impact analysis framework for test cases based on changes of use case requirements.",
      keywords: ["Impact Analysis", "Test Cases", "Use Case Requirements", "Software Testing"],
      status: "published", 
      type: "international-conference"
    },
    {
      id: 10,
      title: "Reversing Software Testing with Ontology Engineering Approach",
      authors: ["S. Chanvarasuth", "A. Intana"],
      leadAuthor: false,
      conference: "International Computer Science and Engineering Conference (ICSEC)", 
      year: "2019",
      month: "November", 
      pages: "115-120",
      doi: "10.1109/ICSEC47112.2019.8974782",
      location: "Chiang Mai, Thailand",
      category: "software-testing",
      abstract: "This paper explores reversing software testing methodologies using ontology engineering approaches.",
      keywords: ["Software Testing", "Ontology Engineering", "Reverse Engineering", "Testing Methodology"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 11,
      title: "A model-based trace testing approach for validation of formal co-simulation models",
      authors: ["A. Intana", "M. Pongpattanit", "G. V. Marmut"],
      leadAuthor: true,
      conference: "Symposium on Theory of Modeling & Simulation (DEVS Integrative M&S Symposium)",
      year: "2015",
      month: "April",
      pages: "24-29",
      location: "San Diego, CA, USA",
      category: "formal-methods",
      abstract: "This work presents a model-based trace testing approach for validation of formal co-simulation models.",
      keywords: ["Model-Based Testing", "Formal Methods", "Co-simulation", "Model Validation"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 12,
      title: "Adding value in WSN simulation through formal modelling and analysis",
      authors: ["A. Intana", "M. Pongpattanit", "G. V. Marmut"],
      leadAuthor: true,
      conference: "International Workshop on Software Engineering for Sensor Network Applications (SESENA)",
      year: "2013",
      month: "May",
      pages: "24-29",
      location: "San Francisco, CA, USA", 
      category: "wireless-networks",
      abstract: "This paper demonstrates how formal modelling and analysis can add value to wireless sensor network simulation.",
      keywords: ["WSN Simulation", "Formal Modelling", "Network Analysis", "Sensor Networks"],
      status: "published",
      type: "international-conference"
    }
  ],

  // National Conference Proceedings
  nationalProceedings: [
    {
      id: 13,
      title: "Testing Effectiveness to Communication of Equivalence Partitioning and Classification Tree Based Testing Technique with Fault Tree Analysis",
      authors: ["T. Srisuksai", "A. Intana"],
      leadAuthor: false,
      conference: "National Computer Science and Engineering Conference (NCSEC)",
      year: "2017",
      month: "March", 
      pages: "346-351",
      location: "Bangkok, Thailand",
      category: "software-testing",
      abstract: "This study compares testing effectiveness between equivalence partitioning and classification tree based testing techniques using fault tree analysis.",
      keywords: ["Testing Effectiveness", "Equivalence Partitioning", "Classification Tree", "Fault Tree Analysis"],
      status: "published",
      type: "national-conference"
    },
    {
      id: 14,
      title: "A Prototype of Use Case Development for Supporting Scenario Based Requirement Engineering",
      authors: ["A. Intana", "P. Ruengtanunart"], 
      leadAuthor: true,
      conference: "National Conference on Information Technology (NCIT)",
      year: "2017",
      month: "October",
      pages: "248-252",
      location: "Bangkok, Thailand",
      category: "requirement-engineering",
      abstract: "This work presents a prototype tool for use case development that supports scenario-based requirement engineering.",
      keywords: ["Use Case Development", "Scenario-Based Requirements", "Requirement Engineering", "Prototype Development"],
      status: "published",
      type: "national-conference"
    },
    {
      id: 15,
      title: "The Prototype Development of Automatic Test Case Generation for Supporting System and User Acceptance Testing",
      authors: ["A. Intana", "T. Srisuksai", "S. Panomyarit", "J. Phetcharat", "K. Singparit"],
      leadAuthor: true,
      conference: "National Conference on Information Technology (NCIT)",
      year: "2017",
      month: "October", 
      pages: "248-252",
      location: "Bangkok, Thailand",
      category: "software-testing",
      abstract: "This paper presents a prototype for automatic test case generation supporting both system and user acceptance testing.",
      keywords: ["Automatic Test Generation", "System Testing", "User Acceptance Testing", "Testing Automation"],
      status: "published", 
      type: "national-conference"
    }
  ],

  // Awards & Recognition
  awards: [
    {
      id: 1,
      title: "Best Paper Award",
      organization: "International Joint Conference on Computer Science and Software Engineering (JCSSE)",
      year: "2014",
      month: "May",
      description: "Best paper award for research on detecting ambiguity in Thai software requirements specifications",
      category: "research-excellence",
      amount: null,
      certificate: "/certificates/adisak-jcsse-2014.pdf"
    },
    {
      id: 2,
      title: "Outstanding Research Award",
      organization: "Prince of Songkla University, Phuket Campus",
      year: "2023", 
      month: "December",
      description: "Recognition for outstanding research contributions in software engineering and testing",
      category: "research-excellence",
      amount: "50,000 THB",
      certificate: "/certificates/adisak-psu-2023.pdf"
    }
  ],

  // Professional Certificates
  certificates: [
    {
      id: 1,
      title: "Data Scientist (Level 5)",
      organization: "Thailand Professional Qualification Institute (Public Organization)",
      year: "2024",
      month: "January",
      description: "Professional qualification certification for data science competency at advanced level",
      category: "professional-certification",
      level: "Level 5",
      validUntil: "2027",
      certificateNumber: "DS-2024-0001",
      skills: [
        "Advanced Data Analysis",
        "Machine Learning",
        "Statistical Modeling",
        "Data Visualization",
        "Big Data Analytics"
      ],
      certificate: "/certificates/adisak-data-scientist-2024.pdf"
    }
  ],

  // Current Research Projects
  currentProjects: [
    {
      id: 1,
      title: "Automated Test Case Generation Framework using AI",
      role: "Principal Investigator",
      startDate: "2023-01",
      endDate: "2025-12", 
      funding: "800,000 THB",
      fundingAgency: "Thailand Research Fund (TRF)",
      description: "Developing an AI-powered framework for automated test case generation from software requirements",
      collaborators: ["Dr. Kuljaree Tantayakul", "Dr. Kamon Laksarn"],
      status: "active"
    },
    {
      id: 2,
      title: "Ontology-based Requirements Engineering for Smart Cities",
      role: "Co-Investigator",
      startDate: "2024-01", 
      endDate: "2026-06",
      funding: "1,200,000 THB",
      fundingAgency: "National Research Council of Thailand (NRCT)",
      description: "Developing ontology-based approaches for requirements engineering in smart city applications",
      collaborators: ["Dr. Kuljaree Tantayakul", "Prof. Somchai Prasarnpanich"],
      status: "active"
    },
    {
      id: 3,
      title: "Formal Methods for Wireless Sensor Network Optimization",
      role: "Principal Investigator", 
      startDate: "2022-06",
      endDate: "2024-12",
      funding: "600,000 THB",
      fundingAgency: "Prince of Songkla University Research Fund",
      description: "Applying formal methods for optimization of wireless sensor network performance and reliability",
      collaborators: ["Dr. Manoj Pongpattanit"],
      status: "active"
    }
  ],

  // Updated Statistics
  statistics: {
    totalPublications: 15,
    internationalJournals: 4,
    internationalConferences: 8, 
    nationalConferences: 3,
    totalCitations: 245,
    hIndex: 12,
    i10Index: 8,
    totalFunding: "2,600,000 THB",
    activeProjects: 3,
    completedProjects: 8,
    totalAwards: 2,
    professionalCertificates: 1,
    phdStudents: 2,
    mastersStudents: 5,
    undergraduateStudents: 3
  },

  // Contact & Office Hours
  contact: {
    officeHours: [
      { day: "Monday", time: "9:00 AM - 11:00 AM" },
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
      { day: "Friday", time: "10:00 AM - 12:00 PM" }
    ],
    preferredContact: "email",
    responseTime: "within 24 hours",
    availability: "available",
    appointmentBooking: "Please email to schedule an appointment outside office hours"
  }
};

export default adisakIntana;