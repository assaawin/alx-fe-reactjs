import React from 'react';
import AdvancedSearch from './components/AdvancedSearch.jsx';

function App() {
  return (
    <div className="min-h-screen bg-github-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center py-8 border-b border-github-dark-border mb-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-5xl">🐙</span>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-github-blue to-blue-700 bg-clip-text text-transparent">
                GitHub User Search
              </h1>
            </div>
            <p className="text-github-dark-muted text-lg max-w-2xl">
              Advanced search with location filtering, repository counts, and detailed user profiles
            </p>
            <div className="flex items-center space-x-2 text-sm text-github-dark-muted">
              <span>💻</span>
              <span>Powered by GitHub API</span>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="pb-8">
          <AdvancedSearch />
        </main>
        
        {/* Footer */}
        <footer className="text-center py-6 border-t border-github-dark-border mt-8 text-github-dark-muted text-sm">
          <div className="space-y-2">
            <p>
              Built with React, Tailwind CSS & GitHub API •
              <a 
                href="https://github.com/AbubakariIssah/alx-fe-reactjs/tree/main/github-user-search" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-github-blue hover:underline ml-1"
              >
                View Source Code
              </a>
            </p>
            <p className="text-xs italic">
              Note: GitHub API has rate limits. For higher limits, add a personal access token in .env file
            </p>
            <p className="text-xs text-github-dark-muted">
              Task 2: Advanced Search Features • ALX Frontend ReactJS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
