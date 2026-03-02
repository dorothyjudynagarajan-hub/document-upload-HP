import React, { useState, useRef } from 'react';
import { UploadZone } from './UploadZone';
import { FileList } from './FileList';
import { SendCard } from './SendCard';
import { SuccessModal } from './SuccessModal';

export interface UploadedFile {
  id: string;
  file: File;
  status: 'uploading' | 'valid' | 'error';
}

export const DocumentUpload: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFile = (file: File) => {
    if (files.length >= 5) {
      alert('Maximum 5 files allowed.');
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      alert(`"${file.name}" exceeds the 8MB limit.`);
      return;
    }

    const id = Date.now() + '_' + Math.random();
    const newFile: UploadedFile = { id, file, status: 'uploading' };
    setFiles(prev => [...prev, newFile]);

    // Simulate upload validation
    setTimeout(() => {
      setFiles(prev =>
        prev.map(f => (f.id === id ? { ...f, status: 'valid' as const } : f))
      );
    }, 1400 + Math.random() * 600);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(addFile);
      e.target.value = '';
    }
  };

  const handleSend = () => {
    const validCount = files.filter(f => f.status === 'valid').length;
    if (validCount === 0) return;

    setIsSending(true);
    setTimeout(() => {
      setShowSuccess(true);
      setIsSending(false);
    }, 2200);
  };

  const validCount = files.filter(f => f.status === 'valid').length;
  const allValid = validCount === files.length && files.length > 0;
  const hasFiles = files.length > 0;

  return (
    <>
      <div className="main-header">
        <div className="main-tag">
          <div className="main-tag-dot"></div> Action Required
        </div>
        <h1 className="main-title">
          Upload your proof of
          <br />
          roof replacement
        </h1>
        <p className="main-subtitle">
          Policy Home 942041880 · Add at least one document to confirm your completed roof work.
        </p>
      </div>

      <div className="upload-card">
        <div className="upload-card-header">
          <div className="upload-card-title">Attach Documents</div>
          <div className={`file-counter ${hasFiles ? 'has-files' : ''}`}>
            {files.length} of 5 files
          </div>
        </div>

        <UploadZone
          onFileSelect={() => fileInputRef.current?.click()}
          onFilesAdded={addFile}
          hasFiles={hasFiles}
        />

        <FileList files={files} onRemove={removeFile} />
      </div>

      <SendCard
        fileCount={files.length}
        validCount={validCount}
        allValid={allValid}
        isSending={isSending}
        onSend={handleSend}
      />

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        accept=".pdf,.jpg,.jpeg,.png,.tif,.tiff,.doc,.docx,.xls,.xlsx,.txt,.ppt,.pptx,.gif"
        onChange={handleFileInput}
      />

      <SuccessModal
        show={showSuccess}
        fileCount={validCount}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};
