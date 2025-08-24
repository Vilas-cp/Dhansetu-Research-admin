import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";

export default function BlockControls({
  index,
  totalBlocks,
  onMoveUp,
  onMoveDown,
  onDelete,
}) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-16">
      {/* Display-only block number */}
      <div className="w-14 h-8 flex items-center justify-center text-sm border rounded bg-gray-50">
        {index + 1}
      </div>

      {/* Control buttons */}
      <div className="flex flex-col gap-1">
        <button
          onClick={onMoveUp}
          disabled={index === 0}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowUp size={14} />
        </button>
        <button
          onClick={onMoveDown}
          disabled={index === totalBlocks - 1}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowDown size={14} />
        </button>
        <button
          onClick={onDelete}
          className="p-1 rounded hover:bg-red-100 text-red-600"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
