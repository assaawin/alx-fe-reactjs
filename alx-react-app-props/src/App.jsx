import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./context/UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 32,
    location: "New York",
    bio: "Software engineer with 8 years of experience in web development.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
  };

  return (
    <UserContext.Provider value={userData}>
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
