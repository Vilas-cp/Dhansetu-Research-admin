import { Type, Image, Video } from "lucide-react";



export default function BlockHeader({ type }) {
  const config = {
    text: { icon: Type, label: "Text Block", color: "blue" },
    image: { icon: Image, label: "Image Block", color: "green" },
    video: { icon: Video, label: "Video Block", color: "red" },
  };
  const { icon: IconComponent, label, color } = config[type];
  return (
    <div className="flex items-center gap-2 mb-2">
      <IconComponent size={18} className={`text-${color}-600`} />
      <span className="font-semibold text-gray-700">{label}</span>
    </div>
  );
}
