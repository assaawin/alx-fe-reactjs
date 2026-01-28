// Simpler version without axios for testing
export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      data: data,
      error: null,
      status: "success",
    };
  } catch (error) {
    throw new Error(error.message || "Looks like we cant find the user");
  }
};
