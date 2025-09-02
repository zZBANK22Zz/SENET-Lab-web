// src/data/personalData/masterStudents.js

const masterStudents = [
  {
    personalInfo: {
      id: "phone-myint-zaw",
      firstName: "Phone Myint",
      lastName: "Zaw",
      fullName: "Mr. Phone Myint Zaw",
      title: "Mr.",
      position: "Master's Student",
      department: "Software Engineering", // TODO: Update to the actual affiliation if different
      email: "phone.myint.zaw@student.senetlab.edu", // TODO: Add the real email
      profileImage: "/images/team/phone-myint-zaw.jpg", // TODO: Upload the image / fix the path
      bio: "Master's student under the supervision of Asst.Prof.Dr. Adisak Intana.",
      researchInterests: [], // TODO: Fill in research interests when available
      advisor: "Asst.Prof.Dr. Adisak Intana",
      studentId: "6730621005",
      yearStarted: "2567", // TODO: Set the actual start year
      expectedGraduation: null // TODO: Set the expected graduation year/term
    },
    currentProject: {
      title: "Master Thesis (TBD)", // TODO: Provide the actual research title
      description: "To be updated." // TODO: Provide the actual research description
    },
    statistics: {
      publications: 0,
      conferences: 0
    }
  },
  {
    personalInfo: {
      id: "aung-aung",
      firstName: "Aung",
      lastName: "Aung",
      fullName: "Mr. Aung Aung",
      title: "Mr.",
      position: "Master's Student",
      department: "Network Technologies & Security", // TODO: Update to the actual affiliation if different
      email: "aung.aung@student.senetlab.edu", // TODO: Add the real email
      profileImage: "/images/team/aung-aung.jpg", // TODO: Upload the image / fix the path
      bio: "Master's student under the supervision of Asst.Prof.Dr. Kuljaree Tantayakul.",
      researchInterests: [
        // Seed with keywords based on recent activities (BGP, Network Ops) so the UI can show tags immediately
        "BGP & Routing", "Network Operations"
      ],
      advisor: "Asst.Prof.Dr. Kuljaree Tantayakul",
      studentId: "6730621003",
      yearStarted: "2567", // TODO: Set the actual start year
      expectedGraduation: null // TODO: Set the expected graduation year/term
    },
    currentProject: {
      // Based on BGP training activities (THNICF/BKNIX funding) — use as a working title for now
      title: "BGP Deployment & Troubleshooting (Working Title)",
      description: "Attended BGP Deployment and Troubleshooting Workshop; BPF 2025 & ThaiNOG Day participation (THNICF/BKNIX full support)."
    },
    statistics: {
      publications: 0,
      conferences: 1 // Count one training/conference activity (adjust as needed)
    }
  }
];

export default masterStudents;
