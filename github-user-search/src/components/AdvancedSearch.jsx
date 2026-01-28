import React, { useState } from 'react';
import { advancedSearchUsers } from '../services/githubService.js';
import './AdvancedSearch.css';

const AdvancedSearch = () => {
  // Search form state
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  
  // Results state
  const [results, setResults] = useState({
    items: [],
    total_count: 0,
    page: 1,
    per_page: 10,
    has_more: false,
  });
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const searchResult = await advancedSearchUsers({
        ...searchParams,
        page: 1,
        per_page: 10
      });

      setResults(searchResult.data);
    } catch (err) {
      setError(err.message || 'An error occurred during search');
      setResults({
        items: [],
        total_count: 0,
        page: 1,
        per_page: 10,
        has_more: false,
      });
    } finally {
      setLoading(false);
    }
  };

  // Load more results
  const handleLoadMore = async () => {
    setLoading(true);
    
    try {
      const nextPage = results.page + 1;
      const searchResult = await advancedSearchUsers({
        ...searchParams,
        page: nextPage,
        per_page: 10
      });

      setResults(prev => ({
        ...searchResult.data,
        items: [...prev.items, ...searchResult.data.items],
      }));
    } catch (err) {
      setError(err.message || 'Failed to load more results');
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setSearchParams({
      username: '',
      location: '',
      minRepos: '',
    });
    setResults({
      items: [],
      total_count: 0,
      page: 1,
      per_page: 10,
      has_more: false,
    });
    setError(null);
    setShowAdvanced(false);
  };

  // Format number with commas
  const formatNumber = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0';
  };

  return (
    <div className="advanced-search-container">
      {/* Header */}
      <div className="advanced-search-header">
        <h1 className="advanced-search-title">
          Advanced GitHub User Search
        </h1>
        <p className="advanced-search-subtitle">
          Search GitHub users with advanced filters and detailed information
        </p>
      </div>

      {/* Search Form */}
      <div className="search-form-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Basic Search */}
          <div className="form-section">
            <div className="form-section-header">
              <span>🔍</span>
              <span>Basic Search</span>
            </div>
            
            <div className="form-grid">
              {/* Username */}
              <div className="form-group">
                <label className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={searchParams.username}
                  onChange={handleInputChange}
                  placeholder="Enter GitHub username"
                  className="search-input"
                  disabled={loading}
                />
              </div>

              {/* Advanced Filters Toggle */}
              <div className="form-group">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="toggle-button"
                >
                  <span>⚙️</span>
                  <span>{showAdvanced ? 'Hide Advanced Filters' : 'Show Advanced Filters'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="advanced-filters">
              <div className="form-section-header">
                <span>⚙️</span>
                <span>Advanced Filters</span>
              </div>

              <div className="advanced-grid">
                {/* Location */}
                <div className="form-group">
                  <label className="form-label">
                    <span style={{ marginRight: '0.5rem' }}>📍</span>
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    placeholder="e.g., San Francisco, Remote"
                    className="search-input"
                    disabled={loading}
                  />
                  <p style={{ fontSize: '0.75rem', color: '#8b949e', marginTop: '0.25rem' }}>
                    Filter users by location
                  </p>
                </div>

                {/* Minimum Repositories */}
                <div className="form-group">
                  <label className="form-label">
                    <span style={{ marginRight: '0.5rem' }}>📦</span>
                    Minimum Repositories
                  </label>
                  <input
                    type="number"
                    name="minRepos"
                    value={searchParams.minRepos}
                    onChange={handleInputChange}
                    placeholder="e.g., 10"
                    min="0"
                    className="search-input"
                    disabled={loading}
                  />
                  <p style={{ fontSize: '0.75rem', color: '#8b949e', marginTop: '0.25rem' }}>
                    Users with at least this many public repos
                  </p>
                </div>
              </div>

              {/* Search Tips */}
              <div className="tips-box">
                <h4 className="tips-title">Search Tips:</h4>
                <ul className="tips-list">
                  <li>• Leave fields empty to search all users</li>
                  <li>• Combine filters for more specific results</li>
                  <li>• Use location names like "San Francisco" or "Remote"</li>
                  <li>• Minimum repos filter helps find active developers</li>
                </ul>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={loading || (!searchParams.username && !searchParams.location && !searchParams.minRepos)}
              className="btn-search"
            >
              {loading ? (
                <>
                  <div className="spinner" style={{ width: '1rem', height: '1rem', borderWidth: '2px' }}></div>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>🔍</span>
                  <span>Search Users</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="btn-reset"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div className="results-section">
        {/* Results Header */}
        {results.total_count > 0 && (
          <div className="results-header-card">
            <h2 className="results-title">
              Search Results
            </h2>
            <div className="results-count">
              Found {formatNumber(results.total_count)} user{results.total_count !== 1 ? 's' : ''}
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="error-card">
            <div className="error-header">
              <div className="error-icon">⚠️</div>
              <div className="error-content">
                <h3>Error</h3>
                <p>{error}</p>
                <p className="error-hint">
                  Please check your search criteria and try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && results.items.length === 0 && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p className="loading-text">Searching GitHub users...</p>
          </div>
        )}

        {/* No Results */}
        {!loading && results.total_count === 0 && !error && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">No Users Found</h3>
            <p className="empty-text">
              Try adjusting your search criteria to find GitHub users.
            </p>
            <div className="example-users">
              <p className="example-title">Try these examples:</p>
              <div className="example-list">
                <button
                  onClick={() => setSearchParams({ ...searchParams, username: 'octocat' })}
                  className="example-btn"
                >
                  username: octocat
                </button>
                <button
                  onClick={() => setSearchParams({ ...searchParams, location: 'San Francisco' })}
                  className="example-btn"
                >
                  location: San Francisco
                </button>
                <button
                  onClick={() => setSearchParams({ ...searchParams, minRepos: '50' })}
                  className="example-btn"
                >
                  repos: 50+
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Grid */}
        {results.items.length > 0 && (
          <>
            <div className="results-grid">
              {results.items.map((user) => (
                <div key={user.id} className="user-card">
                  <div className="user-header">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="user-avatar"
                    />
                    <div className="user-info">
                      <h3 className="user-name">
                        {user.name || user.login}
                      </h3>
                      <p className="user-login">@{user.login}</p>
                      {user.bio && (
                        <p className="user-bio">
                          {user.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* User Stats */}
                  <div className="user-stats">
                    <div className="stat-item">
                      <div className="stat-value">{formatNumber(user.followers)}</div>
                      <div className="stat-label">Followers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{formatNumber(user.following)}</div>
                      <div className="stat-label">Following</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{formatNumber(user.public_repos)}</div>
                      <div className="stat-label">Repos</div>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="user-details">
                    {user.location && (
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user.company && (
                      <div className="detail-item">
                        <span className="detail-icon">🏢</span>
                        <span>{user.company}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="user-actions">
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-profile"
                    >
                      View Profile
                    </a>
                    {user.blog && (
                      <a
                        href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-website"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {results.has_more && (
              <div className="load-more-section">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="btn-load-more"
                >
                  {loading ? (
                    <>
                      <div className="spinner" style={{ display: 'inline-block', width: '1rem', height: '1rem', borderWidth: '2px', marginRight: '0.5rem' }}></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <span>Load More Users</span>
                  )}
                </button>
                <p className="results-info">
                  Showing {results.items.length} of {formatNumber(results.total_count)} users
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Info */}
      <div className="info-box">
        <h4 className="info-title">About Advanced Search</h4>
        <p className="info-text">
          This advanced search uses GitHub's Search API with multiple filters.
          Results include detailed user information and support pagination.
          Rate limits: 10 requests per minute for unauthenticated users.
        </p>
      </div>
    </div>
  );
};

export default AdvancedSearch;
