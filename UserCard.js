import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="card-background" style={{ backgroundImage: `url(${user.background})` }}>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.jobTitle}</p>
        <div className="social-icons">
          <a href={user.social.facebook}><i className="fab fa-facebook"></i></a>
          <a href={user.social.instagram}><i className="fab fa-instagram"></i></a>
          <a href={user.social.linkedin}><i className="fab fa-linkedin"></i></a>
          <a href={user.social.twitter}><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="user-stats">
        <div>
          <h3>{user.stats.followers}</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>{user.stats.following}</h3>
          <p>Following</p>
        </div>
        <div>
          <h3>{user.stats.posts}</h3>
          <p>Total Posts</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;