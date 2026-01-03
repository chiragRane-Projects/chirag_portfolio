import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // Assuming you set this up via Shadcn
import Grain from "@/components/ui/Grain";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '700', '900'] 
});

export const metadata = {
  title: "Chirag Vaibhav Rane | Portfolio",
  description: "Software Engineer & Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Grain/>
      </body>
    </html>
  );
}