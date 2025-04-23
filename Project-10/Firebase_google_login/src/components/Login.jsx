import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/Firebase.js";
import "../index.css"

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking login
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading state

  const handleGoogleLogin = async () => {
    setLoading(true); // Set loading state
    try {
      await signInWithPopup(auth, provider);
      setIsLoggedIn(true); // Set login state to true after successful login
      setErrorMessage(""); // Reset any previous errors
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      setIsLoggedIn(false); // If login fails, set login state to false
    } finally {
      setLoading(false); // Reset loading state after operation
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Login with Google</h2>
      
      {/* Show success message if logged in */}
      {isLoggedIn && (
        <div className="success-message">
          <p>Login Successful!</p>
        </div>
      )}

      {/* Show error message if login fails */}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        className="login-button"
        onClick={handleGoogleLogin}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Logging in..." : "Login with Google"}
      </button>
    </div>
  );
}

export default Login;
