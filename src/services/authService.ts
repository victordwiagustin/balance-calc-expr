const authService = {
  isAuthenticated: false,
  login: () => {
    authService.isAuthenticated = true;
  },
  logout: () => {
    authService.isAuthenticated = false;
  },
};

// Bisa diganti ke functions or class instead of object
export default authService;
