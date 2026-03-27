import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  MapPin,
  Facebook,
  ChevronDown,
  ChevronUp,
  BookOpen,
  GraduationCap,
  Microscope,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const LAB_EMAIL = "senet@phuket.psu.ac.th";
const FACEBOOK_URL = "https://www.facebook.com/senet.lab";
const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=College+of+Computing%2C+Prince+of+Songkla+University%2C+Phuket+Campus+80%2C+M.1+Vichitsongkram+Road%2C+Kathu%2C+Phuket+83120";
const MAILTO_INQUIRY = `mailto:${LAB_EMAIL}?subject=${encodeURIComponent("SENET Lab inquiry")}&body=${encodeURIComponent("Hello SENET Lab,\n\n")}`;

const OpportunityCard = ({ title, icon: Icon, requirements, benefits }) => (
  <div className="card-base p-8 group">
    <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-deep mb-6 group-hover:bg-gradient-official group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-text-main mb-6">{title}</h3>

    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-bold text-primary-action uppercase tracking-widest mb-3">Requirements</h4>
        <ul className="space-y-2">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <CheckCircle2 size={14} className="text-primary-action mt-0.5 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold text-primary-action uppercase tracking-widest mb-3">Key Benefits</h4>
        <ul className="space-y-2">
          {benefits.map((ben, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-soft border border-primary-action mt-1.5 flex-shrink-0" />
              {ben}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-light last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-action transition-colors"
      >
        <span className="text-base font-bold text-text-main">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-primary-action" /> : <ChevronDown size={20} className="text-text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-sm text-text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-bg-off">
      <Navbar />

      <section className="bg-white py-20 lg:py-28 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold mb-6 tracking-wide uppercase">
              <MessageSquare size={14} className="text-primary-action" />
              Join the Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 tracking-tight">
              Let&apos;s <span className="text-gradient-official">Innovate Together</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re a prospective student, a researcher, or a potential collaborator,
              we&apos;d love to hear from you. We are always looking for passionate minds to join our journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Research Tracks</h2>
            <p className="text-text-muted">Find the right path for your academic and research goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OpportunityCard
              title="Undergraduate Research"
              icon={BookOpen}
              requirements={[
                "3rd or 4th-year student in Computing/Software Eng",
                "Minimum GPA of 3.00",
                "Strong interest in Software Engineering or Networks",
              ]}
              benefits={[
                "Hands-on experience with real-world research",
                "Mentorship from faculty and senior students",
                "Opportunities for publication and awards",
              ]}
            />
            <OpportunityCard
              title="Graduate Studies"
              icon={GraduationCap}
              requirements={[
                "B.Eng or B.Sc in related fields",
                "Strong foundation in Computer Science",
                "Proactive and self-motivated research mindset",
              ]}
              benefits={[
                "Full or partial scholarship opportunities",
                "Dedicated lab workspace and computing resources",
                "Support for international conferences",
              ]}
            />
            <OpportunityCard
              title="Post-Doc & Collaborations"
              icon={Microscope}
              requirements={[
                "Ph.D. in Software Engineering, Networking, or AI",
                "Proven track record of high-quality publications",
                "Passion for leading research initiatives",
              ]}
              benefits={[
                "Access to the lab's extensive network",
                "Collaborative environment with industry partners",
                "Opportunity to lead multi-disciplinary projects",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-y border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main mb-4">Contact information</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Reach us directly by email, visit the college on the map, or message us on Facebook—no form
              required.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a
              href={MAILTO_INQUIRY}
              className="card-base p-6 flex flex-col items-center text-center hover:border-primary-action transition-all group md:items-start md:text-left"
            >
              <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action mb-4 group-hover:bg-primary-deep group-hover:text-white transition-colors">
                <Mail size={24} aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-2">Email</h3>
              <p className="text-primary-action font-semibold break-all mb-3">{LAB_EMAIL}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-action">
                Open in your mail app
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </span>
            </a>

            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-6 flex flex-col items-center text-center hover:border-primary-action transition-all group md:items-start md:text-left"
            >
              <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action mb-4 group-hover:bg-primary-deep group-hover:text-white transition-colors">
                <MapPin size={24} aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-2">Location</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                College of Computing, Prince of Songkla University
                <br />
                Phuket Campus 80, Moo 1, Vichitsongkram Road
                <br />
                Kathu, Phuket 83120, Thailand
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-action">
                Directions in Google Maps
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </span>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-6 flex flex-col items-center text-center hover:border-primary-action transition-all group md:items-start md:text-left"
            >
              <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action mb-4 group-hover:bg-primary-deep group-hover:text-white transition-colors">
                <Facebook size={24} aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-2">Facebook</h3>
              <p className="text-sm text-text-muted mb-3">SENET Research Lab</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-action">
                facebook.com/senet.lab
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </span>
            </a>
          </div>

          <div className="card-base overflow-hidden rounded-3xl border border-border-light h-[280px] sm:h-[340px] lg:h-[400px] group">
            <iframe
              title="College of Computing, PSU Phuket"
              src="https://www.google.com/maps?q=College%20of%20Computing%2C%20Prince%20of%20Songkla%20University%2C%20Phuket%20Campus%2080%2C%20M.1%20Vichitsongkram%20Road%2C%20Kathu%2C%20Phuket%2083120&z=17&iwloc=near&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <p className="text-center text-sm text-text-muted mt-6">
            Prefer email? Use{" "}
            <a href={MAILTO_INQUIRY} className="font-semibold text-primary-action hover:underline">
              {LAB_EMAIL}
            </a>{" "}
            and we will route your message to the right person.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bg-off">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Frequently Asked Questions</h2>
            <p className="text-text-muted">Quick answers to common inquiries.</p>
          </div>

          <div className="space-y-2">
            <FAQItem
              question="How can I join the lab as an undergraduate student?"
              answer="Undergraduate students are encouraged to contact our faculty members or visit our lab during office hours. We usually look for students in their 3rd or 4th year who have completed core computer science courses and show a strong interest in our research areas."
            />
            <FAQItem
              question="Are there any scholarship opportunities for graduate students?"
              answer="Yes, PSU Phuket and the SENET Lab often have research assistant ships and scholarships for qualified Master's and Ph.D. students. These are usually tied to specific research projects funded by external agencies."
            />
            <FAQItem
              question="Can I collaborate with the lab if I'm from industry?"
              answer="Absolutely. We welcome industry collaborations and often work on projects that bridge academic research with industrial needs. Email us at senet@phuket.psu.ac.th with your proposed collaboration areas."
            />
            <FAQItem
              question="What is the response time for inquiries?"
              answer="We typically aim to respond to all emails within 2-3 business days. If your inquiry is urgent, say so in the subject line."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
