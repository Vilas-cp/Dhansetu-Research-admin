"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function QuillEditor({ content, onChange }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  return isClient ? (
    <div className="w-full max-w-full">
      <ReactQuill
        value={content || ""} // controlled value from parent
        onChange={onChange} 
        modules={modules}
        theme="snow"
        style={{ 
          height: "256px", // Fixed height (h-64 = 256px)
          boxSizing: "border-box"
        }}
      />
      
      {/* CSS to fix overflow and scrolling issues */}
      <style jsx global>{`
        .ql-container {
          height: 200px !important;
          overflow-y: auto !important;
          border-bottom-left-radius: 6px !important;
          border-bottom-right-radius: 6px !important;
        }
        
        .ql-editor {
          height: 100% !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          max-height: none !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        
        .ql-toolbar {
          border-top-left-radius: 6px !important;
          border-top-right-radius: 6px !important;
        }
        
        /* Custom scrollbar for better UX */
        .ql-editor::-webkit-scrollbar {
          width: 6px;
        }
        
        .ql-editor::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        .ql-editor::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .ql-editor::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  ) : (
    <div className="w-full h-64 bg-gray-50 border border-gray-200 rounded-lg" /> // better placeholder
  );
}