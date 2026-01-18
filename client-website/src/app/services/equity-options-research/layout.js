import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.algoServices.equity.title,
  description: metadataProps.algoServices.equity.description,
  alternates: {
    canonical: "https://dhanseturesearch.com/algo-services/algo-trading/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
