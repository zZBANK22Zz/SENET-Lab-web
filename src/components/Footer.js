import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              SENET <span className="font-normal opacity-80">Lab</span>
            </h3>
            <p className="text-blue-100/70 text-base mb-8 max-w-sm leading-relaxed">
              Pioneering research in software engineering and network technologies 
              to architect the future of intelligent digital ecosystems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100 hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-100 hover:bg-white/10 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Research</h4>
            <ul className="space-y-4">
              <li><Link href="/PublicationPage" className="text-blue-100/70 hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="#" className="text-blue-100/70 hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link href="#" className="text-blue-100/70 hover:text-white transition-colors">Global Partners</Link></li>
              <li><Link href="#" className="text-blue-100/70 hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">About Us</h4>
            <ul className="space-y-4">
              <li><Link href="/TeamPage" className="text-blue-100/70 hover:text-white transition-colors">Our Scholars</Link></li>
              <li><Link href="#" className="text-blue-100/70 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link href="#" className="text-blue-100/70 hover:text-white transition-colors">Symposiums</Link></li>
              <li><Link href="/JoinUs" className="text-blue-100/70 hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-blue-100/50">
            &copy; {new Date().getFullYear()} SENET Research Lab. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
             <a href="#" className="text-blue-100/50 hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="text-blue-100/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}