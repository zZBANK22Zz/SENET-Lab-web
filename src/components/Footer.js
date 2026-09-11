import Link from "next/link";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=College+of+Computing%2C+Prince+of+Songkla+University%2C+Phuket+Campus+80%2C+M.1+Vichitsongkram+Road%2C+Kathu%2C+Phuket+83120";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-16 pb-10 lg:pt-20 lg:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-display text-3xl italic tracking-tight mb-5">
              SENET <span className="not-italic text-lg font-sans font-medium tracking-[0.18em] uppercase opacity-70">Lab</span>
            </p>
            <p className="text-white/75 text-base mb-3 max-w-md leading-relaxed">
              <span className="text-white font-medium">Software Engineering &amp; Network Technologies</span>{" "}
              at the{" "}
              <a
                href="https://www.computing.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline-offset-4 hover:underline"
              >
                College of Computing
              </a>
              ,{" "}
              <a
                href="https://phuket.psu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline-offset-4 hover:underline"
              >
                Prince of Songkla University, Phuket Campus
              </a>
              .
            </p>
            <p className="text-white/55 text-sm mb-8 max-w-md leading-relaxed">
              Methods, tools, and deployments in software quality and networked systems.
            </p>

            <div className="space-y-4 text-sm">
              <p className="text-white/90 leading-relaxed">
                College of Computing, Prince of Songkla University
                <br />
                Phuket Campus 80, Moo 1, Vichitsongkram Road
                <br />
                Kathu, Phuket 83120, Thailand
              </p>
              <p>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white underline-offset-4 hover:underline"
                >
                  Open in Google Maps
                </a>
              </p>
              <p>
                <a href="mailto:senet@phuket.psu.ac.th" className="text-white/70 hover:text-white underline-offset-4 hover:underline">
                  senet@phuket.psu.ac.th
                </a>
                <span className="text-white/30 mx-2">·</span>
                <a
                  href="https://www.facebook.com/senet.lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white underline-offset-4 hover:underline"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="kicker text-white/70 mb-5">Research</p>
            <ul className="space-y-3">
              <li>
                <Link href="/ResearchPage" className="text-white/70 hover:text-white transition-colors">
                  Research areas
                </Link>
              </li>
              <li>
                <Link href="/PublicationPage" className="text-white/70 hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/AwardPage" className="text-white/70 hover:text-white transition-colors">
                  Awards &amp; grants
                </Link>
              </li>
              <li>
                <Link href="/JoinUs" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="kicker text-white/70 mb-5">About</p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/TeamPage" className="text-white/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <a
                  href="https://www.computing.psu.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  College of Computing
                </a>
              </li>
              <li>
                <a
                  href="https://phuket.psu.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  PSU Phuket
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-white/45 max-w-xl">
            &copy; {new Date().getFullYear()} SENET Lab, College of Computing, Prince of Songkla University,
            Phuket Campus.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.computing.psu.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white transition-colors"
            >
              computing.psu.ac.th
            </a>
            <a
              href="https://phuket.psu.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white transition-colors"
            >
              phuket.psu.ac.th
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
