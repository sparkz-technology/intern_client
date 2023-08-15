/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Cookies from "js-cookie";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ProtectedRoute useEffect:", isAuthenticated);
    if (!isAuthenticated || Cookies.get("token") === undefined) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
