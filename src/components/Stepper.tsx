import React from 'react';

interface StepperProps {
  hasFiles: boolean;
  allValid: boolean;
  currentStep: 'upload' | 'review' | 'confirm';
}

export const Stepper: React.FC<StepperProps> = ({ hasFiles, allValid, currentStep }) => {
  const uploadDone = currentStep === 'review' || currentStep === 'confirm';
  const reviewDone = currentStep === 'confirm';
  const confirmDone = currentStep === 'confirm';

  return (
    <aside className="left-panel">
      <div className="left-panel-label">Your progress</div>
      <div className="stepper">
        <div className="step-item">
          <button className={`step-btn ${uploadDone ? 'done' : currentStep === 'upload' ? 'active' : ''}`}>
            <div className="step-indicator">
              {uploadDone ? (
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 8 6.5 11.5 13 5" />
                </svg>
              ) : (
                '1'
              )}
            </div>
            <div>
              <div className="step-label">Upload</div>
              <div className="step-sublabel">Add your documents</div>
            </div>
          </button>
        </div>
        <div className={`step-connector ${uploadDone ? 'done' : ''}`}></div>

        <div className="step-item">
          <button className={`step-btn ${reviewDone ? 'done' : currentStep === 'review' ? 'active' : ''}`}>
            <div className="step-indicator">
              {reviewDone ? (
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 8 6.5 11.5 13 5" />
                </svg>
              ) : (
                '2'
              )}
            </div>
            <div>
              <div className="step-label">Review</div>
              <div className="step-sublabel">Check before sending</div>
            </div>
          </button>
        </div>
        <div className={`step-connector ${reviewDone ? 'done' : ''}`}></div>

        <div className="step-item">
          <button className={`step-btn ${confirmDone ? 'done' : ''}`}>
            <div className="step-indicator">
              {confirmDone ? (
                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 8 6.5 11.5 13 5" />
                </svg>
              ) : (
                '3'
              )}
            </div>
            <div>
              <div className="step-label">Confirm</div>
              <div className="step-sublabel">Submit to Allstate</div>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};



