import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-dvh bg-bg-canvas flex flex-col">
      <Head>
        <title>Page not found · SENET Lab</title>
      </Head>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <p className="kicker mb-4">404</p>
          <h1 className="display-title text-4xl sm:text-5xl text-text-main mb-5">
            This page is not in the archive
          </h1>
          <p className="text-text-muted text-lg max-w-xl leading-relaxed mb-10">
            The address may have changed, or it never existed. Head back to the
            lab homepage, or jump to research and publications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
            <Link href="/ResearchPage" className="btn-secondary">
              Research areas
            </Link>
            <Link
              href="/PublicationPage"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-action hover:text-primary-deep"
            >
              Publications
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
