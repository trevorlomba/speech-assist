export const getApiKey = () => {
  // For development
  if (process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_OPENAI_API_KEY;
  }
  // For production
  return window.REACT_APP_OPENAI_API_KEY;
};
