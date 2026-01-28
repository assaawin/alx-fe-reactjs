import axios from "axios";

// GitHub API base URL
const GITHUB_API_URL = "https://api.github.com";

// Create axios instance
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

// Add token to requests if available (from environment variables)
if (import.meta.env.VITE_GITHUB_TOKEN) {
  githubApi.defaults.headers.common["Authorization"] =
    `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
}

/**
 * Fetches user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - Promise with user data
 */
export const fetchUserData = async (username) => {
  try {
    // Trim and validate username
    const searchUsername = username.trim();
    if (!searchUsername) {
      throw new Error("Please enter a username");
    }

    // Make API request using axios.get()
    const response = await githubApi.get(`/users/${searchUsername}`);

    // Return user data
    return {
      data: response.data,
      error: null,
      status: "success",
    };
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // GitHub API returned an error
      if (error.response.status === 404) {
        throw new Error("User not found");
      } else if (error.response.status === 403) {
        throw new Error(
          "API rate limit exceeded. Try again later or add a GitHub token.",
        );
      } else {
        throw new Error(`GitHub API error: ${error.response.status}`);
      }
    } else if (error.request) {
      // Request was made but no response
      throw new Error("Network error. Please check your connection.");
    } else {
      // Something else happened
      throw new Error(error.message || "An error occurred");
    }
  }
};

// Export the axios instance as well
export const get = githubApi.get;
export default githubApi;
