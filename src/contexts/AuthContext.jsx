/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import Cookies from "js-cookie";
import Axios from "axios";
import { toast } from "react-hot-toast";

// API URL
const API_URL = "http://localhost:8000/auth";

// Auth Context
const AuthContext = createContext();

// Initial State
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Reducer Function
function authReducer(state, action) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Invalid action");
  }
}

// Auth Provider Component
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize state from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      dispatch({
        type: "init",
        payload: { user: storedUser, isAuthenticated: true },
      });
    }
  }, []);

  async function login(email, password) {
    try {
      const res = await Axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const data = res.data;
      Cookies.set("user", data.userName);
      Cookies.set("token", data.token);

      // Store user and token data in localStorage
      localStorage.setItem("user", data.userName);
      localStorage.setItem("token", data.token);

      dispatch({ type: "login", payload: data });
      toast.success("Login successful !");
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      console.error("An error occurred:", error);
    }
  }

  function logout() {
    Cookies.remove("token");
    Cookies.remove("user");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful !");
    dispatch({ type: "logout" });
  }

  const authContextValue = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook for using Auth Context
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
