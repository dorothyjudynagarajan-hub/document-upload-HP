import React from 'react';

interface ConfirmPageProps {
  fileCount: number;
  onBackToDashboard: () => void;
}

export const ConfirmPage: React.FC<ConfirmPageProps> = ({ fileCount, onBackToDashboard }) => {
  return (
    <>
      <div className="confirm-container">
        <div className="confirm-success-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        
        <h1 className="confirm-title">Policy Updated Successfully!</h1>
        <p className="confirm-subtitle">
          Your roof replacement has been processed and your policy has been updated with the new premium.
        </p>

        <div className="confirm-meta-grid">
          <div className="confirm-meta-item">
            <div className="confirm-meta-icon blue">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="confirm-meta-value">{fileCount}</div>
            <div className="confirm-meta-label">Documents Processed</div>
          </div>

          <div className="confirm-meta-item">
            <div className="confirm-meta-icon green">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="confirm-meta-value">Active</div>
            <div className="confirm-meta-label">Policy Status</div>
          </div>

          <div className="confirm-meta-item">
            <div className="confirm-meta-icon amber">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div className="confirm-meta-value">$453</div>
            <div className="confirm-meta-label">Annual Savings</div>
          </div>
        </div>

        <div className="confirm-reference-card">
          <div className="confirm-ref-row">
            <span className="confirm-ref-label">Confirmation Reference</span>
            <span className="confirm-ref-value">RRP-2026-{Math.floor(Math.random() * 90000) + 10000}</span>
          </div>
          <div className="confirm-ref-row">
            <span className="confirm-ref-label">Policy Number</span>
            <span className="confirm-ref-value">942041880</span>
          </div>
          <div className="confirm-ref-row">
            <span className="confirm-ref-label">Updated Premium</span>
            <span className="confirm-ref-value">$2,394/year</span>
          </div>
          <div className="confirm-ref-row">
            <span className="confirm-ref-label">Effective Date</span>
            <span className="confirm-ref-value">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <div className="confirm-actions">
          <button className="btn-primary-large" onClick={onBackToDashboard}>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <polyline points="9 21 9 13 15 13 15 21" />
            </svg>
            Back to Policy Overview
          </button>
          <button className="btn-secondary-large">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Confirmation
          </button>
        </div>

        <div className="confirm-help-banner">
          <div className="confirm-help-icon">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div className="confirm-help-content">
            <div className="confirm-help-title">Questions about your policy?</div>
            <div className="confirm-help-desc">Our team is available 24/7 to assist you</div>
          </div>
          <div className="confirm-help-phone">(866) 870-7799</div>
        </div>
      </div>
    </>
  );
};



