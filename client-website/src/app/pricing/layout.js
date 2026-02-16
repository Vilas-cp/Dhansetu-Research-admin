import { Inter } from "next/font/google";
import metadataProps from "../metadataProps";
import { Toaster } from "react-hot-toast";
import { duration } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.pricing.title,
  description: metadataProps.pricing.description,
  alternates: {
    canonical: "https://dhanseturesearch.com/pricing/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
