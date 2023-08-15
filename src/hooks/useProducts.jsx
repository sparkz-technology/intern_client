import Axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  async function fetchProducts(page) {
    try {
      const res = await Axios.get(
        `http://localhost:8000/product/getproducts?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const { products: product, currentPage, lastPage } = res.data;
      setProducts(product);
      setCurrentPage(currentPage);
      setLastPage(lastPage);
    } catch (error) {
      toast.error("Error fetching products");
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    fetchProducts(1);
  }, []);
  // , handleNextPage
  async function handlePreviousPage() {
    if (currentPage === 1) return toast.error("No more products");
    await fetchProducts(currentPage - 1);
  }
  async function handleNextPage() {
    if (currentPage === lastPage) return toast.error("No more products");
    await fetchProducts(currentPage + 1);
  }

  return {
    products,
    currentPage,
    lastPage,
    handlePreviousPage,
    handleNextPage,
  };
}
