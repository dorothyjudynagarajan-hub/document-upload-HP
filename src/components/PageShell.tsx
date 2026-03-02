import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface PageShellProps {
  children: React.ReactNode;
  showSidebars?: boolean;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  showSidebars = true,
  leftPanel,
  rightPanel,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <div className={`page ${!showSidebars ? 'no-sidebars' : ''}`}>
        {showSidebars && leftPanel && <div className="left-panel">{leftPanel}</div>}
        <div className={`main-content ${!showSidebars ? 'wide' : ''}`}>{children}</div>
        {showSidebars && rightPanel && <div className="right-panel">{rightPanel}</div>}
      </div>
      <Footer />
    </div>
  );
};


