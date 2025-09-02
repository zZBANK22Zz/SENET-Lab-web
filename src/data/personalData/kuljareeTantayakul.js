// data/personalData/kuljareeTantayakul.js
// Refactored: ลิงก์ผลงานผ่าน authorsRef แทนการเก็บรายการผลงานตรงนี้

const kuljareeTantayakul = {
  personalInfo: {
    id: "kuljaree-tantayakul",
    firstName: "Kuljaree",
    lastName: "Tantayakul",
    fullName: "Asst.Prof.Dr. Kuljaree Tantayakul",
    title: "Asst.Prof.Dr.",
    position: "Assistant Professor & Lab Co-Director",
    department: "Network Technologies & Security",
    email: "kuljaree.t(at)phuket.psu.ac.th",
    phone: "+66 76-27(6712)",
    officeRoom: "Room 402, Engineering Building",
    profileImage: "/images/team/kuljaree-tantayakul.jpg",
    bio: "Dr. Kuljaree Tantayakul is an Assistant Professor and Co-Director of SEnet Research Lab, with extensive expertise in network security, mobile networks, software-defined networks (SDN), and differential privacy. She leads cutting-edge research in secure network technologies and mobility management systems. Dr. Kuljaree has successfully secured major international grants including AIPOSH (AI-Powered Cybersecurity for Smart Healthcare) and ASEAN-Wide Cyber-Security Research Testbed, totaling over 5.7 million THB in research funding.",
    researchInterests: [
      "Network Security & Privacy",
      "Software-Defined Networks (SDN)",
      "Mobile Network Mobility Management",
      "Differential Privacy",
      "Machine Learning for Networks",
      "AI-Powered Cybersecurity",
      "Smart Healthcare Security Systems",
      "Cybersecurity Research Testbeds",
      "IPv6 Technologies",
      "Connected Vehicle Networks",
      "Network Function Virtualization"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Mahidol University",
        year: "2019",
        specialization: "Network Security"
      },
      {
        degree: "M.Sc. in Information Technology",
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        year: "2015"
      },
      {
        degree: "B.Sc. in Computer Science",
        institution: "Thammasat University",
        year: "2013"
      }
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/kuljaree-tantayakul",
      googleScholar: "https://scholar.google.com/citations?user=kuljareetantayakul",
      researchGate: "https://researchgate.net/profile/Kuljaree-Tantayakul"
    }
  },

  // ผูกผลงานผ่านไฟล์ authors_publications/kuljaree_tantayakul.json
  // โดยต้องแม็พกับ person.id = "kuljaree-tantayakul"
  authorsRef: "kuljaree-tantayakul",

  // Awards & Recognition
  awards: [
    {
      id: 1,
      title: "Best Student Paper Award",
      organization: "4th IASTED Asian Conference on Communication Systems and Networks (AsiaCSN 2007)",
      year: "2007",
      month: "August",
      description: "Best student paper award for research on mobility mechanisms between MIPv4 and MIPv6",
      category: "research-excellence",
      amount: null,
      certificate: "/certificates/kuljaree-asiasn-2007.pdf"
    },
    {
      id: 2,
      title: "Outstanding Research in Network Security",
      organization: "Prince of Songkla University, Phuket Campus",
      year: "2022",
      month: "December",
      description: "Recognition for outstanding research contributions in network security and differential privacy",
      category: "research-excellence",
      amount: "60,000 THB",
      certificate: "/certificates/kuljaree-psu-2022.pdf"
    },
    {
      id: 3,
      title: "Excellence in SDN Research Award",
      organization: "IEEE Thailand Section",
      year: "2019",
      month: "November",
      description: "Recognition for significant contributions to Software Defined Networks research",
      category: "research-excellence",
      amount: "25,000 THB",
      certificate: "/certificates/kuljaree-ieee-2019.pdf"
    }
  ],

  // Research Grants & Funding
  grants: [
    {
      id: 1,
      title: "SENET (Software Engineering and Networking Technologies) Research Team",
      fundingAgency: "College of Computing, Prince of Songkla University",
      amount: "750,000 THB",
      startYear: "2025",
      endYear: "2027",
      duration: "2025-2027",
      role: "Co-Principal Investigator",
      status: "approved",
      category: "university-funding",
      description: "Establishment and development of SENET research team focusing on software engineering and networking technologies research initiatives."
    },
    {
      id: 2,
      title: "Artificial Intelligence Powered Comprehensive Cyber-Security for Smart Healthcare Systems (AIPOSH)",
      fundingAgency: "ICT Virtual Organization of ASEAN Institutes and NICT (ASEAN IVO)",
      amount: "2,480,000 THB",
      startYear: "2024",
      endYear: "2025",
      duration: "2024-2025",
      role: "Principal Investigator",
      status: "active",
      category: "international-funding",
      description: "Development of AI-powered comprehensive cybersecurity solutions specifically designed for smart healthcare systems across ASEAN region."
    },
    {
      id: 3,
      title: "ASEAN-Wide Cyber-Security Research Testbed",
      fundingAgency: "ICT Virtual Organization of ASEAN Institutes and NICT (ASEAN IVO)",
      amount: "2,480,000 THB",
      startYear: "2020",
      endYear: "2023",
      duration: "2020-2023",
      role: "Co-Principal Investigator",
      status: "completed",
      category: "international-funding",
      description: "Establishment of comprehensive cyber-security research testbed for collaborative research across ASEAN member countries.",
      link: "https://example.com/asean-testbed"
    }
  ],

  // Current Research Projects
  currentProjects: [
    {
      id: 1,
      title: "Differential Privacy-Preserving Network Anomaly Detection",
      role: "Principal Investigator",
      startDate: "2023-01",
      endDate: "2025-12",
      funding: "950,000 THB",
      fundingAgency: "Thailand Research Fund (TRF)",
      description: "Developing privacy-preserving techniques for network anomaly detection using differential privacy mechanisms",
      collaborators: ["Dr. Adisak Intana", "Dr. Somchai Kamolphiwong"],
      status: "active"
    },
    {
      id: 2,
      title: "SDN-based Smart Campus Network Management",
      role: "Principal Investigator",
      startDate: "2024-01",
      endDate: "2026-06",
      funding: "1,400,000 THB",
      fundingAgency: "Office of Higher Education Commission (OHEC)",
      description: "Implementing Software Defined Networks for intelligent campus network management and optimization",
      collaborators: ["Dr. Rattana Varakorn", "Prof. Benoit Pallasana"],
      status: "active"
    },
    {
      id: 3,
      title: "Machine Learning for Mobile Network Optimization",
      role: "Co-Investigator",
      startDate: "2023-06",
      endDate: "2025-05",
      funding: "800,000 THB",
      fundingAgency: "National Telecommunications Commission (NTC)",
      description: "Applying machine learning techniques for optimization of mobile network performance and resource allocation",
      collaborators: ["Dr. Wichian Panchottanahat", "Dr. Ratana Dhaou"],
      status: "active"
    }
  ],

  // Updated Statistics
  statistics: {
    totalPublications: 11,
    internationalJournals: 2,
    internationalConferences: 8,
    nationalConferences: 1,
    totalCitations: 195,
    hIndex: 10,
    i10Index: 6,
    totalFunding: "8,860,000 THB",
    totalGrants: "5,710,000 THB",
    totalProjectFunding: "3,150,000 THB",
    activeProjects: 3,
    completedProjects: 12,
    activeGrants: 2,
    completedGrants: 1,
    phdStudents: 2,
    mastersStudents: 4,
    undergraduateStudents: 2
  },

  // Contact & Office Hours
  contact: {
    officeHours: [
      { day: "Tuesday", time: "10:00 AM - 12:00 PM" },
      { day: "Thursday", time: "1:00 PM - 3:00 PM" },
      { day: "Friday", time: "9:00 AM - 11:00 AM" }
    ],
    preferredContact: "email",
    responseTime: "within 24 hours",
    availability: "available",
    appointmentBooking: "Please email to schedule an appointment outside office hours"
  }
};

export default kuljareeTantayakul;
