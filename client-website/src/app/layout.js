import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import metadataProps from "./metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.home.title,
  description: metadataProps.home.description,
  alternates: {
    canonical: "https://brainautotech.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="AW-16524242470" />
    </html>
  );
}
