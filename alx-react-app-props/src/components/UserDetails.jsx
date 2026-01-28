import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #eee",
      }}
    >
      <h2
        style={{
          color: "#2196F3",
          borderBottom: "2px solid #2196F3",
          paddingBottom: "10px",
        }}
      >
        User Details (Using Context API)
      </h2>
      <div style={{ marginTop: "20px" }}>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Name:</strong> {userData.name}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Email:</strong> {userData.email}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Age:</strong> {userData.age}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Location:</strong> {userData.location}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Bio:</strong> {userData.bio}
        </p>
        <div
          style={{
            fontSize: "1.1rem",
            margin: "10px 0",
            padding: "8px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <strong>Skills:</strong>
          <ul style={{ margin: "5px 0 0 20px" }}>
            {userData.skills.map((skill, index) => (
              <li key={index} style={{ margin: "5px 0" }}>
                <span
                  style={{
                    backgroundColor: "#E3F2FD",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    fontSize: "0.9rem",
                  }}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#E8F5E9",
          borderRadius: "6px",
          border: "1px solid #C8E6C9",
        }}
      >
        <p
          style={{
            color: "#2E7D32",
            margin: 0,
            fontSize: "0.9rem",
          }}
        >
          <strong>Note:</strong> This data is being accessed via React Context
          API without prop drilling. The UserDetails component directly consumes
          the context without receiving props from intermediate components.
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
