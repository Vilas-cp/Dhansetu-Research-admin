import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.algoServices.apiBridge.title,
  description: metadataProps.algoServices.apiBridge.description,
  alternates: {
    canonical: "https://brainautotech.com/algo-services/api-bridge/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
