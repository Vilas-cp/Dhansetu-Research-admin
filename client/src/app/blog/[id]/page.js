"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "@/lib/api"; 

export default function ArticlePage() {
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
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: block.content }}
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
                            'width="100%" height="100%" style="position:absolute;top:0;left:0;"'
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
    </div>
  );
}
