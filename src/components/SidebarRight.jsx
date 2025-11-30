import React, { useState } from "react";
import { Heart, MessageSquare } from "lucide-react";
import "../styles/SidebarRight.css";

export default function SidebarRight() {
  const [followStates, setFollowStates] = useState({
    user1: false,
    user2: false,
  });

  const toggleFollow = (userId) => {
    setFollowStates((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const recommendedUsers = [
    {
      id: "user1",
      name: "Siri Favour",
      role: "Med student",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "user2",
      name: "John Paul",
      role: "Business student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="sidebar-right-container">
      {/* Announcement Section */}
      <div className="announcement-section">
        <h3 className="main-title">Top Announcements of the week</h3>

        <div className="announcement-card">
          <p className="announcement-text">
            Students are reminded that as of now you were to have completed the
            first installment, otherwise there will be a fee drive from the 29
            of this month.
          </p>

          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop"
              alt="announcement"
              className="announcement-image"
            />
          </div>

          <div className="stats-row">
            <div className="stat">
              <Heart size={16} className="stat-icon" />
              <span className="stat-text">200</span>
            </div>
            <div className="stat">
              <MessageSquare size={16} className="stat-icon" />
              <span className="stat-text">80</span>
            </div>
          </div>

          <div className="button-row">
            <button className="see-more-button">See More</button>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="recommended-section">
        <h3 className="main-title">Recommended</h3>

        <div className="recommended-list">
          {recommendedUsers.map((user) => {
            const isFollowing = followStates[user.id];

            return (
              <div key={user.id} className="recommend-card">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="recommended-avatar"
                />

                <div className="recommended-user-info">
                  <p className="recommended-name">{user.name}</p>
                  <small className="recommended-role">{user.role}</small>
                </div>

                <button
                  onClick={() => toggleFollow(user.id)}
                  className={
                    isFollowing
                      ? "follow-button following-button"
                      : "follow-button"
                  }
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
