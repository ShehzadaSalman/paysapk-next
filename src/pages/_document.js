import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;600;700&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
