
import React from 'react';

interface PolicyOverviewProps {
  onNavigateToUpload?: () => void;
}

export const PolicyOverview: React.FC<PolicyOverviewProps> = ({ onNavigateToUpload }) => {
  return (
    <div className="policy-overview">
      <div className="policy-header">
        <div className="policy-breadcrumb">
          <a href="#">Home</a>
          <span className="breadcrumb-separator">›</span>
          <span>Policy 942041880</span>
        </div>
        <h1 className="policy-title">Your Home Insurance Policy</h1>
        <div className="policy-meta">
          <div className="policy-meta-item">
            <span className="policy-meta-label">Policy Number</span>
            <span className="policy-meta-value">942041880</span>
          </div>
          <div className="policy-meta-item">
            <span className="policy-meta-label">Property</span>
            <span className="policy-meta-value">4582 Maple Grove Ln, Dallas, TX</span>
          </div>
          <div className="policy-meta-item">
            <span className="policy-meta-label">Next Renewal</span>
            <span className="policy-meta-value">June 1, 2026</span>
          </div>
        </div>
      </div>

      <div className="policy-status-banner success">
        <div className="policy-status-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="policy-status-content">
          <div className="policy-status-title">Policy Updated with New Roof Information!</div>
          <div className="policy-status-desc">Your roof replacement has been processed and your premium has been updated to $2,394/year.</div>
        </div>
        <button className="policy-status-dismiss">×</button>
      </div>

      <div className="policy-grid">
        {/* Coverage Summary Card */}
        <div className="policy-card">
          <div className="policy-card-header">
            <div className="policy-card-icon blue">
              <svg viewBox="0 0 24 24">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <polyline points="9 21 9 13 15 13 15 21" />
              </svg>
            </div>
            <div>
              <div className="policy-card-title">Coverage Summary</div>
              <div className="policy-card-subtitle">Your protection details</div>
            </div>
          </div>
          <div className="policy-card-body">
            <div className="coverage-list">
              <div className="coverage-item">
                <div className="coverage-label">Dwelling Coverage</div>
                <div className="coverage-value">$425,000</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-label">Personal Property</div>
                <div className="coverage-value">$212,500</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-label">Liability Protection</div>
                <div className="coverage-value">$300,000</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-label">Medical Payments</div>
                <div className="coverage-value">$5,000</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-label">Deductible</div>
                <div className="coverage-value">$2,500</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Card */}
        <div className="policy-card highlight">
          <div className="policy-card-header">
            <div className="policy-card-icon green">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div>
              <div className="policy-card-title">Updated Premium</div>
              <div className="policy-card-subtitle">After roof replacement</div>
            </div>
          </div>
          <div className="policy-card-body center">
            <div className="premium-display">
              <div className="premium-amount">$2,394</div>
              <div className="premium-period">per year</div>
              <div className="premium-savings-badge">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Saving $453/year
              </div>
            </div>
            <div className="premium-payment">
              <div className="premium-payment-label">Monthly Payment</div>
              <div className="premium-payment-value">$199.50/mo</div>
            </div>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="policy-card full-width">
          <div className="policy-card-header">
            <div className="policy-card-icon purple">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="policy-card-title">Recent Activity</div>
              <div className="policy-card-subtitle">Latest updates on your policy</div>
            </div>
          </div>
          <div className="policy-card-body no-padding">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon green">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Roof Replacement Processed & Applied</div>
                  <div className="activity-desc">Premium updated to $2,394/year • Savings: $453/year</div>
                  <div className="activity-meta">Today at 11:48 AM</div>
                </div>
                <button className="activity-action">View Details</button>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon blue">
                  <svg viewBox="0 0 24 24">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Premium Payment Processed</div>
                  <div className="activity-desc">$237.25 paid via Auto-Pay</div>
                  <div className="activity-meta">Feb 1, 2026</div>
                </div>
                <button className="activity-action">Receipt</button>
              </div>

              <div className="activity-item">
                <div className="activity-icon amber">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Policy Documents Updated</div>
                  <div className="activity-desc">Annual policy renewal documents available</div>
                  <div className="activity-meta">Jan 15, 2026</div>
                </div>
                <button className="activity-action">Download</button>
              </div>

              <div className="activity-item">
                <div className="activity-icon navy">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Coverage Review Completed</div>
                  <div className="activity-desc">Annual policy review with no changes needed</div>
                  <div className="activity-meta">Dec 20, 2025</div>
                </div>
                <button className="activity-action">View Report</button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="policy-card">
          <div className="policy-card-header">
            <div className="policy-card-icon slate">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </div>
            <div>
              <div className="policy-card-title">Quick Actions</div>
              <div className="policy-card-subtitle">Manage your policy</div>
            </div>
          </div>
          <div className="policy-card-body">
            <div className="quick-actions">
              <button className="quick-action-btn">
                <div className="quick-action-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <span>Download Policy</span>
              </button>
              <button className="quick-action-btn">
                <div className="quick-action-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <span>Make a Payment</span>
              </button>
              <button className="quick-action-btn">
                <div className="quick-action-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21.21 15.89A10 10 0 118 2.83" />
                    <path d="M22 12A10 10 0 0012 2v10z" />
                  </svg>
                </div>
                <span>File a Claim</span>
              </button>
              <button className="quick-action-btn">
                <div className="quick-action-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>

        {/* Protection Tips Card */}
        <div className="policy-card">
          <div className="policy-card-header">
            <div className="policy-card-icon amber">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <div className="policy-card-title">Protection Tips</div>
              <div className="policy-card-subtitle">Maintain your coverage</div>
            </div>
          </div>
          <div className="policy-card-body">
            <div className="tips-list">
              <div className="tip-item">
                <div className="tip-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="tip-text">Schedule annual roof inspections to maintain your discount</div>
              </div>
              <div className="tip-item">
                <div className="tip-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="tip-text">Update your home inventory for accurate coverage</div>
              </div>
              <div className="tip-item">
                <div className="tip-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="tip-text">Consider increasing liability coverage for extra protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


