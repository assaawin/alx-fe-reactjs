import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { searchUsers } from "./services/githubApi";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchUsers(query);
      setUsers(data.items || []);
    } catch (err) {
      setError(err.message || "Failed to fetch users");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
        <p className="subtitle">Search for GitHub users by username</p>

        <SearchBar onSearch={handleSearch} />

        <UserList users={users} isLoading={isLoading} error={error} />

        <div className="instructions">
          <p>Enter a username to search for GitHub users</p>
          <p className="hint">Example: octocat, torvalds, etc.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
