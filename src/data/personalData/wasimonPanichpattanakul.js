// data/personalData/wasimonPanichpattanakul.js
// โปรไฟล์อาจารย์ Wasimon (ลิงก์ผลงานผ่าน authorsRef -> authors_publications/wasimon_panichpattanakul.json)

const wasimonPanichpattanakul = {
  personalInfo: {
    id: "wasimon-panichpattanakul",
    firstName: "Wasimon",
    lastName: "Panichpattanakul",
    fullName: "Dr. Wasimon Panichpattanakul",
    title: "Dr.",
    position: "Assistant Dean (Student Admission & International Activities)",
    department: "College of Computing",
    email: "wasimon.pa@phuket.psu.ac.th",
    phone: "+66 87-700-3770",
    officeRoom: null, // ใส่ห้องทำงานเมื่อทราบ เช่น "Room 4xx, Engineering Building"
    profileImage: "/images/team/wasimon-panichpattanakul.png",
    bio: "Dr. Wasimon specializes in computer networks, telecommunications, and systems architecture. His research spans Software-Defined Networks (SDN), ad hoc networks, telecommunications, and the Internet of Things (IoT), as well as prior work on cooperative networks, power control, and medical image processing",
    researchInterests: [
      "Software-Defined Networks (SDN)",
      "Ad Hoc Networks",
      "Telecommunications",
      "Internet of Things (IoT)",
      "Cooperative Networks",
      "Power Control in Telecom Systems",
      "Medical Image Processing"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Networks, Telecommunications, Systems, and Architecture",
        institution: "ENSEEIHT/INPT (INP Toulouse), France",
        year: "2010"
      },
      {
        degree: "M.Eng. in Telecommunication",
        institution: "Chulalongkorn University, Thailand",
        year: "2003"
      },
      {
        degree: "B.Eng. in Communication",
        institution: "Prince of Songkla University, Thailand",
        year: "2000"
      }
    ],
    socialMedia: {
      website: "https://www.computing.psu.ac.th/th/wasimon-panichpattanakul-ph-d/"
    }
  },

  // ผูกผลงานผ่านไฟล์ authors_publications/wasimon_panichpattanakul.json (person.id ต้องตรงกัน)
  authorsRef: "wasimon-panichpattanakul",

  // กิจกรรม/รางวัล (เพิ่มได้ภายหลัง)
  awards: [],

  // ทุน/แหล่งสนับสนุน (เพิ่มได้ภายหลัง)
  grants: [],

  // โครงการวิจัยปัจจุบัน (เพิ่มได้ภายหลัง)
  currentProjects: [],

  // สถิติ (ปล่อยค่าว่างไว้ให้ไปคำนวณ/เติมจากแหล่งข้อมูลส่วนกลาง)
  statistics: {
    totalPublications: null,
    totalCitations: null,
    hIndex: null,
    i10Index: null
  },

  // การติดต่อ
  contact: {
    officeHours: [],
    preferredContact: "email",
    responseTime: "within 24 hours",
    availability: "available",
    appointmentBooking: "Please email to schedule an appointment"
  }
};

export default wasimonPanichpattanakul;
