"use client";

import { useState } from "react";

const shareLinks = [
  {
    name: "Twitter",
    color: "#000000",
    hoverBg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636L18.243 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getUrl: (url, title) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    hoverBg: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    getUrl: (url, title) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    hoverBg: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    getUrl: (url, title) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },
  {
    name: "Facebook",
    color: "#1877F2",
    hoverBg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
];

export default function ShareBlog({
  title = "Loved this article?",
  url = typeof window !== "undefined" ? window.location.href : "https://yourblog.com",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative mt-20 mb-8 overflow-hidden">
      {/* Decorative background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #f97316 0%, #ec4899 60%, transparent 100%)",
        }}
      />

      <div className="rounded-2xl border border-orange-100 bg-white/80 backdrop-blur-sm px-8 py-10 shadow-[0_8px_40px_rgba(249,115,22,0.08)] sm:px-12">
        {/* Top row */}
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Sparkle emoji accent */}
          <span className="mb-1 inline-block text-3xl select-none">✨</span>

          <h2
            className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Loved this post?
          </h2>
          <p className="max-w-sm text-sm text-gray-500 leading-relaxed">
            Share it with a friend who'd find it useful — good ideas are better
            together.
          </p>
        </div>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Share
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {shareLinks.map((s) => (
            <a
              key={s.name}
              href={s.getUrl(url, title)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${s.name}`}
              className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-transparent hover:text-white hover:shadow-md"
              style={
                {
                  "--hover-bg": s.hoverBg,
                }
              }
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor =
                  s.hoverBg;
                (e.currentTarget).style.borderColor =
                  s.hoverBg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor =
                  "";
                (e.currentTarget).style.borderColor = "";
              }}
            >
              <span
                className="transition-colors duration-200"
                style={{ color: s.color }}
              >
                {s.icon}
              </span>
              <span className="group-hover:text-white transition-colors duration-200 text-gray-700">
                {s.name}
              </span>
            </a>
          ))}

          {/* Copy link button */}
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-orange-400 hover:text-orange-500 hover:shadow-md"
          >
            {copied ? (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Copy link
              </>
            )}
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Every share helps this reach someone who needs it 🙌
        </p>
      </div>
    </section>
  );
}