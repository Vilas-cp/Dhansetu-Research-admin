import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.algoServices.strategyDevelopment.title,
  description: metadataProps.algoServices.strategyDevelopment.description,
  alternates: {
    canonical: "https://brainautotech.com/algo-services/strategy-development/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
