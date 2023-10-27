import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";
import Footer from "@/components/Utilities/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animelist",
  description: "Build by Nino Ambara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
