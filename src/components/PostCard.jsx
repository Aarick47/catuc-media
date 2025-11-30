import React, { useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react";
import "../styles/PostCard.css"; // your CSS file

export default function PostCard({ profileImage, time, text, postImage }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(200);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const profileSrc = profileImage ? `/assets/images/${profileImage}` : `/assets/images/profile1.jpg`;
  const postSrc = postImage ? `/assets/images/${postImage}` : null;

  return (
    <article className="post">
      {/* Post Header */}
      <header className="header">
        <img src={profileSrc} alt="Profile" className="profileImage" />

        <div className="userInfo">
          <div className="nameRow">
            <h3 className="userName">Profile</h3>
            <span className="verifiedBadge">✓</span>
          </div>
          <time className="time">{time || "2 hours ago"}</time>
        </div>

        <button className="moreButton" onClick={() => setShowMenu(!showMenu)}>
          <MoreHorizontal size={20} className="moreIcon" />
        </button>
      </header>

      {/* Post Content */}
      <div className="content">
        <p className="postText">{text || "This is a sample post content..."}</p>
        {postSrc && (
          <figure className="imageContainer">
            <img src={postSrc} alt="Post content" className="postImage" />
          </figure>
        )}
      </div>

      {/* Engagement Stats */}
      <div className="engagement">
        <div className="reactionGroup">
          <div className="reactionIcons">
            <span className="reactionIcon red">❤️</span>
            <span className="reactionIcon blue">👍</span>
            <span className="reactionIcon yellow">😊</span>
          </div>
          <span className="engagementText">{likes} reactions</span>
        </div>
        <div className="engagementRight">
          <span className="engagementText">80 comments</span>
          <span className="engagementDot">•</span>
          <span className="engagementText">45 shares</span>
        </div>
      </div>

      <div className="divider"></div>

      {/* Action Buttons */}
      <div className="actionsRow">
        <button className={`actionButton ${isLiked ? "liked" : ""}`} onClick={handleLike}>
          <Heart size={22} className="actionIcon" />
          <span className="actionText">Like</span>
        </button>

        <button className="actionButton">
          <MessageCircle size={22} className="actionIcon" />
          <span className="actionText">Comment</span>
        </button>

        <button className="actionButton">
          <Share2 size={22} className="actionIcon" />
          <span className="actionText">Share</span>
        </button>

        <button className={`actionButton ${isSaved ? "saved" : ""}`} onClick={() => setIsSaved(!isSaved)}>
          <Bookmark size={22} className="actionIcon" />
          <span className="actionText">Save</span>
        </button>
      </div>
    </article>
  );
}
