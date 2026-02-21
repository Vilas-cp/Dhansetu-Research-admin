"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "@/lib/api";
import { useVerifySession } from "@/hooks/userVerifySession";

export default function ArticlePage() {
  useVerifySession();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);

    if (!id) return;

    const fetchArticle = async () => {
      try {
        const res = await apiGet(`admin/v1/article/${id}`);
        console.log(res);

        setArticle(res.data.res);

        if (res?.data.res.artDetail) {
          try {
            setBlocks(JSON.parse(res.data.res.artDetail));
          } catch (err) {
            console.error("Failed to parse artDetail:", err);
          }
        }
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const processHtmlContent = (htmlContent) => {
    if (!htmlContent) return "";

    // Unescape quotes and fix any escaped characters
    let cleanHtml = htmlContent
      .replace(/\\"/g, '"') // Fix escaped quotes
      .replace(/\\'/g, "'") // Fix escaped single quotes
      .replace(/\\\\/g, "\\"); // Fix double escapes

    return cleanHtml;
  };

  if (loading) return <p className="p-8 text-center">Loading...</p>;
  if (!article) return <p className="p-8 text-center">Article not found</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-sm">
        {/* Cover Image */}
        {article.coverImgURL && (
          <div className="w-full">
            <img
              src={article.coverImgURL}
              alt="Cover"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
          </div>
        )}

        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.artHeading}
          </h1>

          {/* Author Info */}
          <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
            <img
              src={article.adImgURL}
              alt={article.adFirstName}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 flex-shrink-0"
            />
            <div>
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                {article.adFirstName} {article.adLastName}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                @{article.adUserName}
              </p>
            </div>
          </div>

          {/* Render Blocks */}
          <div className="space-y-6 sm:space-y-8">
            {blocks.map((block) => {
              if (block.type === "text") {
                return (
                  <div
                    key={block.id}
                    className="quill-content"
                    dangerouslySetInnerHTML={{
                      __html: processHtmlContent(block.content),
                    }}
                  />
                );
              }
              if (block.type === "image") {
                return (
                  <div key={block.id} className="my-6 sm:my-8">
                    <img
                      src={block.content}
                      alt="Article image"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                  </div>
                );
              }
              if (block.type === "video") {
                return (
                  <div key={block.id} className="my-6 sm:my-8">
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <div
                        className="absolute inset-0 w-full h-full"
                        dangerouslySetInnerHTML={{
                          __html: block.content.replace(
                            'width="560" height="315"',
                            'width="100%" height="100%" style="position:absolute;top:0;left:0;"',
                          ),
                        }}
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* CSS for proper Quill content rendering */}
      <style jsx global>{`
        .quill-content {
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
        }

        .quill-content p {
          margin-bottom: 1rem;
          font-size: 16px;
          line-height: 1.6;
        }

        .quill-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
          list-style-type: decimal;
        }

        .quill-content ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
          list-style-type: disc;
        }

        .quill-content li {
          margin-bottom: 0.5rem;
          font-size: 16px;
          line-height: 1.6;
          display: list-item;
        }

        .quill-content li[data-list="ordered"] {
          list-style-type: decimal;
        }

        .quill-content li[data-list="bullet"] {
          list-style-type: disc;
        }

        .quill-content .ql-ui {
          display: none; /* Hide Quill's internal UI elements */
        }

        .quill-content strong {
          font-weight: 600;
        }

        .quill-content em {
          font-style: italic;
        }

        .quill-content u {
          text-decoration: underline;
        }

        .quill-content s {
          text-decoration: line-through;
        }

        .quill-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .quill-content code {
          background-color: #f3f4f6;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: ui-monospace, monospace;
          font-size: 0.875rem;
        }

        .quill-content pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        .quill-content pre code {
          background: none;
          padding: 0;
          color: inherit;
        }

        .quill-content h1,
        .quill-content h2,
        .quill-content h3 {
          font-weight: 600;
          margin: 1.5rem 0 1rem 0;
          line-height: 1.3;
        }

        .quill-content h1 {
          font-size: 1.875rem;
        }

        .quill-content h2 {
          font-size: 1.5rem;
        }

        .quill-content h3 {
          font-size: 1.25rem;
        }

        .quill-content a {
          color: #2563eb;
          text-decoration: underline;
        }

        .quill-content a:hover {
          color: #1d4ed8;
        }
      `}</style>
    </div>
  );
}
