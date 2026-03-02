import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <>
      <nav className="nav-top">
        <div className="nav-left">
          <div className="nav-logo">
            Allstate
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Protection ▾</a>
            <a href="#">Payments ▾</a>
            <a href="#">Claims</a>
            <a href="#">Settings ▾</a>
            <a href="#">Help</a>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-logout">Log out</div>
        </div>
      </nav>
      <div className="nav-header">
        <h2 className="nav-header-title">Roof replacement evidence upload</h2>
      </div>
    </>
  );
};


