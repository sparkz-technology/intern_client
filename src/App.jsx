import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProduct";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/products" element={<Products />} />
              <Route path="/admin-products" element={<AdminProducts />} />
              <Route path="/admin-add-product" element={<AddProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </AuthProvider>
    </>
  );
}

export default App;
