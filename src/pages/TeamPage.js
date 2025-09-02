// pages/TeamPage.js

import { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getAllFaculty,
  getAllMasterStudents,
  getAllJuniorStudents,
  getTeamStatistics
} from '@/data/personalData';

// // หมายเหตุ:
// // - ไม่มีการ import publicationsCatalogRaw / *_Authorships / wasimonPanichpattanakul ที่หน้านี้แล้ว
// // - ไม่ต้องประกาศ computePubStats หรือ export getAllFaculty ในหน้านี้

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState('all');

  // // ใช้ data layer ที่คำนวณ IJ/IP/NP มาให้แล้ว
  const faculty = useMemo(() => getAllFaculty(), []);
  const masterStudents = getAllMasterStudents();
  const juniorStudents = getAllJuniorStudents();
  const stats = getTeamStatistics();

  const sections = [
    { id: 'all', name: 'All Members', count: stats.totalMembers },
    { id: 'faculty', name: 'Faculty', count: stats.faculty },
    { id: 'masters', name: 'Master Students', count: stats.masterStudents },
    { id: 'juniors', name: 'Undergraduate', count: stats.juniorStudents }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Team
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Meet the brilliant minds behind SEnet Research Lab. Our diverse team of faculty,
              researchers, and students work together to push the boundaries of software engineering
              and network technologies.
            </p>

            {/* Team Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.totalMembers}</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Members</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.faculty}</div>
                <div className="text-xs sm:text-sm text-gray-600">Faculty</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.masterStudents}</div>
                <div className="text-xs sm:text-sm text-gray-600">Master's</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.juniorStudents}</div>
                <div className="text-xs sm:text-sm text-gray-600">Undergraduate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Dropdown */}
          <div className="sm:hidden mb-8">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name} ({section.count})
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Button Tabs */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 sm:mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-colors text-sm lg:text-base ${activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {section.name} ({section.count})
              </button>
            ))}
          </div>

          {/* Faculty Section */}
          {(activeSection === 'all' || activeSection === 'faculty') && (
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Faculty & Lab Directors
              </h2>

              {/* จุดแก้เพื่อให้ 3 ใบต่อแถว และกว้างขึ้น */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {faculty.map((member) => (
                  <div key={member.personalInfo.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 sm:p-8">
                    <div className="text-center">
                      <img
                        src={member.personalInfo.profileImage}
                        alt={member.personalInfo.fullName}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-gray-100 mb-4 sm:mb-6 mx-auto"
                      />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {member.personalInfo.fullName}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        {member.personalInfo.position}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                        {member.personalInfo.department}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {member.personalInfo.bio}
                      </p>

                      {/* Research Interests */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Research Interests:</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                          {member.personalInfo.researchInterests?.slice(0, 3).map((interest, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Statistics: IJ / IP / NP */}
                      {member.statistics && (() => {
                        const s = member.statistics;
                        const metrics = [
                          { value: s.internationalJournals, label1: 'International', label2: 'Journal' },
                          { value: s.internationalConferences, label1: 'International', label2: 'Proceedings' },
                          { value: s.nationalConferences, label1: 'National', label2: 'Proceedings' },
                        ].filter(m => (m.value ?? 0) > 0);

                        // ถ้าทั้งหมดเป็น 0 ไม่ต้องแสดงอะไร
                        if (metrics.length === 0) return null;

                        // ปรับจำนวนคอลัมน์ตามจำนวนกล่องที่เหลือ (1/2/3)
                        const cols =
                          metrics.length === 1 ? 'grid-cols-1'
                            : metrics.length === 2 ? 'grid-cols-2'
                              : 'grid-cols-3';

                        return (
                          <div className={`grid ${cols} gap-3 sm:gap-4 mb-4 sm:mb-6`}>
                            {metrics.map((m, idx) => (
                              <div key={idx} className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                                <div className="text-lg sm:text-xl font-bold text-gray-900">{m.value}</div>
                                <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                                  {m.label1}<br />{m.label2}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}

                      {/* Contact */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                        <a
                          href={`mailto:${member.personalInfo.email}`}
                          className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Contact
                        </a>                      
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Master Students Section */}
          {(activeSection === 'all' || activeSection === 'masters') && (
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Master's Students
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {masterStudents.map((student) => (
                  <div key={student.personalInfo.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
                    <div className="text-center">
                      <img
                        src={student.personalInfo.profileImage}
                        alt={student.personalInfo.fullName}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-100 mb-3 sm:mb-4 mx-auto"
                      />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                        {student.personalInfo.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {student.personalInfo.position}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Advisor: {student.personalInfo.advisor}
                      </p>

                      {/* Current Research */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Current Research:</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {student.currentProject.title}
                        </p>
                      </div>

                      {/* Research Interests */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {student.personalInfo.researchInterests.slice(0, 2).map((interest, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={`mailto:${student.personalInfo.email}`}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Junior Students Section */}
          {(activeSection === 'all' || activeSection === 'juniors') && (
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Undergraduate Research Assistants
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {juniorStudents.map((student) => (
                  <div key={student.personalInfo.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-4 sm:p-6">
                    <div className="text-center">
                      <img
                        src={student.personalInfo.profileImage}
                        alt={student.personalInfo.fullName}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-gray-100 mb-2 sm:mb-3 mx-auto"
                      />
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                        {student.personalInfo.fullName}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        {student.personalInfo.yearLevel}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Supervisor: {student.personalInfo.supervisor}
                      </p>

                      {/* Current Work */}
                      <div className="mb-3">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {student.currentWork.title}
                        </p>
                      </div>

                      {/* Main Interest */}
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          {student.personalInfo.researchInterests[0]}
                        </span>
                      </div>

                      <a
                        href={`mailto:${student.personalInfo.email}`}
                        className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Join Our Research Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            We're always looking for passionate researchers and students to join our lab.
            Explore opportunities to contribute to cutting-edge research in software engineering and network technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors">
              Graduate Opportunities
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Research Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
