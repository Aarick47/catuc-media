import React from "react";
import "../styles/AnnouncementCard.css";

export default function AnnouncementCard() {
  return (
    <div className="announce-box">
      <p>
        Students are reminded that the first installment must be completed
        otherwise there will be a fee drive…
      </p>

      <img src="/announcement.jpg" alt="announcement" />

      <div className="stats">
        <span>💛200</span>
        <span>💬80</span>
      </div>

      <div className="actions">
        <button className="yellow">See More</button>
        <button className="blue">Share</button>
      </div>
    </div>
  );
}
