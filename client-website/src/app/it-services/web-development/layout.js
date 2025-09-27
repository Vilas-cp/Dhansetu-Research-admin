import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.itServices.webDevelopment.title,
  description: metadataProps.itServices.webDevelopment.description,
  alternates: {
    canonical: "https://brainautotech.com/it-services/web-development/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
