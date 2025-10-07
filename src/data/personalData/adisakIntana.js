// src/data/personalData/adisakIntana.js

const adisakIntana = {
  personalInfo: {
    id: "adisak-intana",
    firstName: "Adisak",
    lastName: "Intana",
    fullName: "Asst.Prof.Dr. Adisak Intana",
    title: "Asst.Prof.Dr.",
    position: "Head of the Research Team",
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

  // เชื่อมผลงานด้วย person.id ไปที่ /src/data/authors_publications/adisak_intana.json
  // authors_publications.person.id ต้องเป็น "adisak-intana" ตรงกัน
  authorsRef: "adisak-intana",

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
