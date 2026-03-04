import React from 'react';

interface ConfirmPageProps {
  fileCount: number;
  onBackToDashboard: () => void;
}

export const ConfirmPage: React.FC<ConfirmPageProps> = ({ fileCount, onBackToDashboard }) => {
  return (
    <>
      <div className="confirm-container-centered">
        <div className="confirm-success-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        
        <h1 className="confirm-title">Your policy has been updated</h1>
        <p className="confirm-subtitle">
          Your roof replacement evidence has been submitted successfully. Our team will review your documents and update your policy accordingly.
        </p>

        <div className="confirm-info-cards">
          <div className="confirm-info-card">
            <div className="confirm-info-icon policy-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <div className="confirm-info-label">Policy Status</div>
            <div className="confirm-info-value">Active</div>
          </div>

          <div className="confirm-info-card">
            <div className="confirm-info-icon docs-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <div className="confirm-info-label">Documents Processed</div>
            <div className="confirm-info-value">{fileCount}</div>
          </div>

          <div className="confirm-info-card">
            <div className="confirm-info-icon savings-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="confirm-info-label">Annual Savings</div>
            <div className="confirm-info-value">$450</div>
          </div>
        </div>

        <div className="confirm-details-box">
          <div className="confirm-detail-row">
            <span className="confirm-detail-label">Documents Submitted</span>
            <span className="confirm-detail-value">{fileCount} {fileCount === 1 ? 'file' : 'files'}</span>
          </div>
          <div className="confirm-detail-row">
            <span className="confirm-detail-label">Submission ID</span>
            <span className="confirm-detail-value">RRE-{Math.floor(Math.random() * 900000) + 100000}</span>
          </div>
          <div className="confirm-detail-row">
            <span className="confirm-detail-label">Submission Date</span>
            <span className="confirm-detail-value">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="confirm-detail-row">
            <span className="confirm-detail-label">Expected Review Time</span>
            <span className="confirm-detail-value">2-3 business days</span>
          </div>
        </div>

        <div className="confirm-actions-centered">
          <button className="btn-primary-large" onClick={onBackToDashboard}>
            Back to Policy Overview
          </button>
        </div>

        <div className="confirm-help-text">
          Questions? Call us at <a href="tel:8668707799" className="confirm-phone-link">(866) 870-7799</a>
        </div>
      </div>
    </>
  );
};



