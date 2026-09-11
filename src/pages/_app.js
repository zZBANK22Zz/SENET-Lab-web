import "@/styles/globals.css";
import { Outfit, Newsreader } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${outfit.variable} ${newsreader.variable} font-sans min-h-dvh`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-grain" aria-hidden />
      <Component {...pageProps} />
    </div>
  );
}
