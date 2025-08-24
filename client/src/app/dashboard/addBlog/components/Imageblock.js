

export default function ImageBlock({ content, onChange }) {
  return (
    <div>
      <input
        type="url"
        placeholder="Enter image URL"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
      {content && (
        <img
          src={content}
          alt="Preview"
          className="max-w-full h-auto rounded-lg border shadow-sm"
        />
      )}
    </div>
  );
}
