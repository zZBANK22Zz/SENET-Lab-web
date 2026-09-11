import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="SENET Lab — software engineering and network technologies research at the College of Computing, Prince of Songkla University, Phuket Campus."
        />
        <meta property="og:title" content="SENET Lab · PSU Phuket" />
        <meta
          property="og:description"
          content="Software engineering, testing, and networks research at Prince of Songkla University, Phuket Campus."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="antialiased bg-bg-canvas text-text-main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
