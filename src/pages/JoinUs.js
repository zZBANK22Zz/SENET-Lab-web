import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Facebook, BookOpen, GraduationCap, Microscope, CheckCircle2, ExternalLink } from "lucide-react";

const LAB_EMAIL = "senet@phuket.psu.ac.th";
const FACEBOOK_URL = "https://www.facebook.com/senet.lab";
const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=College+of+Computing%2C+Prince+of+Songkla+University%2C+Phuket+Campus+80%2C+M.1+Vichitsongkram+Road%2C+Kathu%2C+Phuket+83120";
const MAILTO_INQUIRY = `mailto:${LAB_EMAIL}?subject=${encodeURIComponent("SENET Lab inquiry")}&body=${encodeURIComponent("Hello SENET Lab,\n\n")}`;

const tracks = [
  {
    index: "01",
    title: "Undergraduate research",
    icon: BookOpen,
    requirements: [
      "3rd or 4th-year student in Computing or Software Engineering",
      "Minimum GPA of 3.00",
      "Interest in software engineering or networks",
    ],
    benefits: [
      "Hands-on work on live research",
      "Mentorship from faculty and senior students",
      "Paths to publication and awards",
    ],
  },
  {
    index: "02",
    title: "Graduate studies",
    icon: GraduationCap,
    requirements: [
      "B.Eng or B.Sc in a related field",
      "Solid computer science foundation",
      "Self-directed research habits",
    ],
    benefits: [
      "Full or partial scholarship opportunities",
      "Lab workspace and computing resources",
      "Support for international conferences",
    ],
  },
  {
    index: "03",
    title: "Post-doc & collaborations",
    icon: Microscope,
    requirements: [
      "Ph.D. in software engineering, networking, or a related area",
      "A record of peer-reviewed publications",
      "Interest in leading research initiatives",
    ],
    benefits: [
      "Access to the lab network",
      "Room to work with industry partners",
      "Space to lead multi-disciplinary projects",
    ],
  },
];

const faqs = [
  {
    question: "How can I join the lab as an undergraduate?",
    answer:
      "Write to faculty or visit during office hours. We usually look for 3rd or 4th year students who have finished core computing courses and can show interest in our research areas.",
  },
  {
    question: "Are there scholarships for graduate students?",
    answer:
      "PSU Phuket and SENET often have research assistantships and scholarships for qualified Master's and Ph.D. students. These are usually tied to funded projects.",
  },
  {
    question: "Can industry partners work with the lab?",
    answer:
      "Yes. Email senet@phuket.psu.ac.th with the collaboration you have in mind. We regularly work on problems that sit between academic research and industrial needs.",
  },
  {
    question: "How quickly do you reply?",
    answer:
      "We aim to answer email within 2–3 business days. If the matter is time-sensitive, say so in the subject line.",
  },
];

const JoinUs = () => {
  return (
    <div className="min-h-dvh bg-bg-canvas">
      <Head>
        <title>Contact · SENET Lab</title>
      </Head>
      <Navbar />

      <main id="main">
        <section className="py-16 lg:py-24 border-b border-border-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">Contact &amp; joining</p>
            <h1 className="display-title text-4xl md:text-5xl lg:text-6xl text-text-main mb-6 max-w-2xl">
              Work with the lab
            </h1>
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              Students, researchers, and partners can write, visit, or message
              us. Pick a track below, then use the contact details—no form required.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="display-title text-3xl text-text-main mb-3">Research tracks</h2>
            <p className="text-text-muted mb-12 max-w-xl">
              Find the path that matches your academic or collaboration goals.
            </p>

            <div className="divide-y divide-border-light border-y border-border-light">
              {tracks.map(({ index, title, icon: Icon, requirements, benefits }) => (
                <article key={title} className="py-10 lg:py-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <p className="font-display italic text-accent-warm text-xl mb-3">{index}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-primary-deep" aria-hidden />
                      <h3 className="display-title text-2xl text-text-main">{title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <h4 className="text-xs font-semibold text-text-muted mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-text-muted">
                          <CheckCircle2 size={14} className="text-primary-action mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-4">
                    <h4 className="text-xs font-semibold text-text-muted mb-3">What you get</h4>
                    <ul className="space-y-2">
                      {benefits.map((ben) => (
                        <li key={ben} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-warm flex-shrink-0" />
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-bg-white border-y border-border-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="display-title text-3xl lg:text-4xl text-text-main mb-4">Contact</h2>
            <p className="text-text-muted text-lg max-w-xl leading-relaxed mb-10">
              Reach us by email, map, or Facebook.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a
                href={MAILTO_INQUIRY}
                className="rounded-2xl bg-bg-canvas p-6 group hover:shadow-soft transition-shadow duration-200"
              >
                <Mail size={22} className="text-primary-action mb-4" aria-hidden />
                <h3 className="text-sm font-semibold text-text-main mb-2">Email</h3>
                <p className="text-primary-action font-semibold break-all mb-3">{LAB_EMAIL}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-action">
                  Open in your mail app
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </span>
              </a>

              <a
                href={MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-bg-canvas p-6 group hover:shadow-soft transition-shadow duration-200"
              >
                <MapPin size={22} className="text-primary-action mb-4" aria-hidden />
                <h3 className="text-sm font-semibold text-text-main mb-2">Location</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  College of Computing, Prince of Songkla University
                  <br />
                  Phuket Campus 80, Moo 1, Vichitsongkram Road
                  <br />
                  Kathu, Phuket 83120, Thailand
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-action">
                  Directions in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </span>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-bg-canvas p-6 group hover:shadow-soft transition-shadow duration-200"
              >
                <Facebook size={22} className="text-primary-action mb-4" aria-hidden />
                <h3 className="text-sm font-semibold text-text-main mb-2">Facebook</h3>
                <p className="text-sm text-text-muted mb-3">SENET Research Lab</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-action">
                  facebook.com/senet.lab
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </span>
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] h-[280px] sm:h-[340px] lg:h-[400px] group">
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
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="display-title text-3xl text-text-main mb-3">Questions we hear often</h2>
            <p className="text-text-muted mb-12 max-w-xl">Direct answers. No accordion hunt.</p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {faqs.map((item) => (
                <article key={item.question}>
                  <h3 className="font-semibold text-text-main mb-3 leading-snug">{item.question}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;
