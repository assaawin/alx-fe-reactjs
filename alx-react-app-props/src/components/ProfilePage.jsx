import React from "react";
import UserInfo from "./UserInfo";

function ProfilePage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333", textAlign: "center" }}>User Profile</h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
