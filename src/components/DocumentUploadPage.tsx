


import React, { useState, useRef } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Stepper } from './Stepper';
import { HelpPanel } from './HelpPanel';
import { UploadZone } from './UploadZone';
import { FileList } from './FileList';
import { SendCard } from './SendCard';
import { ReviewPage } from './ReviewPage';
import { ConfirmPage } from './ConfirmPage';
import { PolicyOverview } from './PolicyOverview';
import type { UploadedFile } from './DocumentUpload';

type Step = 'overview' | 'upload' | 'review' | 'confirm';

export const DocumentUploadPage: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>('upload');
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
      setCurrentStep('review');
      setIsSending(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setCurrentStep('confirm');
  };

  const handleBackToUpload = () => {
    setCurrentStep('upload');
  };

  const handleBackToDashboard = () => {
    setCurrentStep('overview');
  };

  const validCount = files.filter(f => f.status === 'valid').length;
  const allValid = validCount === files.length && files.length > 0;
  const hasFiles = files.length > 0;

  // Show Policy Overview without sidebars
  if (currentStep === 'overview') {
    return (
      <>
        <Navigation />
        <div className="page no-sidebars">
          <main className="main-content wide">
            <PolicyOverview />
          </main>
        </div>
        <Footer />
      </>
    );
  }

  // At this point, TypeScript knows currentStep is 'upload' | 'review' | 'confirm'
  return (
    <>
      <Navigation />
      <Stepper 
        hasFiles={hasFiles} 
        allValid={allValid}
        currentStep={currentStep}
      />
      <div className="page with-horizontal-stepper">
        <main className="main-content">
          {currentStep === 'upload' && (
            <>
              <div className="main-header">
                <div className="main-tag">
                  <div className="main-tag-dot"></div> Action Required
                </div>
                <h1 className="main-title">
                  Upload your evidence of roof replacement
                </h1>
                <p className="main-subtitle">
                  Policy Home 942041880 · Add at least one document to confirm your completed
                  roof work.
                </p>
              </div>

              <div className="info-banner">
                <div className="info-banner-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div className="info-banner-content">
                  <div className="info-banner-text">
                    You may be eligible for a roof replacement discount if you had changed your roof within the last 12 months. Partial replacement and repairs may not be eligible.
                  </div>
                </div>
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
            </>
          )}

          {currentStep === 'review' && (
            <ReviewPage 
              files={files}
              onSubmit={handleSubmit}
              onBack={handleBackToUpload}
            />
          )}

          {currentStep === 'confirm' && (
            <ConfirmPage 
              fileCount={files.length}
              onBackToDashboard={handleBackToDashboard}
            />
          )}
        </main>

        <HelpPanel />
      </div>
      <Footer />
    </>
  );
};











