import React, { useState } from 'react';
import { advancedSearchUsers } from '../services/githubService.js';

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-github-blue mb-3">
          Advanced GitHub User Search
        </h1>
        <p className="text-github-dark-muted text-lg">
          Search GitHub users with advanced filters and detailed information
        </p>
      </div>

      {/* Search Form */}
      <div className="card p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Search */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-github-blue text-xl">🔍</span>
              <label className="text-github-dark-text font-medium text-lg">
                Basic Search
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-github-dark-muted mb-2">
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
              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="btn-secondary w-full md:w-auto flex items-center justify-center space-x-2"
                >
                  <span>⚙️</span>
                  <span>{showAdvanced ? 'Hide Advanced Filters' : 'Show Advanced Filters'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="space-y-4 pt-6 border-t border-github-dark-border">
              <div className="flex items-center space-x-3">
                <span className="text-github-blue text-xl">⚙️</span>
                <label className="text-github-dark-text font-medium text-lg">
                  Advanced Filters
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-github-dark-muted mb-2">
                    <span className="mr-2">📍</span>
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
                  <p className="text-xs text-github-dark-muted mt-1">
                    Filter users by location
                  </p>
                </div>

                {/* Minimum Repositories */}
                <div>
                  <label className="block text-sm font-medium text-github-dark-muted mb-2">
                    <span className="mr-2">📦</span>
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
                  <p className="text-xs text-github-dark-muted mt-1">
                    Users with at least this many public repos
                  </p>
                </div>
              </div>

              {/* Search Tips */}
              <div className="bg-github-dark p-4 rounded-md border border-github-dark-border">
                <h4 className="text-github-blue font-medium mb-2">Search Tips:</h4>
                <ul className="text-sm text-github-dark-muted space-y-1">
                  <li>• Leave fields empty to search all users</li>
                  <li>• Combine filters for more specific results</li>
                  <li>• Use location names like "San Francisco" or "Remote"</li>
                  <li>• Minimum repos filter helps find active developers</li>
                </ul>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading || (!searchParams.username && !searchParams.location && !searchParams.minRepos)}
              className="btn-primary flex-1 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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
              className="btn-secondary flex-1"
            >
              Reset Filters
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Results Header */}
        {results.total_count > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 card">
            <h2 className="text-2xl font-bold text-github-blue">
              Search Results
            </h2>
            <div className="text-github-dark-muted">
              Found {formatNumber(results.total_count)} user{results.total_count !== 1 ? 's' : ''}
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-6 card border-l-4 border-github-red">
            <div className="flex items-start space-x-3">
              <div className="text-github-red text-xl">⚠️</div>
              <div>
                <h3 className="text-github-red font-bold text-lg">Error</h3>
                <p className="text-github-dark-text">{error}</p>
                <p className="text-github-dark-muted text-sm mt-2">
                  Please check your search criteria and try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && results.items.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-github-blue"></div>
            <p className="text-github-dark-muted mt-4">Searching GitHub users...</p>
          </div>
        )}

        {/* No Results */}
        {!loading && results.total_count === 0 && !error && (
          <div className="text-center py-12 card">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-github-blue mb-2">No Users Found</h3>
            <p className="text-github-dark-muted">
              Try adjusting your search criteria to find GitHub users.
            </p>
            <div className="mt-6 space-y-3 max-w-md mx-auto">
              <p className="text-sm text-github-dark-muted">Try these examples:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSearchParams({ ...searchParams, username: 'octocat' })}
                  className="px-3 py-1 bg-github-dark border border-github-dark-border rounded-full text-sm text-github-blue hover:bg-github-dark-border transition-colors"
                >
                  username: octocat
                </button>
                <button
                  onClick={() => setSearchParams({ ...searchParams, location: 'San Francisco' })}
                  className="px-3 py-1 bg-github-dark border border-github-dark-border rounded-full text-sm text-github-blue hover:bg-github-dark-border transition-colors"
                >
                  location: San Francisco
                </button>
                <button
                  onClick={() => setSearchParams({ ...searchParams, minRepos: '50' })}
                  className="px-3 py-1 bg-github-dark border border-github-dark-border rounded-full text-sm text-github-blue hover:bg-github-dark-border transition-colors"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.items.map((user) => (
                <div key={user.id} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    {/* User Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-16 h-16 rounded-full border-2 border-github-blue"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-github-blue truncate">
                          {user.name || user.login}
                        </h3>
                        <p className="text-github-dark-muted">@{user.login}</p>
                        {user.bio && (
                          <p className="text-sm text-github-dark-text mt-2 line-clamp-2">
                            {user.bio}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* User Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-github-dark rounded">
                        <div className="font-bold text-github-blue">{formatNumber(user.followers)}</div>
                        <div className="text-xs text-github-dark-muted">Followers</div>
                      </div>
                      <div className="text-center p-2 bg-github-dark rounded">
                        <div className="font-bold text-github-blue">{formatNumber(user.following)}</div>
                        <div className="text-xs text-github-dark-muted">Following</div>
                      </div>
                      <div className="text-center p-2 bg-github-dark rounded">
                        <div className="font-bold text-github-blue">{formatNumber(user.public_repos)}</div>
                        <div className="text-xs text-github-dark-muted">Repos</div>
                      </div>
                    </div>

                    {/* User Details */}
                    <div className="space-y-2 mb-4">
                      {user.location && (
                        <div className="flex items-center text-sm">
                          <span className="text-github-dark-muted mr-2">📍</span>
                          <span className="text-github-dark-text">{user.location}</span>
                        </div>
                      )}
                      {user.company && (
                        <div className="flex items-center text-sm">
                          <span className="text-github-dark-muted mr-2">🏢</span>
                          <span className="text-github-dark-text">{user.company}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full btn-primary text-center"
                      >
                        View Profile
                      </a>
                      {user.blog && (
                        <a
                          href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full btn-secondary text-center"
                        >
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {results.has_more && (
              <div className="text-center pt-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="btn-primary px-8 py-3 flex items-center space-x-2 mx-auto"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <span>Load More Users</span>
                  )}
                </button>
                <p className="text-github-dark-muted text-sm mt-2">
                  Showing {results.items.length} of {formatNumber(results.total_count)} users
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-12 p-6 card text-center">
        <h4 className="text-github-blue font-bold mb-2">About Advanced Search</h4>
        <p className="text-github-dark-muted text-sm">
          This advanced search uses GitHub's Search API with multiple filters.
          Results include detailed user information and support pagination.
          Rate limits: 10 requests per minute for unauthenticated users.
        </p>
      </div>
    </div>
  );
};

export default AdvancedSearch;
