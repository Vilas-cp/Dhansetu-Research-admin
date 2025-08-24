"use client";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useCallback } from "react";

export default function QuillEditor({ content, onChange, placeholder }) {
  const contentRef = useRef(content);
  const isInternalChange = useRef(false);
  
  const { quill, quillRef } = useQuill({
    theme: "snow",
    placeholder: placeholder || "Start writing...",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "blockquote", "code-block"],
        ["clean"],
      ],
    },
  });

  // Memoized change handler
  const handleChange = useCallback(() => {
    if (!quill || isInternalChange.current) return;
    
    const html = quill.root.innerHTML;
    const cleanHtml = html === "<p><br></p>" ? "" : html;
    
    if (cleanHtml !== contentRef.current) {
      contentRef.current = cleanHtml;
      onChange(cleanHtml);
    }
  }, [quill, onChange]);

  // Single useEffect for all Quill setup
  useEffect(() => {
    if (!quill) return;

    // Set initial content if different
    if (content !== contentRef.current) {
      isInternalChange.current = true;
      quill.root.innerHTML = content || "";
      contentRef.current = content;
      isInternalChange.current = false;
    }

    // Setup change listener
    quill.on("text-change", handleChange);

    // Cleanup function
    return () => {
      quill.off("text-change", handleChange);
    };
  }, [quill, content, handleChange]);

  return (
    <div 
      ref={quillRef} 
      style={{ height: "200px" }} 
      className="bg-white border rounded-lg" 
    />
  );
}