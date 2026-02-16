"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Lock, Crown, Star, Sparkles, ArrowRight, X, Shield, Zap, Users, BookOpen } from "lucide-react";
import { apiGet } from "@/lib/api";

import Header from "@/components/Header";
import { Lora } from "next/font/google";
const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ArticlePage() {
  const router=useRouter();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const [accessData, setAccessData] = useState({
    access: false,
    userLoggedIn: false,
    message: "",
  });

  useEffect(() => {
    console.log(id);

    if (!id) return;

    const fetchArticle = async () => {
      try {
        const res = await apiGet(`user/v1/article/${id}`);
        console.log(res);

        if (res.data && typeof res.data.access !== "undefined") {
          setAccessData({
            access: res.data.access,
            userLoggedIn: res.data.userLoggedIn || false,
            message:
              res.data.message ||
              "You need premium subscription to view this blog.",
          });
        }

        if (res.data.access) {
          setArticle(res.data.res);

          if (res?.data.res.artDetail) {
            try {
              setBlocks(JSON.parse(res.data.res.artDetail));
            } catch (err) {
              console.error("Failed to parse artDetail:", err);
            }
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

  const handleSubscriptionClick = () => {
    console.log("Redirecting to subscription page...");
   router.push("/subscription");
  };

  const handleLoginClick = () => {
    
   router.push("/sign-in");
  };

  const handleBuySubscription = () => {
    setShowSubscriptionModal(true);
  };

  const processHtmlContent = (htmlContent) => {
    if (!htmlContent) return "";

    let cleanHtml = htmlContent
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\");

    return cleanHtml;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
       
        
        <div className="text-center space-y-8 relative z-10">
          {/* Elegant spinner */}
          {/* <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 animate-spin mx-auto">
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/30 blur-xl animate-pulse mx-auto"></div>
          </div> */}
          
          <div className="space-y-3">
            <h2 className="text-2xl font-light text-gray-700 tracking-wide">Preparing your content</h2>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render access control UI based on API response
  if (!accessData.access) {
    // User is not logged in - show login prompt
    if (!accessData.userLoggedIn) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-delay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto py-20 px-4">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/50 p-12 text-center transform hover:scale-105 transition-all duration-500">
              {/* Elegant lock icon with glow */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Lock className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-xl opacity-50"></div>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-slate-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                  Exclusive Content
                </h1>
                
                <div className="max-w-md mx-auto">
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    Discover premium insights and expertly crafted content designed for discerning readers.
                  </p>
                </div>

                {/* Floating elements */}
                <div className="flex justify-center space-x-8 mt-8">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-medium">Premium Articles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Ad-Free Experience</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleLoginClick}
                className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Continue with Login</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-sm text-slate-400 mt-6 font-light">
                Join thousands of readers who trust our platform
              </p>
            </div>
          </div>
        </div>
      );
    }

    // User is logged in but doesn't have access - show subscription prompt
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-fuchsia-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto py-20 px-4">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/50 p-12 text-center">
            {/* Crown with sparkles */}
            <div className="relative mb-8">
              <div className="w-28 h-28 mx-auto bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="w-14 h-14 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              <Star className="absolute -bottom-1 -left-1 w-5 h-5 text-orange-400 animate-pulse delay-500" />
              <div className="absolute inset-0 w-28 h-28 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-40"></div>
            </div>

           

            {/* Feature grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-violet-50/80 to-purple-50/80 backdrop-blur-sm border border-violet-100/50 hover:scale-105 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-violet-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-800 mb-2">Unlimited Articles</h3>
                <p className="text-sm text-slate-600">Access to our entire premium library</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 to-fuchsia-50/80 backdrop-blur-sm border border-purple-100/50 hover:scale-105 transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-800 mb-2">Early Access</h3>
                <p className="text-sm text-slate-600">Be first to read new content</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-fuchsia-50/80 to-pink-50/80 backdrop-blur-sm border border-fuchsia-100/50 hover:scale-105 transition-all duration-300">
                <Users className="w-8 h-8 text-fuchsia-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-800 mb-2">Exclusive Community</h3>
                <p className="text-sm text-slate-600">Connect with like-minded readers</p>
              </div>
            </div>

            <button
  
              onClick={handleBuySubscription}
              className="group relative px-12 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Unlock Premium Experience</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Stunning Subscription Modal */}
        {showSubscriptionModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Header with animated gradient */}
              <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                
                {/* Close button */}
                <button
                  onClick={() => setShowSubscriptionModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Animated crown */}
                <div className="relative text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Crown className="w-10 h-10 text-yellow-300" />
                  </div>
                  <h2 className="text-3xl font-light mb-2">Premium Awaits</h2>
                  <p className="text-purple-100 text-sm font-light">Transform your reading experience</p>
                </div>

                {/* Floating decorations */}
                <Sparkles className="absolute top-6 left-6 w-4 h-4 text-purple-300/60 animate-pulse" />
                <Star className="absolute top-12 right-12 w-3 h-3 text-fuchsia-300/60 animate-pulse delay-700" />
                <Star className="absolute bottom-8 left-8 w-4 h-4 text-pink-300/60 animate-pulse delay-1000" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Features */}
                <div className="space-y-5 mb-8">
                  {[
                    { icon: BookOpen, text: "Unlimited premium articles & guides" },
                    { icon: Zap, text: "Early access to exclusive content" },
                    { icon: Shield, text: "Ad-free, distraction-free reading" },
                    { icon: Users, text: "Join our exclusive community" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-5 h-5 text-violet-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={handleSubscriptionClick}
                  // href={"/login"}
                  className="w-full group relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Begin Your Premium Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <p className="text-center text-slate-400 text-xs mt-4 font-light">
                  Premium experience, premium content ✨
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // User has access - show the article content
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  pt-2">
      <Header/>
      <div className=" mx-auto  shadow-xl  overflow-hidden pt-2">
        {/* Premium Badge */}
        {/* <div className="px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
                Premium Content
              </span>
            </div>
          </div>
        </div> */}

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

        <div className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
            <span className={lora.className}>
                {article.artHeading}
            </span>
          
          </h1>

          {/* Author Info */}
          <div className="flex items-center mb-12 pb-8 border-b border-slate-200">
            <img
              src={article.adImgURL}
              alt={article.adFirstName}
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-full mr-5 flex-shrink-0 ring-4 ring-white shadow-lg"
            />
            <div>
              <p className="text-xl font-semibold text-slate-900">
                {article.adFirstName} {article.adLastName}
              </p>
              <p className="text-base text-slate-500">
                @{article.adUserName}
              </p>
            </div>
          </div>

          {/* Render Blocks */}
          <div className="space-y-8 sm:space-y-10">
            {blocks.map((block) => {
              if (block.type === "text") {
                return (
                  <div
                    key={block.id}
                    className="quill-content prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: processHtmlContent(block.content),
                    }}
                  />
                );
              }
              if (block.type === "image") {
                return (
                  <div key={block.id} className="my-8 sm:my-10">
                    <img
                      src={block.content}
                      alt="Article image"
                      className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl"
                    />
                  </div>
                );
              }
              if (block.type === "video") {
                return (
                  <div key={block.id} className="my-8 sm:my-10">
                    <div
                      className="relative w-full rounded-2xl overflow-hidden shadow-xl"
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

      <style jsx global>{`
        .quill-content {
          font-size: 18px;
          line-height: 1.8;
          color: #334155;
          font-weight: 400;
        }

        .quill-content p {
          margin-bottom: 1.5rem;
          font-size: 18px;
          line-height: 1.8;
        }

        .quill-content ol {
          margin: 2rem 0;
          padding-left: 2rem;
          list-style-type: decimal;
        }

        .quill-content ul {
          margin: 2rem 0;
          padding-left: 2rem;
          list-style-type: disc;
        }

        .quill-content li {
          margin-bottom: 0.75rem;
          font-size: 18px;
          line-height: 1.8;
          display: list-item;
        }

        .quill-content strong {
          font-weight: 600;
          color: #1e293b;
        }

        .quill-content em {
          font-style: italic;
        }

        .quill-content blockquote {
          border-left: 4px solid #8b5cf6;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #64748b;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .quill-content h1, .quill-content h2, .quill-content h3 {
          font-weight: 600;
          margin: 3rem 0 1.5rem 0;
          line-height: 1.3;
          color: #1e293b;
        }

        .quill-content h1 { font-size: 2.25rem; }
        .quill-content h2 { font-size: 1.875rem; }
        .quill-content h3 { font-size: 1.5rem; }

        .quill-content a {
          color: #8b5cf6;
          text-decoration: none;
          border-bottom: 1px solid #c4b5fd;
          transition: all 0.2s;
        }

        .quill-content a:hover {
          color: #7c3aed;
          border-bottom-color: #8b5cf6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}