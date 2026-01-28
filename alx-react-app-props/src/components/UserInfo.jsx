import React from "react";
import UserDetails from "./UserDetails";

function UserInfo() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "20px 0",
      }}
    >
      <h2 style={{ color: "#555" }}>User Information Section</h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
