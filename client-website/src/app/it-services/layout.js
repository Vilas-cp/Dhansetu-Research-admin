import { Inter } from "next/font/google";
import metadataProps from "../metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.itServices.title,
  description: metadataProps.itServices.description,
  alternates: {
    canonical: "https://brainautotech.com/it-services/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
