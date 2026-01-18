import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terms & Condition - Dhansetu Research",
  description: "Dhansetu Research",
  alternates: {
    canonical: "https://dhanseturesearch.com/terms/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
