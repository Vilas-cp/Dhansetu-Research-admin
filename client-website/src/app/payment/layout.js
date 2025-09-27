import { Inter } from "next/font/google";
import metadataProps from "../metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.payment.title,
  description: metadataProps.payment.description,
  alternates: {
    canonical: "https://brainautotech.com/payment/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
