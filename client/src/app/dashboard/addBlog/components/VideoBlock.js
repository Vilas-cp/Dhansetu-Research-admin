import { useMemo } from "react";

export default function VideoBlock({ content, onChange }) {
  // Extract iframe src if content contains one
  const iframeSrc = useMemo(() => {
    const match = content?.match(/src="([^"]+)"/);
    return match ? match[1] : null;
  }, [content]);

  return (
    <div className="w-full">
      <textarea
        placeholder="Paste iframe code here"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full p-3 border rounded-lg mb-3 font-mono text-sm focus:ring-2 focus:ring-red-500 resize-y min-h-[100px] sm:text-base"
      />
      {iframeSrc && (
        <iframe
          key={iframeSrc} // ✅ Only reloads when src changes
          src={iframeSrc}
          className="w-full overflow-hidden rounded-lg aspect-video min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] border"
          allowFullScreen
        />
      )}
    </div>
  );
}
