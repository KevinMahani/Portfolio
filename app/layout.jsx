// import { Merriweather } from "next/font/google";
import { Work_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";


// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["300","400", "700"],
// });
const worksans = Work_Sans({ 
  subsets: ["latin"],
  weight: ["300","400", "700"],
 }); 

export const metadata = {
  title: "Keivan Mahani – Front-End Developer",
  description: "Portfolio and professional skills of Keivan Mahani",
  openGraph: {
    title: "Keivan Mahani – Front-End Developer",
    description: "Portfolio and professional skills of Keivan Mahani",
    url: "https://keivanmahani.netlify.app/",
    siteName: "Keivan Mahani Portfolio",
    images: [
      {
        url: "https://keivanmahani.netlify.app/Logo/Cover.png",
        width: 1200,
        height: 630,
        alt: "Keivan Mahani Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keivan Mahani – Front-End Developer",
    description: "Portfolio and professional skills of Keivan Mahani",
    images: ["https://keivanmahani.netlify.app/Logo/Cover.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
    <html lang="en">
      <body
        // className={`${merriweather.className}  antialiased bg-[#222] text-white   `}
        className={`${worksans.className}  antialiased bg-[#222] text-white   `}

      >
        <Navbar />
        <MobileNavbar />
          {children}
        <Footer />
      </body>
    </html>
    </LanguageProvider>
  );
}
