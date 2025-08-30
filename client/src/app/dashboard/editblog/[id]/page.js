"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import BlockComponent from "../../addBlog/components/BlockComponent";
import AddBlockButtons from "../../addBlog/components/AddBlockButtons";
import PostSummary from "../../addBlog/components/PostSummary";
import { apiPost, apiPut, apiGet } from "@/lib/api";
import Header from "@/components/Header";

export default function BlogEditor() {
  const params = useParams();
  const router = useRouter();
  const articleId = params?.id;

  const [blocks, setBlocks] = useState([]);
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (!articleId) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await apiGet(`admin/v1/article/${articleId}`);
      
        
        if (res.status === "success") {
          const article = res.data.res;
          setTitle(article.artHeading);
          setThumbnailUrl(article.coverImgURL);
          setIsPremium(article.artType === "premium");
          setBlocks(JSON.parse(article.artDetail));
        } else {
          toast.error("Failed to fetch article");
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        toast.error("Error fetching article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  const addBlock = (type) =>
    setBlocks([...blocks, { id: Date.now(), type, content: "" }]);
  const updateBlock = (id, content) =>
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, content } : b)));
  const deleteBlock = (id) => setBlocks(blocks.filter((b) => b.id !== id));
  const moveBlockToPosition = (currentIndex, newIndex) => {
    if (newIndex < 0 || newIndex >= blocks.length || currentIndex === newIndex)
      return;
    const newBlocks = [...blocks];
    const [movedBlock] = newBlocks.splice(currentIndex, 1);
    newBlocks.splice(newIndex, 0, movedBlock);
    setBlocks(newBlocks);
  };
  const moveBlockUp = (i) => moveBlockToPosition(i, i - 1);
  const moveBlockDown = (i) => moveBlockToPosition(i, i + 1);
  const handlePositionChange = (currentIndex, newIndex) =>
    moveBlockToPosition(currentIndex, newIndex);

  const handleSubmit = async () => {
    if (!title?.trim()) return toast.error("Title is required!");
    if (!thumbnailUrl) return toast.error("Add the image URL!");
    if (!blocks.length) return toast.error("Add at least one content block!");

    const postData = {
      artHeading: title,
      coverImgURL: thumbnailUrl,
      artType: isPremium ? "premium" : "free",
      artDetail: JSON.stringify(
        blocks.map((b, i) => ({ ...b, position: i + 1 }))
      ),
    };

    try {
      let res;
      if (articleId) {
        // Update article
        console.log(postData);
        
        res = await apiPut(`admin/v1/article/${articleId}`, postData);
      } else {
        // Create article
        res = await apiPost("admin/v1/article/create", postData);
      }

      if (res.status === "success") {
        toast.success(articleId ? "Article updated!" : "Article created!");
       
      } else {
        toast.error(res.data?.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting article:", err);
      toast.error("Error submitting article");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header/>
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">📝</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Post Details</h2>
            <div className="ml-auto">
              <button
                onClick={() => setIsPremium(!isPremium)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isPremium
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {isPremium ? "⭐ Premium" : "💎 Premium"}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Post Title
              </label>
              <input
                type="text"
                placeholder="Enter your captivating blog post title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 text-xl font-medium border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Post Thumbnail
              </label>
              <input
                type="url"
                placeholder="Enter thumbnail image URL..."
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
              />
              {thumbnailUrl && (
                <div className="mt-4 relative">
                  <img
                    src={thumbnailUrl}
                    alt="Thumbnail Preview"
                    className="w-64 h-40 object-cover rounded-xl border-2 border-gray-200 shadow-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "block";
                    }}
                    onLoad={(e) => {
                      e.target.nextElementSibling.style.display = "none";
                    }}
                  />
                  <div className="hidden text-red-500 text-sm mt-2 bg-red-50 p-3 rounded-lg border border-red-200">
                    ❌ Failed to load thumbnail image. Please check the URL.
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
                    Preview
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Post Summary */}
        <PostSummary title={title} thumbnailUrl={thumbnailUrl} blocks={blocks} />

        {/* Content Blocks Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">📄</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Content Blocks</h2>
            <div className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600">
              {blocks.length} blocks
            </div>
          </div>

          <div className="space-y-6 mb-8">
            {blocks.map((block, index) => (
              <div key={block.id} className="relative">
                <BlockComponent
                  block={block}
                  index={index}
                  totalBlocks={blocks.length}
                  onUpdate={updateBlock}
                  onDelete={() => deleteBlock(block.id)}
                  onMoveUp={() => moveBlockUp(index)}
                  onMoveDown={() => moveBlockDown(index)}
                  onPositionChange={(newIndex) =>
                    handlePositionChange(index, newIndex)
                  }
                />
              </div>
            ))}

            {blocks.length === 0 && (
              <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Ready to Create?
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Start building your blog post by adding content blocks. Mix
                  text, images, and videos to tell your story.
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Use the buttons below to get started
                </div>
              </div>
            )}
          </div>

          {/* Add Block Buttons */}
          <div className="border-t border-gray-200 pt-6">
            <AddBlockButtons onAddBlock={addBlock} />
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                {articleId ? "Update Your Post" : "Ready to Publish?"}
              </h3>
              <p className="text-blue-100">
                {!title.trim()
                  ? "Add a title to publish your blog post"
                  : blocks.length === 0
                  ? "Add some content blocks to complete your post"
                  : `Your post has ${blocks.length} content blocks and is ready to go!`}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!title.trim()}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none border border-white/20"
            >
              {!title.trim()
                ? "📝 Add Title"
                : articleId
                ? "💾 Update Post"
                : "🚀 Publish Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
