import { Inter } from "next/font/google";
import metadataProps from "../metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.indicator.title,
  description: metadataProps.indicator.description,
  alternates: {
    canonical: "https://brainautotech.com/indicator/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
