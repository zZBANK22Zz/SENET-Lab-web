import { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Presentation, 
  Search,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import {
  getAllFaculty,
  getAllMasterStudents,
  getAllJuniorStudents,
  getTeamStatistics
} from '@/data/personalData';

// Helper: Social Icon Button
const SocialIcon = ({ href, icon: Icon, label }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-bg-off border border-border-light flex items-center justify-center text-text-muted hover:bg-primary-soft hover:text-primary-action hover:border-primary-action transition-all"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
};

// Helper: Gmail-only contact button
const GmailButton = ({ email, small = false }) => {
  const addr = (email || "").replace("(at)", "@").trim();
  if (!addr) return null;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(addr)}`;
  
  return (
    <a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary flex items-center gap-2 ${small ? 'py-1.5 px-3 text-[11px]' : 'py-2 px-4 text-xs'}`}
    >
      <Mail size={small ? 14 : 16} />
      Contact
    </a>
  );
};

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const faculty = useMemo(() => getAllFaculty(), []);
  const masterStudents = useMemo(() => getAllMasterStudents(), []);
  const juniorStudents = useMemo(() => getAllJuniorStudents(), []);
  const stats = useMemo(() => getTeamStatistics(), []);

  // Filter function helper
  const matchesSearch = (member) => {
    const term = searchTerm.toLowerCase();
    const name = member.personalInfo.fullName.toLowerCase();
    const bio = (member.personalInfo.bio || "").toLowerCase();
    const interests = (member.personalInfo.researchInterests || []).join(" ").toLowerCase();
    return name.includes(term) || bio.includes(term) || interests.includes(term);
  };

  const filteredFaculty = faculty.filter(matchesSearch);
  const filteredMasters = masterStudents.filter(matchesSearch);
  const filteredJuniors = juniorStudents.filter(matchesSearch);

  const sections = [
    { id: 'all', name: 'All Members', count: stats.totalMembers },
    { id: 'faculty', name: 'Faculty', count: stats.faculty },
    { id: 'masters', name: "Master Students", count: stats.masterStudents },
    { id: 'juniors', name: 'Undergraduate', count: stats.juniorStudents }
  ];

  const showFaculty = activeSection === 'all' || activeSection === 'faculty';
  const showMasters = activeSection === 'all' || activeSection === 'masters';
  const showJuniors = activeSection === 'all' || activeSection === 'juniors';

  const totalFilteredCount = 
    (showFaculty ? filteredFaculty.length : 0) + 
    (showMasters ? filteredMasters.length : 0) + 
    (showJuniors ? filteredJuniors.length : 0);

  return (
    <div className="min-h-screen bg-bg-off">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold mb-6 tracking-wide uppercase">
              <Users size={14} className="text-primary-action" />
              Research Pioneers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 tracking-tight">
              Meet Our <span className="text-gradient-official">Expert Team</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
              Our diverse team of faculty, researchers, and students work together to push 
              the boundaries of software engineering and network technologies.
            </p>

            {/* Team Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { label: 'Total Members', value: stats.totalMembers },
                { label: 'Faculty', value: stats.faculty },
                { label: 'Master\'s', value: stats.masterStudents },
                { label: 'Undergraduate', value: stats.juniorStudents },
              ].map((stat, idx) => (
                <div key={idx} className="card-base p-6 text-center bg-white">
                  <div className="text-3xl font-bold text-primary-deep mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation & Search */}
      <section className="py-10 bg-white sticky top-20 z-40 border-b border-border-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-text-muted" />
              </div>
              <input
                type="text"
                placeholder="Search by name or research topic..."
                className="block w-full pl-11 pr-4 py-3 border border-border-light rounded-xl leading-5 bg-bg-off placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-action focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex flex-1 justify-end gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    activeSection === section.id
                    ? 'bg-primary-deep text-white shadow-md'
                    : 'bg-bg-off text-text-muted hover:bg-primary-soft hover:text-primary-deep'
                  }`}
                >
                  {section.name} <span className="opacity-60 ml-1 font-medium">{section.count}</span>
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="lg:hidden w-full">
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value)}
                className="block w-full px-4 py-3 border border-border-light rounded-xl bg-bg-off text-text-main focus:ring-2 focus:ring-primary-action outline-none"
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>{s.name} ({s.count})</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Team Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Faculty Section */}
          {showFaculty && filteredFaculty.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-text-main">Faculty & Lab Directors</h2>
                <div className="h-px flex-1 bg-border-light"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFaculty.map((member) => (
                  <div key={member.personalInfo.id} className="card-base p-8 group">
                    <div className="text-center relative">
                      <div className="relative inline-block mb-8">
                        <img
                          src={member.personalInfo.profileImage}
                          alt={member.personalInfo.fullName}
                          className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lift mx-auto group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-gradient-official text-white p-2 rounded-xl shadow-lg">
                          <GraduationCap size={16} />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                        {member.personalInfo.fullName}
                      </h3>
                      <p className="text-sm font-bold text-primary-action uppercase tracking-wider mb-4">
                        {member.personalInfo.position}
                      </p>
                      <p className="text-sm text-text-muted italic mb-6">
                        {member.personalInfo.department}
                      </p>
                      
                      <p className="text-sm text-text-muted leading-relaxed mb-8 line-clamp-3">
                        {member.personalInfo.bio}
                      </p>

                      {/* Research Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {[
                          { val: member.statistics?.internationalJournals || 0, label: 'Journals' },
                          { val: member.statistics?.internationalConferences || 0, label: 'Confs' },
                          { val: member.statistics?.totalCitations || 0, label: 'Citations' },
                        ].map((s, i) => (
                          <div key={i} className="bg-bg-off rounded-xl p-3 border border-transparent hover:border-primary-soft transition-colors">
                            <div className="text-lg font-bold text-text-main">{s.val}</div>
                            <div className="text-[10px] text-text-muted font-bold uppercase tracking-tight">{s.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center gap-3">
                        <GmailButton email={member.personalInfo.email} />
                        <SocialIcon 
                          href={member.personalInfo.socialMedia?.linkedin} 
                          icon={Linkedin} 
                          label="LinkedIn Profile" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Master Students Section */}
          {showMasters && filteredMasters.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-text-main">Master's Students</h2>
                <div className="h-px flex-1 bg-border-light"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredMasters.map((student) => (
                  <div key={student.personalInfo.id} className="card-base p-8 group">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 text-center">
                        <img
                          src={student.personalInfo.profileImage}
                          alt={student.personalInfo.fullName}
                          className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-soft mx-auto group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-[10px] font-bold uppercase tracking-wider">
                          <GraduationCap size={12} />
                          M.Eng Student
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                          {student.personalInfo.fullName}
                        </h3>
                        <p className="text-sm text-text-muted mb-4">
                          Advisor: <span className="font-bold text-primary-action">{student.personalInfo.advisor}</span>
                        </p>

                        <div className="bg-bg-off rounded-2xl p-4 mb-6 border-l-4 border-primary-action">
                          <h4 className="text-xs font-bold text-text-main uppercase tracking-widest mb-2">Research Focus</h4>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {student.currentProject.title}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 mt-auto">
                           <div className="flex flex-wrap gap-2">
                             {student.personalInfo.researchInterests.slice(0, 2).map((int, i) => (
                               <span key={i} className="text-[11px] font-bold text-text-muted opacity-60">#{int}</span>
                             ))}
                           </div>
                           <GmailButton email={student.personalInfo.email} small />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Undergraduate Section */}
          {showJuniors && filteredJuniors.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-text-main">Undergraduate Assistants</h2>
                <div className="h-px flex-1 bg-border-light"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredJuniors.map((student) => (
                  <div key={student.personalInfo.id} className="card-base p-6 group">
                    <div className="text-center">
                      <img
                        src={student.personalInfo.profileImage}
                        alt={student.personalInfo.fullName}
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-soft mx-auto mb-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <h3 className="text-base font-bold text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                        {student.personalInfo.fullName}
                      </h3>
                      <p className="text-xs font-bold text-primary-action uppercase tracking-widest mb-3">
                        {student.personalInfo.yearLevel}
                      </p>
                      
                      <div className="min-h-[60px] flex items-center justify-center mb-6">
                        <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                          {student.currentWork.title}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border-light flex justify-center">
                        <GmailButton email={student.personalInfo.email} small />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {totalFilteredCount === 0 && (
            <div className="card-base py-24 text-center bg-white">
              <div className="w-20 h-20 bg-primary-soft rounded-full flex items-center justify-center text-primary-deep mx-auto mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-2">No team members found</h3>
              <p className="text-text-muted">Try adjusting your search or switching categories</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveSection('all');
                }}
                className="mt-8 text-primary-action font-bold hover:underline flex items-center gap-2 mx-auto"
              >
                Clear all filters
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-deep rounded-[2.5rem] overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-action/20 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-action/20 rounded-full blur-3xl"></div>
            
            <div className="relative py-20 px-8 lg:px-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:flex-1">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Start Your <span className="text-blue-400">Research Journey</span> With Us
                </h2>
                <p className="text-lg text-blue-100/80 mb-8 max-w-2xl">
                  We're always looking for passionate researchers and students to join our lab. 
                  Collaborate on cutting-edge projects in software engineering and network technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-primary py-4 px-8 text-base">
                    View Graduate Opportunities
                    <ChevronRight size={18} />
                  </button>
                  <button className="btn-secondary py-4 px-8 text-base text-white border-white/20 hover:bg-white/10">
                    Open Research Positions
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block w-72 h-72 bg-white/5 rounded-[3rem] p-8 border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-deep bg-primary-soft p-1">
                        <Users size={20} className="text-primary-deep m-auto mt-1.5" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                    <div className="text-blue-200 text-sm font-medium">Active Researchers</div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full">
                    <div className="h-full w-3/4 bg-primary-action rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
