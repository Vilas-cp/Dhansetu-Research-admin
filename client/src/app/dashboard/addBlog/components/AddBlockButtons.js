import { Type, Image, Video } from "lucide-react";



export default function AddBlockButtons({ onAddBlock }) {
  const buttons = [
    { type: "text", icon: Type, label: "Text", color: "red" },
    { type: "image", icon: Image, label: "Image", color: "red" },
    { type: "video", icon: Video, label: "Video", color: "red" },
  ];
  return (
    <div className="flex gap-3 mb-4">
      {buttons.map((btn) => (
        <button
          key={btn.type}
          onClick={() => onAddBlock(btn.type)}
          className={`flex items-center gap-2 px-4 py-2 bg-${btn.color}-600 text-white rounded-lg`}
        >
          <btn.icon size={16} />
          {btn.label}
        </button>
      ))}
    </div>
  );
}
