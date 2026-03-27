import Link from "next/link";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=College+of+Computing%2C+Prince+of+Songkla+University%2C+Phuket+Campus+80%2C+M.1+Vichitsongkram+Road%2C+Kathu%2C+Phuket+83120";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              SENET <span className="font-normal opacity-80">Lab</span>
            </h3>
            <p className="text-blue-100/70 text-base mb-2 max-w-md leading-relaxed">
              <span className="text-white/90 font-medium">Software Engineering &amp; Network Technologies</span>{" "}
              research lab at the{" "}
              <a
                href="https://www.computing.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white underline-offset-4 hover:underline"
              >
                College of Computing
              </a>
              ,{" "}
              <a
                href="https://phuket.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white underline-offset-4 hover:underline"
              >
                Prince of Songkla University, Phuket Campus
              </a>
              .
            </p>
            <p className="text-blue-100/60 text-sm mb-8 max-w-md leading-relaxed">
              We work on software engineering, quality assurance, and network systems—from methods and tools to real deployments.
            </p>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-white/60">
                Contact information
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100 flex-shrink-0"
                    aria-hidden
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">Our location</h5>
                    <p className="text-sm text-blue-100/70 leading-relaxed">
                      College of Computing, Prince of Songkla University
                      <br />
                      Phuket Campus 80, Moo 1, Vichitsongkram Road
                      <br />
                      Kathu, Phuket 83120, Thailand
                    </p>
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-medium text-blue-100 hover:text-white underline-offset-4 hover:underline transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100 flex-shrink-0"
                    aria-hidden
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">Email</h5>
                    <a
                      href="mailto:senet@phuket.psu.ac.th"
                      className="text-sm text-blue-100 hover:text-white font-medium underline-offset-4 hover:underline transition-colors"
                    >
                      senet@phuket.psu.ac.th
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100 flex-shrink-0"
                    aria-hidden
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">Facebook</h5>
                    <a
                      href="https://www.facebook.com/senet.lab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-100 hover:text-white font-medium underline-offset-4 hover:underline transition-colors"
                    >
                      SENET Research Lab
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
              Research
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/ResearchPage" className="text-blue-100/70 hover:text-white transition-colors">
                  Research areas
                </Link>
              </li>
              <li>
                <Link href="/PublicationPage" className="text-blue-100/70 hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/AwardPage" className="text-blue-100/70 hover:text-white transition-colors">
                  Awards &amp; grants
                </Link>
              </li>
              <li>
                <Link href="/JoinUs" className="text-blue-100/70 hover:text-white transition-colors">
                  Contact &amp; collaboration
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
              About
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-blue-100/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/TeamPage" className="text-blue-100/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <a
                  href="https://www.computing.psu.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  College of Computing
                </a>
              </li>
              <li>
                <a
                  href="https://phuket.psu.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  PSU Phuket Campus
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-blue-100/50 text-center md:text-left max-w-xl">
            &copy; {new Date().getFullYear()} SENET Lab, College of Computing, Prince of Songkla University,
            Phuket Campus. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://www.computing.psu.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100/50 hover:text-white transition-colors"
            >
              computing.psu.ac.th
            </a>
            <a
              href="https://phuket.psu.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100/50 hover:text-white transition-colors"
            >
              phuket.psu.ac.th
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
