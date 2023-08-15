import Axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export function useAdminProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  async function fetchProducts(page) {
    try {
      const res = await Axios.get(
        `http://localhost:8000/admin/products?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const { products: product, currentPage, lastPage } = res.data;
      console.log("products:", product);
      setProducts(product);
      setCurrentPage(currentPage);
      setLastPage(lastPage);
    } catch (error) {
      // if the status code is 404 show no product
      if (error.response.status === 404) {
        return setProducts([]);
      }
      toast.error("Error fetching products");
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    fetchProducts(1);
  }, []);

  async function handlePreviousPage() {
    if (currentPage === 1) return toast.error("No more products");
    await fetchProducts(currentPage - 1);
  }
  async function handleNextPage() {
    if (currentPage === lastPage) return toast.error("No more products");
    await fetchProducts(currentPage + 1);
  }
  async function handleDeleteProduct(id) {
    try {
      await Axios.delete(`http://localhost:8000/admin/product/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      toast.success("Product deleted");
      await fetchProducts(currentPage);
    } catch (error) {
      toast.error("Error deleting product");
      console.error("Error deleting product:", error);
    }
  }

  return {
    products,
    currentPage,
    lastPage,
    handlePreviousPage,
    handleNextPage,
    handleDeleteProduct,
  };
}
