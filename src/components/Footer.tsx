import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-box">
          <img src="/allstate-hands.png" alt="Allstate" className="footer-logo" />
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Terms of Use</a>
          <span className="footer-separator">|</span>
          <a href="#" className="footer-link">Privacy & Security</a>
          <span className="footer-separator">|</span>
          <a href="#" className="footer-link">NY Domestic Violence Notice</a>
          <span className="footer-separator">|</span>
          <a href="#" className="footer-link">Underwriting Companies</a>
          <span className="footer-separator">|</span>
          <a href="#" className="footer-link">Website Accessibility</a>
          <span className="footer-separator">|</span>
          <a href="#" className="footer-link">My Account Terms & Conditions</a>
        </div>
        <div className="footer-tagline">
          <img src="/youre-in-good-hands.png" alt="You're in Good Hands" className="footer-tagline-image" />
        </div>
      </div>
    </footer>
  );
};




