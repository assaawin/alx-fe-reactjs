import React from "react";
import Search from "./components/Search.jsx"; // Add .jsx extension
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">GitHub User Search</h1>
          <p className="app-description">
            Search for any GitHub user and view their profile information
          </p>
        </header>

        <main className="app-main">
          <Search />
        </main>

        <footer className="app-footer">
          <p>
            Built with React & GitHub API •
            <a
              href="https://github.com/AbubakariIssah/alx-fe-reactjs/tree/main/github-user-search"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              View Source Code
            </a>
          </p>
          <p className="footer-note">
            Note: GitHub API has rate limits. Add a personal access token for
            higher limits.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
