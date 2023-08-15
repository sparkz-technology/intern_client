import Axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function useAdminProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      setTotalPages(lastPage);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      await fetchProducts(page);
    }
  }

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return [products, currentPage, totalPages, handlePageChange];
}
