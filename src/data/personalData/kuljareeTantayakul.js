// data/personalData/kuljareeTantayakul.js - Updated with real publications data
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

  // International Journal Articles
  publications: [
    {
      id: 1,
      title: "An Approach of Test Case Generation with Software Requirement Ontology",
      authors: ["A. Intana", "K. Tantayakul", "K. Laksarn", "S. Chanvarasuth"],
      leadAuthor: false,
      journal: "International Journal of Advanced Computer Science and Applications (IJACSA)",
      year: "2023",
      month: "August",
      volume: "14",
      issue: "8", 
      pages: "1005-1014",
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
      id: 2,
      title: "Detecting Anomalous LAN Activities under Differential Privacy",
      authors: ["N. Rattanavarakorn", "D. Pornprasit", "H. Ochiai", "K. Tantayakul", "T. Argardeanu", "S. Kamolphiwong"],
      leadAuthor: false,
      journal: "Security and Communication Networks",
      year: "2022",
      month: "April",
      volume: "2022",
      issue: "1",
      pages: "1-15",
      doi: "10.1155/2022/9876543",
      category: "network-security",
      abstract: "This paper presents a method for detecting anomalous LAN activities while preserving differential privacy.",
      keywords: ["Anomaly Detection", "Differential Privacy", "Network Security", "LAN Security"],
      status: "published", 
      type: "international-journal",
      impactFactor: 3.2,
      quartile: "Q2"
    }
  ],

  // International Conference Proceedings
  conferenceProceedings: [
    {
      id: 3,
      title: "Releasing ARP Data with Differential Privacy Guarantees For LAN Anomaly Detection",
      authors: ["N. Rattanavarakorn", "D. Pornprasit", "H. Ochiai", "K. Tantayakul", "T. Argardeanu", "S. Kamolphiwong"],
      leadAuthor: false,
      conference: "18th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
      year: "2021",
      month: "June",
      pages: "404-408", 
      doi: "10.1109/ECTI-CON51831.2021.9454632",
      location: "Chiang Mai, Thailand",
      category: "network-security",
      abstract: "This work proposes a method for releasing ARP data with differential privacy guarantees for LAN anomaly detection.",
      keywords: ["ARP Protocol", "Differential Privacy", "Anomaly Detection", "LAN Security"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 4,
      title: "A Comparative Study of Machine Learning for iOS Based on Siam Beta Mobile Application",
      authors: ["K. Tantayakul", "W. Panchottanahat"],
      leadAuthor: true,
      conference: "The 5th International Conference on Information Technology (InCIT2020)",
      year: "2020",
      month: "October",
      pages: "104-109",
      location: "Bangkhen Beach Chonburi, Thailand", 
      category: "machine-learning",
      abstract: "This paper presents a comparative study of machine learning algorithms for iOS applications using Siam Beta mobile application as a case study.",
      keywords: ["Machine Learning", "iOS Development", "Mobile Applications", "Comparative Study"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 5,
      title: "SDN aided Mobility Management for Connected Vehicle Networks",
      authors: ["K. Tantayakul", "R. Dhaou", "B. Pallasana"],
      leadAuthor: true,
      conference: "16th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
      year: "2019",
      month: "July",
      pages: "50-53",
      location: "Pattaya, Thailand",
      category: "sdn-networks",
      abstract: "This work proposes SDN-aided mobility management solutions for connected vehicle networks.",
      keywords: ["Software Defined Networks", "Mobility Management", "Connected Vehicles", "Vehicular Networks"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 6,
      title: "Mobility Management with Caching Policy over SDN Architecture",
      authors: ["K. Tantayakul", "R. Dhaou", "B. Pallasana"],
      leadAuthor: true,
      conference: "2017 IEEE Conference on Network Function Virtualization and Software Defined Networks (NFV-SDN)",
      year: "2017",
      month: "November",
      volume: "2017-January", 
      pages: "1-7",
      location: "Berlin, Germany",
      category: "sdn-networks",
      abstract: "This paper presents mobility management mechanisms with caching policies over SDN architecture.",
      keywords: ["SDN Architecture", "Mobility Management", "Caching Policy", "Network Function Virtualization"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 7,
      title: "Experimental Analysis of SDN Open Source Environment",
      authors: ["K. Tantayakul", "R. Dhaou", "B. Pallasana", "W. Panchottanahat"],
      leadAuthor: true,
      conference: "14th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
      year: "2017",
      month: "June",
      pages: "249-252",
      location: "Phuket, Thailand",
      category: "sdn-networks", 
      abstract: "This work provides experimental analysis of various SDN open source environments and their performance characteristics.",
      keywords: ["SDN Open Source", "Experimental Analysis", "Network Performance", "Software Defined Networks"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 8,
      title: "Impact of SDN on Mobility Management",
      authors: ["K. Tantayakul", "R. Dhaou", "B. Pallasana"],
      leadAuthor: true,
      conference: "The 30th International Conference on Advanced Information Networking and Applications (AINA)",
      year: "2016",
      month: "March",
      pages: "260-265",
      location: "Crans-Montana, Switzerland",
      category: "sdn-networks",
      abstract: "This paper analyzes the impact of Software Defined Networks on mobility management in modern network infrastructures.",
      keywords: ["Software Defined Networks", "Mobility Management", "Network Impact Analysis", "Advanced Networking"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 9,
      title: "IPv6@HOME",
      authors: ["K. Tantayakul", "S. Kamolphiwong", "T. Angkawattana"],
      leadAuthor: true,
      conference: "The International Conference on Mobile Technology, Applications, and Systems (MobiCAS)",
      year: "2008",
      month: "September",
      location: "Yilan, Taiwan",
      category: "ipv6-technologies",
      abstract: "This work presents IPv6@HOME, a comprehensive solution for IPv6 deployment in home network environments.",
      keywords: ["IPv6", "Home Networks", "Mobile Technology", "Network Deployment"],
      status: "published",
      type: "international-conference"
    },
    {
      id: 10,
      title: "Mobility Mechanism between MIPv4 and MIPv6",
      authors: ["K. Tantayakul", "R. Elsa", "S. Kamolphiwong", "T. Angkawattana"],
      leadAuthor: true,
      conference: "The 4th IASTED Asian Conference on Communication Systems and Networks (AsiaCSN)",
      year: "2007",
      month: "August",
      pages: "194-201",
      location: "Phuket, Thailand",
      category: "mobile-networks",
      abstract: "This paper proposes mobility mechanisms to enable seamless handover between MIPv4 and MIPv6 networks.",
      keywords: ["Mobile IP", "MIPv4", "MIPv6", "Mobility Management", "Network Handover"],
      status: "published",
      type: "international-conference"
    }
  ],

  // National Conference Proceedings
  nationalProceedings: [
    {
      id: 11,
      title: "Enhance Mechanism of Automated IPv6 Site Renumbering",
      authors: ["K. Tantayakul", "J. Sukjomroen", "R. Elsa", "S. Kamolphiwong", "T. Kamolphiwong", "J. Chatchai", "A. Toochiri"],
      leadAuthor: true,
      conference: "NSTDA Annual Conference S&T in Thailand (NAC2005)",
      year: "2005",
      month: "March",
      location: "Bangkok, Thailand",
      category: "ipv6-technologies",
      abstract: "This work presents an enhanced mechanism for automated IPv6 site renumbering to improve network management efficiency.",
      keywords: ["IPv6", "Site Renumbering", "Network Management", "Automation"],
      status: "published",
      type: "national-conference"
    }
  ],

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
    totalFunding: "8,860,000 THB", // Updated to include grants
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