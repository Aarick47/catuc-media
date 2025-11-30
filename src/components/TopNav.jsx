import React, { useState } from "react";
import { Search, Bell, Settings, ChevronDown, BookOpen, User } from "lucide-react";
import "../styles/TopNav.css";

export default function TopNav() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="topNav">
      {/* Left Section */}
      <div className="navLeft">
        <div className="logoWrapper">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop" 
            className="logo" 
            alt="CATUC logo" 
          />
        </div>
        <span className="brandName">CATUC</span>
        <div className="bookIconWrapper">
          <BookOpen size={20} className="bookIcon" />
        </div>
      </div>

      {/* Center Search */}
      <div className="navCenter">
        <div className={`searchWrapper ${isSearchFocused ? "focused" : ""}`}>
          <Search size={20} className="searchIcon" />
          <input 
            placeholder="Search..."
            className="searchInput"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="navRight">
        <svg className="blueDiagonal" viewBox="0 0 800 100" preserveAspectRatio="none">
          <polygon points="200,0 800,0 800,100 0,100" fill="url(#blueGradient)" />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        <div className="iconsContainer">
          <div className="iconButton bellButton">
            <Bell size={22} className="icon" />
            <span className="badge">3</span>
          </div>

          <div className="iconButton settingsButton">
            <Settings size={22} className="icon" />
          </div>

          <div className="userButton">
            <div className="userIconWrapper">
              <User size={18} className="userIcon" />
            </div>
            <span className="userName">User</span>
            <ChevronDown size={18} className="chevronIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
}
