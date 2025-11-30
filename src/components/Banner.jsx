import React from 'react';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import '../styles/Banner.css';

export default function Banner() {
  return (
    <div className="banner">
      {/* Background Pattern */}
      <div className="background-pattern">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="icon-badge">
          <Sparkles size={20} className="sparkle-icon" />
        </div>
        <h1 className="title">
          Connect, Learn <br />
          <span className="title-highlight">Inspire.</span>
        </h1>
        <p className="subtitle">
          Join thousands of students building the future together
        </p>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat">
            <Users size={18} className="stat-icon" />
            <span className="stat-text">2.5K Students</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <TrendingUp size={18} className="stat-icon" />
            <span className="stat-text">50+ Clubs</span>
          </div>
        </div>
      </div>

      {/* Decorative Floating Cards */}
      <div className="decorative-wrapper">
        <div className="floating-card1">
          <div className="mini-icon">📖</div>
        </div>
        <div className="floating-card2">
          <div className="mini-icon">🌟</div>
        </div>
        <div className="floating-card3">
          <div className="mini-icon">🚀</div>
        </div>
      </div>
    </div>
  );
}
