import React from 'react';
import './App.css';
import { UserContext } from './context/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>Context API Implementation</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
