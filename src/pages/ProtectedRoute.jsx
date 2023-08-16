/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Store the isAuthenticated status in a cookie
  // if authenticated, navigate to the lost used page on refresh

  useEffect(() => {
    console.log("ProtectedRoute useEffect:", isAuthenticated);
    if (!isAuthenticated && !localStorage.getItem("token")) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
