import React, { useState } from 'react';
import { Image, Video, Smile, Send, User } from 'lucide-react';
import '../styles/CreatePost.css';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`create-post ${isFocused ? 'focused' : ''}`}>
      {/* Input Section */}
      <div className="input-section">
        <div className="avatar-wrapper">
          <User size={20} className="avatar-icon" />
        </div>
        <input
          placeholder="What's on your mind? Share something..."
          className="post-input"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className={`send-button ${postText.length > 0 ? 'active' : ''}`}>
          <Send size={18} className="send-icon" />
        </button>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Action Buttons */}
      <div className="actions-row">
        <button className="action-button">
          <Image size={20} className="action-icon" />
          <span className="action-text">Photo</span>
        </button>
        <button className="action-button">
          <Video size={20} className="action-icon" />
          <span className="action-text">Video</span>
        </button>
        <button className="action-button">
          <Smile size={20} className="action-icon" />
          <span className="action-text">Feeling</span>
        </button>
      </div>
    </div>
  );
}
