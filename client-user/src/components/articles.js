"use client";
import React, { useEffect, useState } from "react";
import {
  User,
  Share2,
  Check,
  Copy,
  Calendar,
  Clock,
  ArrowRight,
  Crown,
  Loader2,
} from "lucide-react";
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
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

// Share Dialog Component
const ShareDialog = ({ isOpen, onClose, articleLink, onCopy, copied }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md border-0 shadow-2xl">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-slate-800">
          Share Article
        </DialogTitle>
        <DialogDescription className="text-slate-600">
          Copy the link below to share this article with others.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-3 mt-4">
        <div className="grid flex-1 gap-2">
          <Input
            value={articleLink}
            readOnly
            className="truncate border-slate-200 focus:border-blue-400 focus:ring-blue-100"
          />
        </div>
        <Button
          type="submit"
          size="sm"
          className="px-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          onClick={onCopy}
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
);

// Article Actions Component
const ArticleActions = ({ article, onShare }) => (
  <div className="flex items-center space-x-2 transition-opacity duration-200">
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => onShare(e, article.artId)}
      className="h-9 w-9 rounded-full bg-white/90 hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-sm"
      title="Share article"
    >
      <Share2 className="w-4 h-4" />
    </Button>
  </div>
);

// Author Info Component
const AuthorInfo = ({ article }) => (
  <div className="flex items-center space-x-3 mt-4">
    <div className="relative">
      <img
        src={article.adImgURL}
        alt={`${article.adFirstName} ${article.adLastName}`}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
      />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-slate-800">
        {article.adFirstName} {article.adLastName}
      </span>
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <span>@{article.adUserName}</span>
        <span>•</span>
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>5 min read</span>
        </div>
      </div>
    </div>
  </div>
);

// Article Card Component
const ArticleCard = ({ article, index, isLast, onShare }) => (
  <article className="group cursor-pointer mb-8">
    <Link href={`/blog/${article.artId}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200">
        {/* Article Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.coverImgURL}
            alt={article.artHeading}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

          {/* Share Button Overlay */}
          <div className="absolute top-4 right-4">
            <ArticleActions article={article} onShare={onShare} />
          </div>

          {/* Article Type Badge */}
          <div className="absolute bottom-4 left-4">
            <span
              className={`flex items-center gap-1 px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${
                article.artType === "premium"
                  ? "bg-amber-500/90 text-white"
                  : ""
              }`}
            >
              {article.artType === "premium" && (
                <Crown size={14} className="inline-block" />
              )}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {article.artHeading}
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {article.artDescription ||
              "Discover the latest insights and trends in technology, design, and innovation. Join us as we explore the future of digital experiences and creative solutions."}
          </p>

          <AuthorInfo article={article} />

          {/* Read More */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-end space-x-1 text-blue-600 text-sm font-medium group-hover:text-blue-700">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </article>
);

// Featured Article Component
const FeaturedArticle = ({ article, onShare }) => (
  <div className="mb-12">
    <Link href={`/blog/${article.artId}`} className="group block">
      <div className="relative h-96 rounded-3xl overflow-hidden bg-slate-900">
        <img
          src={article.coverImgURL}
          alt={article.artHeading}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="p-8 text-white w-full">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium">
                Featured
              </span>
              <span className="text-sm opacity-90">5 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {article.artHeading}
            </h1>

            <p className="text-lg opacity-90 mb-6 line-clamp-2 max-w-2xl">
              Explore the cutting-edge developments that are shaping our digital
              future.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={article.adImgURL}
                  alt={`${article.adFirstName} ${article.adLastName}`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <div className="font-semibold">
                    {article.adFirstName} {article.adLastName}
                  </div>
                  <div className="text-sm opacity-75">March 15, 2024</div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => onShare(e, article.artId)}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

// Loading State Component
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-20 min-h-screen">
    <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
    <p className="text-slate-600 text-lg font-medium">Loading articles...</p>
  </div>
);

// Empty State Component
const EmptyState = () => (
  <div className="text-center py-16">
    <div className="mx-auto w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mb-6">
      <User className="w-16 h-16 text-slate-400" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">No articles yet</h3>
    <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
      Check back soon for inspiring stories, insights, and the latest updates
      from our community of writers.
    </p>
  </div>
);

const ArticlesGrid = () => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [currentArticleLink, setCurrentArticleLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        setLoading(true);
        const res = await apiGet("user/v1/articles/all");
        setArticles(res?.data.res || []);
      } catch (err) {
        toast.error("Error occurred", err);
      } finally {
        setLoading(false);
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
    <div className="min-h-screen bg-slate-50">
      <ShareDialog
        isOpen={showShareDialog}
        onClose={setShowShareDialog}
        articleLink={currentArticleLink}
        onCopy={copyToClipboard}
        copied={copied}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <LoadingState />
        ) : articles.length > 0 ? (
          <>
            {/* Featured Article */}
            <FeaturedArticle article={articles[0]} onShare={handleShareClick} />

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <ArticleCard
                  key={article.artId}
                  article={article}
                  index={index + 1}
                  isLast={index === articles.length - 2}
                  onShare={handleShareClick}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
};

export default ArticlesGrid;