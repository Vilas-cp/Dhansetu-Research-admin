import QuillEditor from "./Quilleditor";
import ImageBlock from "./Imageblock";
import VideoBlock from "./VideoBlock";
import BlockControls from "./BlockControls";
import BlockHeader from "./BlockHeader";

export default function BlockComponent({
  block, index, totalBlocks, onUpdate, onDelete, onMoveUp, onMoveDown, onPositionChange
}) {
  const renderContent = () => {
    switch (block.type) {
      case "text": return <QuillEditor content={block.content||""} onChange={(c) => onUpdate(block.id, c)} />;
      case "image": return <ImageBlock content={block.content} onChange={(c) => onUpdate(block.id, c)} />;
      case "video": return <VideoBlock content={block.content} onChange={(c) => onUpdate(block.id, c)} />;
      default: return null;
    }
  };

  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="flex items-start gap-4">
        <BlockControls
          index={index} totalBlocks={totalBlocks}
          onMoveUp={onMoveUp} onMoveDown={onMoveDown} onPositionChange={onPositionChange} onDelete={onDelete}
        />
        <div className="flex-1">
          <BlockHeader type={block.type} />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
