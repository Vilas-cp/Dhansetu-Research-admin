import { Metadata } from "next";
import { apiGet } from "@/lib/api";



export async function generateMetadata({ params }) {
  // Await params since it's a promise
  const { id } = await params;
  
  try {
    const response = await apiGet(`user/v1/article/${id}`);
    const data = response.data;
    if (!data) {
      return {
        title: "Article not found",
        description: "The requested article could not be found.",
      };
    }
    const title = `${data.artTitle}`;
    const description = `Explore our advanced ALGO software, featuring powerful strategies for seamless trading across multiple brokers. Achieve maximum convenience and success in your investments with DhansetuResearch. &#128222; +91 9993898621`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `https://blog.dhanseturesearch.in/blog/${id}`,
        images: [
          {
            url: data.artCover ?? "/logo/side-text.png",
            width: 1200,
            height: 630,
            alt: `${data.artTitle}'s image`,
          },
        ],
        siteName: "Dhansetu Research",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [data.artCover || "/logo/side-text.png"],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Dhansetu Research",
      description: "Explore our advanced ALGO software, featuring powerful strategies for seamless trading across multiple brokers. Achieve maximum convenience and success in your investments with DhansetuResearch. &#128222; +91 9993898621",
    };
  }
}

export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}