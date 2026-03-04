import React from 'react';

interface StepperProps {
  hasFiles: boolean;
  allValid: boolean;
  currentStep: 'upload' | 'review' | 'confirm';
}

export const Stepper: React.FC<StepperProps> = ({ hasFiles, allValid, currentStep }) => {
  const steps = [
    { id: 'upload', label: 'Upload documents', number: 1 },
    { id: 'review', label: 'Review & edit', number: 2 },
    { id: 'confirm', label: 'Confirm', number: 3 }
  ];

  const getCurrentStepIndex = () => {
    if (currentStep === 'upload') return 0;
    if (currentStep === 'review') return 1;
    if (currentStep === 'confirm') return 2;
    return 0;
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className="horizontal-stepper-wrapper">
      <div className="horizontal-stepper">
        {steps.map((step, index) => {
          // On confirm page, all steps are completed
          const isCompleted = currentStep === 'confirm' ? true : index < currentIndex;
          const isCurrent = currentStep === 'confirm' ? false : index === currentIndex;

          return (
            <React.Fragment key={step.id}>
              <div className={`h-step ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="h-step-circle">
                  {isCompleted ? (
                    <svg
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 8 6.5 11.5 13 5" />
                    </svg>
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <div className="h-step-label">{step.label}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-step-line ${isCompleted ? 'completed' : ''}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};


