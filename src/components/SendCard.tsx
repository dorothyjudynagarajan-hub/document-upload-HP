
import React from 'react';

interface SendCardProps {
  fileCount: number;
  validCount: number;
  allValid: boolean;
  isSending: boolean;
  onSend: () => void;
}

export const SendCard: React.FC<SendCardProps> = ({
  fileCount,
  validCount,
  allValid,
  isSending,
  onSend,
}) => {
  let iconClass = 'ssb-icon empty';
  let iconContent: React.ReactNode;
  let title = 'No documents attached yet';
  let subtitle = 'Add your proof documents above to enable submission.';

  if (fileCount === 0) {
    iconContent = (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#94a3b8"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  } else if (!allValid) {
    iconContent = (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#1559d4"
      >
        <circle cx="12" cy="12" r="10" strokeDasharray="28 14" className="spin-ring" />
      </svg>
    );
    title = 'Verifying your files…';
    subtitle = `${fileCount - validCount} file${
      fileCount - validCount !== 1 ? 's' : ''
    } still being checked. Please wait.`;
  } else {
    iconClass = 'ssb-icon ready';
    iconContent = (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
    title = `${validCount} document${validCount !== 1 ? 's' : ''} ready to send`;
    subtitle = `Submitting to policy Home 942041880. Review your files above before confirming.`;
  }

  return (
    <div className="send-card">
      <div className="send-summary-bar">
        <div className={iconClass}>{iconContent}</div>
        <div className="ssb-text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="send-body">
        <div className="legal-text">
          Documents cannot be recalled after sending — you can add more later, but not
          remove what's sent. Any information provided becomes Allstate property and may be
          used by employees, agents, and/or support staff to process your policy.
        </div>
        <div className="send-actions">
          <button
            className="btn-send"
            disabled={!allValid || isSending}
            onClick={onSend}
            style={
              isSending
                ? { background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }
                : undefined
            }
          >
            {isSending ? (
              <>
                <svg
                  className="spin-ring"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" strokeDasharray="28 14" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Documents
              </>
            )}
          </button>
          <button className="btn-back">← Back to Policy Overview</button>
        </div>
      </div>
    </div>
  );
};

