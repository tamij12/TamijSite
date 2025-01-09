import { Inconsolata, Jersey_20, Sixtyfour } from "next/font/google";
import "./globals.css";

const jersey = Jersey_20({
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-jersey", 
});

const sixtyfour = Sixtyfour({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sixtyfour",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
});

export const metadata = {
  title: "TamijSite",
  description: "ByTania",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${jersey.variable} ${sixtyfour.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
