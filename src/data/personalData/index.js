// src/data/personalData/index.js

// // โปรไฟล์อาจารย์และนักศึกษา
import adisakIntana from './adisakIntana';
import kuljareeTantayakul from './kuljareeTantayakul';
import wasimonPanichpattanakul from './wasimonPanichpattanakul';
import masterStudents from './masterStudents';
import juniorStudents from './juniorStudents';

// // แค็ตตาล็อกผลงาน + ไฟล์ authors_publications สำหรับคำนวณสถิติ
import publicationsCatalogRaw from '@/data/catalog/publications.json';
import adisakAuthorships from '@/data/authors_publications/adisak_intana.json';
import kuljareeAuthorships from '@/data/authors_publications/kuljaree_tantayakul.json';
import wasimonAuthorships from '@/data/authors_publications/wasimon_panichpattanakul.json';

// // เตรียมอาเรย์ publications ให้แน่นอน
const publicationsCatalog = Array.isArray(publicationsCatalogRaw)
  ? publicationsCatalogRaw
  : (publicationsCatalogRaw?.publications || []);

// // ดัชนี person.id → ข้อมูล authorships
const authorIndex = {
  [adisakAuthorships.person.id]: adisakAuthorships,
  [kuljareeAuthorships.person.id]: kuljareeAuthorships,
  [wasimonAuthorships.person.id]: wasimonAuthorships,
};

// // ฟังก์ชันคำนวณจำนวน International Journal / International Proceedings / National Proceedings
function computePubStats(personId) {
  const entry = authorIndex[personId];
  if (!entry) {
    return {
      internationalJournals: 0,
      internationalConferences: 0, // ใช้ฟิลด์นี้แทน International Proceedings
      nationalConferences: 0,
      totalPublications: 0,
    };
  }

  const myPubIds = new Set((entry.authorships || []).map(a => a.pubId));
  let ij = 0, ip = 0, np = 0;

  for (const pub of publicationsCatalog) {
    if (!pub?.id || !myPubIds.has(pub.id)) continue;
    const cat = pub.categoryId;
    if (cat === 'intl-journal') ij += 1;
    else if (cat === 'intl-proceedings') ip += 1;
    else if (cat === 'national-proceedings') np += 1;
  }

  return {
    internationalJournals: ij,
    internationalConferences: ip,
    nationalConferences: np,
    totalPublications: ij + ip + np,
  };
}

// // รายชื่ออาจารย์ (ยังไม่อัดสถิติ ณ จุดนี้)
export const facultyMembers = {
  adisakIntana,
  kuljareeTantayakul,
  wasimonPanichpattanakul,
};

// // รายชื่อนักศึกษา
export const students = {
  masters: masterStudents,
  juniors: juniorStudents,
};

// // ดึงอาจารย์ทั้งหมดพร้อม "อัดสถิติ" ที่คำนวณจาก catalog/author_publications ให้เรียบร้อย
export const getAllFaculty = () => {
  const base = Object.values(facultyMembers);

  return base.map(m => {
    const personId = m.authorsRef || m.personalInfo?.id;
    const computed = computePubStats(personId);
    return {
      ...m,
      statistics: {
        ...(m.statistics || {}),
        ...computed, // เขียนทับให้มีสามช่อง: IJ, IP, NP และ totalPublications
      },
    };
  });
};

export const getAllMasterStudents = () => {
  return students.masters;
};

export const getAllJuniorStudents = () => {
  return students.juniors;
};

export const getAllMembers = () => {
  return [
    ...getAllFaculty(),
    ...getAllMasterStudents(),
    ...getAllJuniorStudents(),
  ];
};

// // Team-level stats (ถ้าต้องการ totalPublications รวมทั้งทีม)
export const getTeamStatistics = () => {
  const faculty = getAllFaculty();
  const masters = getAllMasterStudents();
  const juniors = getAllJuniorStudents();

  return {
    totalMembers: faculty.length + masters.length + juniors.length,
    faculty: faculty.length,
    masterStudents: masters.length,
    juniorStudents: juniors.length,
    totalPublications: faculty.reduce((sum, m) => sum + (m.statistics?.totalPublications || 0), 0),
    totalCitations: faculty.reduce((sum, m) => sum + (m.statistics?.totalCitations || 0), 0),
  };
};
