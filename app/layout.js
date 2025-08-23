import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chirag Rane - Full Stack Developer | AI-ML Engineer | Data Scientist",
  description:
    "Get in touch with Chirag — full-stack developer skilled in MERN, FastAPI, and more. Fill out the form to connect about projects, freelancing, or collaborations.",
  openGraph: {
    title: "Contact Chirag",
    description:
      "Reach out to Chirag — a passionate full-stack developer, open for opportunities and collaborations.",
    url: "https://chirag-rane.vercel.app/#contact",
    siteName: "Chirag's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Chirag",
    description:
      "Get in touch with Chirag — full-stack developer skilled in MERN, FastAPI, and more.",
  },
  keywords: [
    "Chirag Portfolio",
    "Contact Chirag",
    "Full Stack Developer",
    "MERN Developer",
    "FastAPI Developer",
    "Freelance Web Developer",
  ],
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" progress={true} />
      </body>
    </html>
  );
}
