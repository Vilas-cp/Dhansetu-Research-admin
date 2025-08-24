

export default function PostSummary({ title, thumbnailUrl, blocks }) {
  if (!title && !thumbnailUrl && blocks.length === 0) return null;
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 border">
      <h3 className="font-semibold mb-2">Post Summary</h3>
      <div>Title: {title || "❌ Not set"}</div>
      <div>Thumbnail: {thumbnailUrl ? "✅ Set" : "❌ Not set"}</div>
      <div>Total Blocks: {blocks.length}</div>
    </div>
  );
}
