import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import metadataProps from "../metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.contact.title,
  description: metadataProps.contact.description,
  alternates: {
    canonical: "https://brainautotech.com/contact/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
