import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.algoServices.autoBuyAndSell.title,
  description: metadataProps.algoServices.autoBuyAndSell.description,
  alternates: {
    canonical:
      "https://brainautotech.com/algo-services/auto-buy-and-sell-signal/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
