import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import "./Search.css";

const Search = () => {
  // State for the search input
  const [username, setUsername] = useState("");

  // State for user data
  const [userData, setUserData] = useState(null);

  // State for loading status
  const [loading, setLoading] = useState(false);

  // State for error messages
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setError(null);
    setUserData(null);

    // Validate input
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      // Fetch user data from API
      const result = await fetchUserData(username);

      // Update state with user data
      setUserData(result.data);
    } catch (err) {
      // Handle errors
      setError(err.message || "Looks like we cant find the user");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  // Reset search
  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Search GitHub User</h2>
        <p className="search-subtitle">
          Enter a GitHub username to view their profile information
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter GitHub username (e.g., octocat, torvalds)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
            disabled={loading}
          />
          <div className="button-group">
            <button
              type="submit"
              className="search-button"
              disabled={loading || !username.trim()}
            >
              {loading ? "Searching..." : "Search"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="reset-button"
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading user data...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Error</h3>
          <p className="error-message">{error}</p>
          <p className="error-hint">Please check the username and try again.</p>
        </div>
      )}

      {/* Results Display */}
      {userData && !loading && !error && (
        <div className="user-results">
          <h3 className="results-title">User Found</h3>

          <div className="user-card">
            <div className="user-header">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="user-avatar"
              />
              <div className="user-basic-info">
                <h3 className="user-name">{userData.name || userData.login}</h3>
                <p className="user-login">@{userData.login}</p>

                {userData.bio && <p className="user-bio">{userData.bio}</p>}
              </div>
            </div>

            <div className="user-details">
              <div className="detail-row">
                <span className="detail-label">Followers:</span>
                <span className="detail-value">{userData.followers}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Following:</span>
                <span className="detail-value">{userData.following}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Public Repos:</span>
                <span className="detail-value">{userData.public_repos}</span>
              </div>

              {userData.location && (
                <div className="detail-row">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{userData.location}</span>
                </div>
              )}

              {userData.company && (
                <div className="detail-row">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">{userData.company}</span>
                </div>
              )}
            </div>

            <div className="user-links">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                View GitHub Profile
              </a>

              {userData.blog && (
                <a
                  href={
                    userData.blog.startsWith("http")
                      ? userData.blog
                      : `http://${userData.blog}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  View Website
                </a>
              )}
            </div>
          </div>

          <div className="search-again">
            <button onClick={handleReset} className="search-again-button">
              Search Another User
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!userData && !loading && !error && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Search for a GitHub User</h3>
          <p>
            Enter a GitHub username above to see their profile information,
            including followers, repositories, and more.
          </p>
          <div className="example-users">
            <p className="example-title">Try these examples:</p>
            <div className="example-list">
              <button
                className="example-button"
                onClick={() => setUsername("octocat")}
              >
                octocat
              </button>
              <button
                className="example-button"
                onClick={() => setUsername("torvalds")}
              >
                torvalds
              </button>
              <button
                className="example-button"
                onClick={() => setUsername("gaearon")}
              >
                gaearon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
