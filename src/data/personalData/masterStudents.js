// src/data/personalData/masterStudents.js

const masterStudents = [
  {
  personalInfo: {
      id: "6730621005",
      firstName: "Phone Myint",
      lastName: "Zaw",
      fullName: "Mr. Phone Myint Zaw",
      title: "Mr.",
      position: "Master's Student",
      department: "College of Computing",
      email: "6730621005@psu.ac.th", 
      profileImage: "/images/team/phone-myint-zaw.png",
      bio: "Master's student under the supervision of Asst.Prof.Dr. Adisak Intana.",
      researchInterests: ["Artificial Intelligence"],
      advisor: "Asst.Prof.Dr. Adisak Intana",
      studentId: "6730621005",
      yearStarted: "2567", 
      expectedGraduation: "2569" 
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
      department: "College of Computing",
      email: "6730621003@psu.ac.th", 
      profileImage: "/images/team/aung-aung.png",
      bio: "Master's student under the supervision of Asst.Prof.Dr. Kuljaree Tantayakul.",
      researchInterests: [
        "Software-Defined Networks (SDN)", "LISP", "IDPS", "Mobility Management", "Network & Security"
      ],
      advisor: "Asst.Prof.Dr. Kuljaree Tantayakul",
      studentId: "6730621003",
      yearStarted: "2567", 
      expectedGraduation: "2569" 
    },
    currentProject: {
      // Based on BGP training activities (THNICF/BKNIX funding) — use as a working title for now
      title: "Security and Mobility Enhancement in SDN Networks Using LISP and IDP",
      description: "This thesis explores enhancing mobility and security in SDN networks by integrating LISP for seamless handovers and IDPS for real-time threat detection. The combined approach aims to provide efficient mobility management and strong protection against cyberattacks in dynamic network environments."
    },
    statistics: {
      publications: 0,
      conferences: 1 // Count one training/conference activity (adjust as needed)
    }
  }
];

export default masterStudents;
