// This module exports an object with two methods for handling authentication
module.exports = {
  // Ensure that the user is authenticated
  ensureAuthenticated: function(req, res, next) {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      // If the user is authenticated, call the next middleware
      return next();
    }
    // If the user is not authenticated, set a flash message and redirect to the login page
    req.flash('error_msg', 'Please log in to view that resource');
    res.redirect('/users/login');
  },
  // Forward the user if they are already authenticated
  forwardAuthenticated: function(req, res, next) {
    // Check if the user is not authenticated
    if (!req.isAuthenticated()) {
      // If the user is not authenticated, call the next middleware
      return next();
    }
    // If the user is authenticated, redirect to the dashboard
    res.redirect('/dashboard');      
  }
};
