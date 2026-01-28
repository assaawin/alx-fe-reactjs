import axios from 'axios';

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com';

// Create axios instance
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

// Add token to requests if available
if (import.meta.env.VITE_GITHUB_TOKEN) {
  githubApi.defaults.headers.common['Authorization'] = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
}

/**
 * Fetch user data by username
 * @param {string} username - GitHub username
 * @returns {Promise} - User data
 */
export const fetchUserData = async (username) => {
  try {
    const searchUsername = username.trim();
    if (!searchUsername) {
      throw new Error('Please enter a username');
    }

    const response = await githubApi.get(`/users/${searchUsername}`);
    
    return {
      data: response.data,
      error: null,
      status: 'success'
    };
    
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.username - Username to search
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum repositories
 * @param {number} searchParams.page - Page number for pagination
 * @param {number} searchParams.perPage - Results per page
 * @returns {Promise} - Search results
 */
export const advancedSearchUsers = async (searchParams) => {
  try {
    const {
      username = '',
      location = '',
      minRepos = '',
      page = 1,
      perPage = 10
    } = searchParams;

    // Build query string
    let query = '';
    
    if (username) {
      query += `${username} `;
    }
    
    if (location) {
      query += `location:${location} `;
    }
    
    if (minRepos) {
      query += `repos:>${minRepos} `;
    }
    
    // Trim and remove trailing spaces
    query = query.trim();
    
    if (!query) {
      throw new Error('Please enter at least one search criteria');
    }

    const response = await githubApi.get('/search/users', {
      params: {
        q: query,
        page: page,
        per_page: perPage,
        sort: 'joined',
        order: 'desc'
      }
    });

    // Fetch detailed user data for each result
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const userDetails = await githubApi.get(`/users/${user.login}`);
          return userDetails.data;
        } catch (error) {
          return user; // Return basic user data if details fetch fails
        }
      })
    );

    return {
      data: {
        items: usersWithDetails,
        total_count: response.data.total_count,
        incomplete_results: response.data.incomplete_results,
        page: page,
        per_page: perPage,
        has_more: (page * perPage) < response.data.total_count
      },
      error: null,
      status: 'success'
    };
    
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Handle API errors
 * @param {Error} error - Error object
 */
const handleApiError = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response.status === 403) {
      throw new Error('API rate limit exceeded. Try again later or add a GitHub token.');
    } else if (error.response.status === 422) {
      throw new Error('Invalid search parameters. Please check your input.');
    } else {
      throw new Error(`GitHub API error: ${error.response.status} - ${error.response.data.message}`);
    }
  } else if (error.request) {
    throw new Error('Network error. Please check your connection.');
  } else {
    throw new Error(error.message || 'An error occurred');
  }
};

// Export the axios instance
export default githubApi;
