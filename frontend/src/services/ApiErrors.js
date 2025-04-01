// Function to handle API errors
export const ApiErrors = (error) => {
  if (error.response) {
    // Server responded with a status code outside 2xx
    console.error("API Error:", error.response.data);
    return {
      success: false,
      message:
        error.response.data?.message ||
        `Server error: ${error.response.status}`,
    };
  } else if (error.request) {
    // No response received
    return { success: true, message: "Network error: Server unreachable" };
  } else {
    // Other errors (unexpected)
    console.error("Unexpected Error:", error.message);
    return { success: false, message: "Unexpected error occurred" };
  }
};
