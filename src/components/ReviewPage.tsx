

import React from 'react';
import type { UploadedFile } from './DocumentUpload';

interface ReviewPageProps {
  files: UploadedFile[];
  onSubmit: () => void;
  onBack: () => void;
}

export const ReviewPage: React.FC<ReviewPageProps> = ({ files, onSubmit, onBack }) => {
  return (
    <>
      <div className="main-header">
        <div className="main-tag">
          <div className="main-tag-dot"></div> Review Details
        </div>
        <h1 className="main-title">
          Review extracted information
          <br />
          and premium changes
        </h1>
        <p className="main-subtitle">
          Policy Home 942041880 · Please verify the details extracted from your documents before submission.
        </p>
      </div>

      {/* Extracted Information Card */}
      <div className="review-card">
        <div className="review-card-header">
          <div className="review-card-title">Extracted Document Information</div>
          <div className="review-badge verified">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="3 8 6.5 11.5 13 5" />
            </svg>
            Verified
          </div>
        </div>
        <div className="review-card-body">
          <div className="review-grid">
            <div className="review-field">
              <div className="review-field-label">Policyholder Name</div>
              <div className="review-field-value">John & Sarah Mitchell</div>
            </div>
            <div className="review-field">
              <div className="review-field-label">Policy Number</div>
              <div className="review-field-value">942041880</div>
            </div>
            <div className="review-field">
              <div className="review-field-label">Property Address</div>
              <div className="review-field-value">4582 Maple Grove Lane, Dallas, TX 75201</div>
            </div>
            <div className="review-field">
              <div className="review-field-label">Roof Replacement Date</div>
              <div className="review-field-value">December 15, 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Submitted Card */}
      <div className="review-card">
        <div className="review-card-header">
          <div className="review-card-title">Documents Submitted</div>
          <div className="review-badge count">{files.length} Files</div>
        </div>
        <div className="review-card-body">
          <div className="review-docs-list">
            {files.map((file, index) => (
              <div key={file.id} className="review-doc-item">
                <div className="review-doc-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="review-doc-info">
                  <div className="review-doc-name">{file.file.name}</div>
                  <div className="review-doc-type">
                    {index === 0 && 'Building Permit'}
                    {index === 1 && 'Contractor Invoice'}
                    {index === 2 && 'Warranty Certificate'}
                  </div>
                </div>
                <div className="review-doc-check">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="3 8 6.5 11.5 13 5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Comparison Card */}
      <div className="premium-card">
        <div className="premium-card-header">
          <div className="premium-header-content">
            <div className="premium-icon">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div>
              <div className="premium-card-title">Insurance Premium Update</div>
              <div className="premium-card-subtitle">Your premium will be adjusted based on the new roof</div>
            </div>
          </div>
        </div>
        <div className="premium-card-body">
          <div className="premium-comparison">
            <div className="premium-box current">
              <div className="premium-box-label">Current Annual Premium</div>
              <div className="premium-box-amount">$2,847</div>
              <div className="premium-box-period">per year</div>
            </div>
            
            <div className="premium-arrow">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="premium-box new">
              <div className="premium-box-label">New Annual Premium</div>
              <div className="premium-box-amount">$2,394</div>
              <div className="premium-box-period">per year</div>
              <div className="premium-savings">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Save $453/year
              </div>
            </div>
          </div>

          <div className="premium-details">
            <div className="premium-detail-title">What's changing?</div>
            <div className="premium-detail-items">
              <div className="premium-detail-item positive">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Impact-resistant roof discount:</strong> -$385/year</span>
              </div>
              <div className="premium-detail-item positive">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>New roof age credit:</strong> -$142/year</span>
              </div>
              <div className="premium-detail-item positive">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Extended warranty benefit:</strong> -$68/year</span>
              </div>
              <div className="premium-detail-item neutral">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span><strong>Dwelling coverage adjustment:</strong> +$142/year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Card */}
      <div className="send-card">
        <div className="send-body">
          <div className="legal-text">
            By submitting, you confirm that all information provided is accurate and complete. Allstate will review your documents and update your policy accordingly. This change cannot be reversed after submission.
          </div>
          <div className="send-actions">
            <button className="btn-send" onClick={onSubmit}>
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Submit
            </button>
            <button className="btn-back" onClick={onBack}>← Back to Upload</button>
          </div>
        </div>
      </div>
    </>
  );
};



