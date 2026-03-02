import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  iconColor: 'blue' | 'amber' | 'red';
  icon: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  iconColor,
  icon,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      <div
        className={`acc-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="acc-header-left">
          <div className={`acc-icon-wrap ${iconColor}`}>{icon}</div>
          <span className="acc-label">{title}</span>
        </div>
        <div className="acc-chevron">
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      <div className={`acc-body ${isOpen ? 'open' : ''}`}>{children}</div>
    </div>
  );
};

export const HelpPanel: React.FC = () => {
  return (
    <aside className="right-panel">
      <div className="rp-title">Guidance</div>

      <Accordion
        title="What to send?"
        iconColor="blue"
        defaultOpen={true}
        icon={
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        }
      >
        <div className="acc-section-title">Accepted documents (at least one)</div>
        <div className="doc-chips">
          <span className="doc-chip">Inspection / Appraisal</span>
          <span className="doc-chip">Building Permits</span>
          <span className="doc-chip">Work Contract / Invoice</span>
          <span className="doc-chip">Warranty Info</span>
          <span className="doc-chip">TX: WPI-8 Certificate</span>
        </div>
        <div className="acc-section-title">Document must include</div>
        <div className="must-include-list">
          <div className="mi-item">Primary policyholder name or spouse</div>
          <div className="mi-item">Policy number</div>
          <div className="mi-item">Property address</div>
          <div className="mi-item">Description and year of roof replacement</div>
        </div>
      </Accordion>

      <Accordion
        title="How to send?"
        iconColor="amber"
        icon={
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        }
      >
        <div className="how-steps">
          <div className="how-step">
            <div className="how-num">1</div>
            <div className="how-text">Scan or photograph your document clearly</div>
          </div>
          <div className="how-step">
            <div className="how-num">2</div>
            <div className="how-text">
              Save as <span className="how-code">RRP_document_title</span> in read-only
              format
            </div>
          </div>
          <div className="how-step">
            <div className="how-num">3</div>
            <div className="how-text">File must be JPEG or PNG, under 8MB</div>
          </div>
          <div className="how-step">
            <div className="how-num">4</div>
            <div className="how-text">Upload using the drop zone and hit Send</div>
          </div>
        </div>
      </Accordion>

      <Accordion
        title="What not to upload?"
        iconColor="red"
        icon={
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        }
      >
        <div className="dont-list">
          <div className="dont-item">
            <div className="dont-dot"></div>Driver's license or Social Security number
          </div>
          <div className="dont-item">
            <div className="dont-dot"></div>Date of birth
          </div>
          <div className="dont-item">
            <div className="dont-dot"></div>Medical information
          </div>
          <div className="dont-item">
            <div className="dont-dot"></div>Bank or credit card information
          </div>
        </div>
      </Accordion>
    </aside>
  );
};

