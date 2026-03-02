import React from 'react';
import type { UploadedFile } from './DocumentUpload';

interface FileListProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
}

const formatSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

export const FileList: React.FC<FileListProps> = ({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <div className="file-list-wrap visible">
      <div className="fl-divider"></div>
      <div className="file-items">
        {files.map(f => (
          <div
            key={f.id}
            className={`file-card ${f.status === 'valid' ? 'valid' : ''} ${
              f.status === 'error' ? 'error' : ''
            }`}
          >
            <div className="fc-icon">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="fc-info">
              <div className="fc-name">{f.file.name}</div>
              <div className="fc-meta">{formatSize(f.file.size)}</div>
            </div>
            {f.status === 'uploading' && (
              <div className="fc-badge badge-uploading">
                <svg
                  className="spin-ring"
                  viewBox="0 0 18 18"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="9" cy="9" r="7" strokeDasharray="28 14" />
                </svg>
                Verifying
              </div>
            )}
            {f.status === 'valid' && (
              <div className="fc-badge badge-valid">
                <svg
                  viewBox="0 0 16 16"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="3 8 6.5 11.5 13 5" />
                </svg>
                Ready
              </div>
            )}
            {f.status === 'error' && (
              <div className="fc-badge badge-error">
                <svg
                  viewBox="0 0 16 16"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="15" y1="1" x2="1" y2="15" />
                  <line x1="1" y1="1" x2="15" y2="15" />
                </svg>
                Error
              </div>
            )}
            <button className="fc-remove" onClick={() => onRemove(f.id)}>
              <svg viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
