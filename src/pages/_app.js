import { Raleway, Manrope } from "next/font/google";
import Footer from "org/components/Footer";
import "org/styles/globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
  variable: "--font-raleway",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${raleway.variable} ${manrope.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
