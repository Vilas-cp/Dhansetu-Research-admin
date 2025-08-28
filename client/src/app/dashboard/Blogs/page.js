"use client";
import React, { useEffect, useState } from "react";
import { User, Share2, Check, Copy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { apiGet } from "@/lib/api";

const ArticlesGrid = () => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [currentArticleLink, setCurrentArticleLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        const res = await apiGet("admin/v1/articles/all");
        
        setArticles(res?.data.res || []);
      } catch (err) {
        console.error("Error occurred", err);
      }
    };
    getAllArticles();
  }, []);

  const handleShareClick = (e, articleId) => {
    e.preventDefault();
    e.stopPropagation();
    const articleLink = `${window.location.origin}/blog/${articleId}`;
    setCurrentArticleLink(articleLink);
    setShowShareDialog(true);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentArticleLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Share Dialog using shadcn */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Article</DialogTitle>
            <DialogDescription>
              Copy the link below to share this article with others.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input value={currentArticleLink} readOnly className="truncate" />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Articles List */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-hidden">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`flex items-center p-6 bg-white my-2 transition-colors duration-200 group rounded-lg shadow-sm ${
                index !== articles.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <Link
                href={`/blog/${article.artId}`}
                className="flex-1 min-w-0 flex items-start"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-500 transition-colors duration-200 mb-2">
                    {article.artHeading}
                  </h2>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={article.adImgURL}
                      alt={`${article.adFirstName} ${article.adLastName}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700">
                        {article.adFirstName} {article.adLastName}
                      </span>
                      <span className="text-sm text-gray-500">
                        @{article.adUserName}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Cover Image and Share Button */}
              <div className="flex flex-col items-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => handleShareClick(e, article.artId)}
                  className="mb-2 h-8 w-8 rounded-full"
                  title="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <img
                  src={article.coverImgURL}
                  alt={article.artHeading}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-16">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">Check back later for new content!</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ArticlesGrid;
