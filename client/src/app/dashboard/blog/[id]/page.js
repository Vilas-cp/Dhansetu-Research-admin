"use client";

import React, { useEffect, useState } from "react";

export default function ArticlePage() {
  const article = {
    artHeading: "Exploring the Future of AI: How Generative Models are Changing the World",
    coverImgURL: "https://www.livemint.com/lm-img/img/2025/03/21/600x338/PTI03-09-2025-000110B-0_1742562114241_1742562133625.jpg",
    adFirstName: "John",
    adLastName: "Doe",
    adUserName: "john-doe",
    adImgURL: "https://randomuser.me/api/portraits/men/32.jpg",
    artDetail: JSON.stringify([
      {
        id: 1,
        type: "text",
        content: `
          <h2 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
          <p class="mb-4 text-gray-700 leading-relaxed">Artificial Intelligence is <strong>rapidly evolving</strong>, and generative models are at the forefront of this revolution. These models can create content, images, music, and even code with remarkable quality.</p>
        `,
        position: 1
      },
      {
        id: 2,
        type: "image",
        content: "https://www.livemint.com/lm-img/img/2025/03/21/600x338/PTI03-09-2025-000110B-0_1742562114241_1742562133625.jpg",
        position: 2
      },
      {
        id: 3,
        type: "text",
        content: `
          <h2 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">Applications</h2>
          <p class="mb-4 text-gray-700 leading-relaxed">Generative AI is being applied in various fields:</p>
          <ul class="list-disc list-inside ml-4 mb-4 text-gray-700 space-y-2">
            <li>Content creation for marketing and social media.</li>
            <li>Design and creative arts.</li>
            <li>Healthcare for drug discovery.</li>
            <li>Software development assistance.</li>
          </ul>
        `,
        position: 3
      },
      {
        id: 4,
        type: "video",
        content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7SBVnw7GSTk?si=aZPGXVYPCpfMCRpf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        position: 4
      },
      {
        id: 5,
        type: "text",
        content: `
          <h2 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">Conclusion</h2>
          <p class="mb-4 text-gray-700 leading-relaxed">Generative AI is not just a trend; it's shaping the future of <strong>creativity and productivity</strong>. Understanding and leveraging these models will be crucial for businesses, developers, and creators alike.</p>
        `,
        position: 5
      }
    ])
  };
  
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (article?.artDetail) {
      try {
        setBlocks(JSON.parse(article.artDetail));
      } catch (err) {
        console.error("Failed to parse artDetail:", err);
      }
    }
  }, []);

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
          {/* Article Heading */}
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
              <p className="text-sm sm:text-base text-gray-600">@{article.adUserName}</p>
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
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <div 
                        className="absolute inset-0 w-full h-full"
                        dangerouslySetInnerHTML={{ 
                          __html: block.content.replace(
                            'width="560" height="315"',
                            'width="100%" height="100%" style="position: absolute; top: 0; left: 0;"'
                          )
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