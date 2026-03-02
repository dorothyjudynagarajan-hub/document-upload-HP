import React from 'react';

interface SuccessModalProps {
  show: boolean;
  fileCount: number;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  show,
  fileCount,
  onClose,
}) => {
  if (!show) return null;

  return (
    <div className="success-overlay show">
      <div className="success-modal">
        <div className="success-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="success-title">Documents Sent!</div>
        <div className="success-sub">
          Your proof of roof replacement has been submitted to Allstate. We'll review your
          documents and update your policy accordingly.
        </div>
        <div className="success-meta">
          <div className="sm-item">
            <div className="sm-value">{fileCount}</div>
            <div className="sm-label">Files Sent</div>
          </div>
          <div className="sm-item">
            <div className="sm-value">942041880</div>
            <div className="sm-label">Policy</div>
          </div>
          <div className="sm-item">
            <div className="sm-value">3–5</div>
            <div className="sm-label">Days Review</div>
          </div>
        </div>
        <button className="success-btn" onClick={onClose}>
          Back to Policy Overview
        </button>
      </div>
    </div>
  );
};
