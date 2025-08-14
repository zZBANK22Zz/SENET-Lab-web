import adisakIntana from './adisakIntana';
import kuljareeTantayakul from './kuljareeTantayakul';
import masterStudents from './masterStudents';
import juniorStudents from './juniorStudents';

export const facultyMembers = {
  adisakIntana,
  kuljareeTantayakul
};

export const students = {
  masters: masterStudents,
  juniors: juniorStudents
};

export const getAllFaculty = () => {
  return Object.values(facultyMembers);
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
    ...getAllJuniorStudents()
  ];
};

export const getTeamStatistics = () => {
  const faculty = getAllFaculty();
  const masters = getAllMasterStudents();
  const juniors = getAllJuniorStudents();

  return {
    totalMembers: faculty.length + masters.length + juniors.length,
    faculty: faculty.length,
    masterStudents: masters.length,
    juniorStudents: juniors.length,
    totalPublications: [...faculty].reduce((sum, member) => 
      sum + (member.statistics?.totalPublications || 0), 0
    ),
    totalCitations: [...faculty].reduce((sum, member) => 
      sum + (member.statistics?.totalCitations || 0), 0
    )
  };
};