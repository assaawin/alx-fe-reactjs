import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="user-avatar" />
      <div className="user-info">
        <h3 className="user-name">{user.login}</h3>
        {user.name && <p className="user-fullname">{user.name}</p>}
        {user.bio && <p className="user-bio">{user.bio}</p>}
        <div className="user-stats">
          <span className="stat">Followers: {user.followers || 0}</span>
          <span className="stat">Following: {user.following || 0}</span>
          <span className="stat">Repos: {user.public_repos || 0}</span>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
