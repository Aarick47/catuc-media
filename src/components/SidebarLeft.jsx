import React, { useState } from 'react';
import { Home, MessageCircle, Users, Bell, Settings, User, ChevronRight } from 'lucide-react';
import "../styles/SidebarLeft.css";

export default function SidebarLeft() {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "messages", icon: MessageCircle, label: "Messages", badge: 3 },
    { id: "clubs", icon: Users, label: "Clubs" },
    { id: "announcements", icon: Bell, label: "Announcements" },
  ];

  return (
    <div className="sidebar">

      {/* Brand */}
      <div className="brand">
        <div className="brand-icon">S</div>
        <span className="brand-text">Student Hub</span>
      </div>

      {/* Navigation */}
      <nav className="nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div
              key={item.id}
              className={`nav-item ${isActive ? "active" : ""}`}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="nav-item-content">
                <Icon
                  size={20}
                  className={`icon ${isActive ? "icon-active" : ""}`}
                />
                <span className={`nav-label ${isActive ? "label-active" : ""}`}>
                  {item.label}
                </span>
              </div>

              {item.badge && <span className="badge">{item.badge}</span>}

              {isActive && <div className="active-indicator"></div>}
            </div>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="divider"></div>

      {/* Bottom Section */}
      <div className="bottom">

        {/* User Card */}
        <div className="user-card">
          <div className="user-avatar">
            <User size={18} className="avatar-icon" />
          </div>

          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-status">Student</div>
          </div>

          <ChevronRight size={16} className="chevron" />
        </div>

        {/* Settings */}
        <div className="settings-btn">
          <Settings size={18} className="settings-icon" />
          <span className="settings-text">Settings</span>
        </div>

      </div>

    </div>
  );
}
