import { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, GraduationCap, Search, ArrowRight } from "lucide-react";
import {
  getAllFaculty,
  getAllMasterStudents,
  getAllJuniorStudents,
  getTeamStatistics,
} from "@/data/personalData";

const GmailButton = ({ email, small = false }) => {
  const addr = (email || "").replace("(at)", "@").trim();
  if (!addr) return null;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(addr)}`;

  return (
    <a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary flex items-center gap-2 ${small ? "py-1.5 px-3 text-[11px]" : "py-2 px-4 text-xs"}`}
    >
      <Mail size={small ? 14 : 16} />
      Contact
    </a>
  );
};

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const faculty = useMemo(() => getAllFaculty(), []);
  const masterStudents = useMemo(() => getAllMasterStudents(), []);
  const juniorStudents = useMemo(() => getAllJuniorStudents(), []);
  const stats = useMemo(() => getTeamStatistics(), []);

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
    { id: "all", name: "All members", count: stats.totalMembers },
    { id: "faculty", name: "Faculty", count: stats.faculty },
    { id: "masters", name: "Master students", count: stats.masterStudents },
    { id: "juniors", name: "Undergraduate", count: stats.juniorStudents },
  ];

  const showFaculty = activeSection === "all" || activeSection === "faculty";
  const showMasters = activeSection === "all" || activeSection === "masters";
  const showJuniors = activeSection === "all" || activeSection === "juniors";

  const totalFilteredCount =
    (showFaculty ? filteredFaculty.length : 0) +
    (showMasters ? filteredMasters.length : 0) +
    (showJuniors ? filteredJuniors.length : 0);

  return (
    <div className="min-h-dvh bg-bg-canvas">
      <Head>
        <title>Team · SENET Lab</title>
      </Head>
      <Navbar />

      <main id="main">
        <section className="py-16 lg:py-24 border-b border-border-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">People</p>
            <h1 className="display-title text-4xl md:text-5xl lg:text-6xl text-text-main mb-6 max-w-2xl">
              The people behind the work
            </h1>
            <p className="text-lg text-text-muted max-w-xl mb-12 leading-relaxed">
              Faculty, graduate researchers, and undergraduate assistants in
              software engineering and network technologies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-border-light pt-10">
              {[
                { label: "Total members", value: stats.totalMembers },
                { label: "Faculty", value: stats.faculty },
                { label: "Master's", value: stats.masterStudents },
                { label: "Undergraduate", value: stats.juniorStudents },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-semibold text-primary-deep tabular-nums mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-bg-white sticky top-[4.5rem] z-[30] border-b border-border-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative w-full lg:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-text-muted" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or research topic"
                  className="block w-full pl-11 pr-4 py-3 border border-border-light rounded-lg leading-5 bg-bg-canvas placeholder-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-action transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="hidden lg:flex flex-1 justify-end gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-primary-deep text-white"
                        : "bg-bg-off text-text-muted hover:text-primary-deep"
                    }`}
                  >
                    {section.name}{" "}
                    <span className="opacity-60 ml-1 font-medium tabular-nums">{section.count}</span>
                  </button>
                ))}
              </div>

              <div className="lg:hidden w-full">
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="block w-full px-4 py-3 border border-border-light rounded-lg bg-bg-canvas text-text-main focus-visible:ring-2 focus-visible:ring-primary-action outline-none"
                >
                  {sections.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {showFaculty && filteredFaculty.length > 0 && (
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="display-title text-2xl text-text-main">Faculty &amp; lab directors</h2>
                  <div className="h-px flex-1 bg-border-light" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFaculty.map((member) => (
                    <div key={member.personalInfo.id} className="rounded-2xl bg-bg-white p-8 group">
                      <div>
                        <div className="relative inline-block mb-6">
                          <img
                            src={member.personalInfo.profileImage}
                            alt={member.personalInfo.fullName}
                            className="w-28 h-28 rounded-2xl object-cover shadow-soft group-hover:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-primary-deep text-white p-2 rounded-lg">
                            <GraduationCap size={14} />
                          </div>
                        </div>

                        <h3 className="display-title text-xl text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                          {member.personalInfo.fullName}
                        </h3>
                        <p className="text-sm font-semibold text-primary-action mb-2">
                          {member.personalInfo.position}
                        </p>
                        <p className="text-sm text-text-muted italic mb-4">
                          {member.personalInfo.department}
                        </p>

                        <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">
                          {member.personalInfo.bio}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {[
                            { val: member.statistics?.internationalJournals || 0, label: "Journals" },
                            { val: member.statistics?.internationalConferences || 0, label: "Confs" },
                            { val: member.statistics?.totalCitations || 0, label: "Citations" },
                          ].map((s) => (
                            <div key={s.label} className="bg-bg-off rounded-lg p-3">
                              <div className="text-lg font-semibold text-text-main tabular-nums">{s.val}</div>
                              <div className="text-[10px] text-text-muted font-semibold">{s.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <GmailButton email={member.personalInfo.email} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showMasters && filteredMasters.length > 0 && (
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="display-title text-2xl text-text-main">Master&apos;s students</h2>
                  <div className="h-px flex-1 bg-border-light" />
                </div>
                <div className="space-y-4">
                  {filteredMasters.map((student) => (
                    <div key={student.personalInfo.id} className="rounded-2xl bg-bg-white p-6 sm:p-8 group">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={student.personalInfo.profileImage}
                            alt={student.personalInfo.fullName}
                            className="w-24 h-24 rounded-2xl object-cover shadow-soft group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="display-title text-xl text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                            {student.personalInfo.fullName}
                          </h3>
                          <p className="text-sm text-text-muted mb-4">
                            Advisor:{" "}
                            <span className="font-semibold text-primary-action">{student.personalInfo.advisor}</span>
                          </p>

                          <div className="rounded-xl bg-bg-off p-4 mb-5 border-l-2 border-accent-warm">
                            <h4 className="text-xs font-semibold text-text-main mb-2">Research focus</h4>
                            <p className="text-sm text-text-muted leading-relaxed">{student.currentProject.title}</p>
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              {student.personalInfo.researchInterests.slice(0, 2).map((int) => (
                                <span key={int} className="text-[11px] font-semibold text-text-muted">
                                  {int}
                                </span>
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

            {showJuniors && filteredJuniors.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="display-title text-2xl text-text-main">Undergraduate assistants</h2>
                  <div className="h-px flex-1 bg-border-light" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredJuniors.map((student) => (
                    <div key={student.personalInfo.id} className="rounded-2xl bg-bg-white p-6 group">
                      <img
                        src={student.personalInfo.profileImage}
                        alt={student.personalInfo.fullName}
                        className="w-20 h-20 rounded-2xl object-cover shadow-soft mb-4 group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <h3 className="font-semibold text-text-main mb-1 group-hover:text-primary-deep transition-colors">
                        {student.personalInfo.fullName}
                      </h3>
                      <p className="text-xs font-semibold text-primary-action mb-3">
                        {student.personalInfo.yearLevel}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-3 min-h-[48px] mb-5">
                        {student.currentWork.title}
                      </p>
                      <div className="pt-4 border-t border-border-light">
                        <GmailButton email={student.personalInfo.email} small />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {totalFilteredCount === 0 && (
              <div className="py-20 text-center">
                <h3 className="display-title text-2xl text-text-main mb-2">No team members found</h3>
                <p className="text-text-muted">Try adjusting your search or switching categories.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveSection("all");
                  }}
                  className="mt-8 text-primary-action font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Clear all filters
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-primary-deep px-8 py-14 sm:px-14 lg:px-16">
              <div
                className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent-warm/20 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-2xl">
                <h2 className="display-title text-3xl lg:text-4xl text-white mb-4">
                  Join as a student or collaborator
                </h2>
                <p className="text-lg text-white/75 mb-8 max-w-xl leading-relaxed">
                  The lab takes students and partners who want to work on software
                  quality and networked systems. Open roles and how to write to us
                  live on the contact page.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/JoinUs" className="btn-primary-white py-3.5 px-8 text-base">
                    Graduate opportunities
                  </Link>
                  <Link
                    href="/JoinUs"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    Open research positions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
