import React, { useState } from 'react';

interface UploadZoneProps {
  onFileSelect: () => void;
  onFilesAdded: (file: File) => void;
  hasFiles: boolean;
}

export const UploadZone: React.FC<UploadZoneProps> = ({
  onFileSelect,
  onFilesAdded,
  hasFiles,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    Array.from(e.dataTransfer.files).forEach(onFilesAdded);
  };

  return (
    <div className={`upload-zone-outer ${hasFiles ? 'compact' : ''}`}>
      <div
        className={`upload-zone ${isDragOver ? 'drag-over' : ''}`}
        onClick={onFileSelect}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="uz-icon">
          <svg viewBox="0 0 24 24">
            <path d="M20 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4M16 8l-4-4-4 4M12 4v13" />
          </svg>
        </div>
        <div className="uz-headline">Drag & drop files here</div>
        <div className="uz-sub">
          or choose files from your device — max 5 files, 8MB each
        </div>
        <button
          className="uz-btn"
          onClick={e => {
            e.stopPropagation();
            onFileSelect();
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
          Choose Files
        </button>
        <div className="uz-formats">
          <span className="fmt">PDF</span>
          <span className="fmt">JPG</span>
          <span className="fmt">PNG</span>
          <span className="fmt">TIFF</span>
          <span className="fmt">DOCX</span>
          <span className="fmt">XLS</span>
          <span className="fmt">PPT</span>
        </div>
      </div>
    </div>
  );
};




