"use client";
import React, { useEffect, useState } from "react";
import { User, Share2, Check, Copy, Trash2, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { apiDelete, apiGet } from "@/lib/api";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import toast from "react-hot-toast";

// Share Dialog Component
const ShareDialog = ({ isOpen, onClose, articleLink, onCopy, copied }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share Article</DialogTitle>
        <DialogDescription>
          Copy the link below to share this article with others.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Input value={articleLink} readOnly className="truncate" />
        </div>
        <Button type="submit" size="sm" className="px-3" onClick={onCopy}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy</span>
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

// Delete Confirmation Dialog Component
const DeleteConfirmationDialog = ({
  isOpen,
  onClose,
  article,
  onConfirm,
  isDeleting,
}) => (
  <AlertDialog open={isOpen} onOpenChange={onClose}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Article</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete "{article?.artHeading}"? This action
          cannot be undone and will permanently remove the article.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={onConfirm}
          disabled={isDeleting}
          className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
        >
          {isDeleting ? "Deleting..." : "Delete Article"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Article Actions Component
const ArticleActions = ({ article, onShare, onEdit, onDelete }) => (
  <div className="flex items-center space-x-1 mb-2">
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => onShare(e, article.artId)}
      className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600"
      title="Share article"
    >
      <Share2 className="w-4 h-4" />
    </Button>
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => onEdit(e, article)}
      className="h-8 w-8 rounded-full hover:bg-green-50 hover:text-green-600"
      title="Edit article"
    >
      <Edit className="w-4 h-4" />
    </Button>
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => onDelete(e, article)}
      className="h-8 w-8 rounded-full hover:bg-red-50 hover:text-red-600"
      title="Delete article"
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  </div>
);

// Author Info Component
const AuthorInfo = ({ article }) => (
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
      <span className="text-sm text-gray-500">@{article.adUserName}</span>
    </div>
  </div>
);

// Article Card Component
const ArticleCard = ({ article, index, isLast, onShare, onEdit, onDelete }) => (
  <div
    className={`flex items-center p-6 bg-white my-2 transition-all duration-200 group rounded-lg shadow-sm hover:shadow-md ${
      !isLast ? "border-b border-gray-100" : ""
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
        <AuthorInfo article={article} />
      </div>
    </Link>

    <div className="flex flex-col items-end">
      <ArticleActions
        article={article}
        onShare={onShare}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <img
        src={article.coverImgURL}
        alt={article.artHeading}
        className="w-20 h-20 rounded-lg object-cover"
      />
    </div>
  </div>
);

// Empty State Component
const EmptyState = () => (
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
);

const ArticlesGrid = () => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [currentArticleLink, setCurrentArticleLink] = useState("");
  const [currentArticleToDelete, setCurrentArticleToDelete] = useState(null);
  const [copied, setCopied] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ added
  const router = useRouter();

  useEffect(() => {
    const getAllArticles = async () => {
      try {
        setIsLoading(true); // ✅ added
        const res = await apiGet("admin/v1/articles/all");
        setArticles(res?.data.res || []);
      } catch (err) {
        toast.error("Error occurred", err);
      } finally {
        setIsLoading(false); // ✅ added
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

  const handleEditClick = (e, article) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/dashboard/editblog/${article.artId}`);
  };

  const handleDeleteClick = (e, article) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentArticleToDelete(article);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!currentArticleToDelete) return;

    setIsDeleting(true);
    try {
      const response = await apiDelete(
        `admin/v1/article/${currentArticleToDelete.artId}`
      );

      if (response?.status === "success") {
        setArticles((prevArticles) =>
          prevArticles.filter(
            (article) => article.artId !== currentArticleToDelete.artId
          )
        );
        toast.success("Article deleted successfully");
      } else {
        toast.error("Failed to delete article");
      }
    } catch (error) {
      toast.error("Error deleting article", error);
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
      setCurrentArticleToDelete(null);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentArticleLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blogs" />

      <ShareDialog
        isOpen={showShareDialog}
        onClose={setShowShareDialog}
        articleLink={currentArticleLink}
        onCopy={copyToClipboard}
        copied={copied}
      />

      <DeleteConfirmationDialog
        isOpen={showDeleteDialog}
        onClose={setShowDeleteDialog}
        article={currentArticleToDelete}
        onConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#1e3a8a]" />
            </div>
          ) : (
            articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
                isLast={index === articles.length - 1}
                onShare={handleShareClick}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            ))
          )}
        </div>

        {!isLoading && articles.length === 0 && <EmptyState />}
      </main>
    </div>
  );
};
export default ArticlesGrid;