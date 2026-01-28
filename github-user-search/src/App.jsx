import React from 'react';
import AdvancedSearch from './components/AdvancedSearch.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="text-center">
            <h1 className="app-title">GitHub User Search</h1>
            <p className="app-description">
              Advanced search with location filtering, repository counts, and detailed user profiles
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span>💻</span>
              <span style={{ fontSize: '0.875rem', color: '#8b949e' }}>Powered by GitHub API</span>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="app-main">
          <AdvancedSearch />
        </main>
        
        {/* Footer */}
        <footer className="app-footer">
          <div>
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
              Note: GitHub API has rate limits. For higher limits, add a personal access token in .env file
            </p>
            <p style={{ fontSize: '0.75rem', color: '#8b949e', marginTop: '0.5rem' }}>
              Task 2: Advanced Search Features • ALX Frontend ReactJS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
