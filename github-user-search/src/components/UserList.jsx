import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isLoading, error }) => {
  if (isLoading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!users || users.length === 0) {
    return <div className="no-users">No users found. Try searching!</div>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
