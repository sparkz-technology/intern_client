import Axios from "axios";
import { useEffect, useState } from "react";
import { Container, Content } from "../styles/Home";
import Cookies from "js-cookie";
function AdminProducts() {
  const [products, setProducts] = useState([]); // Renamed state variable

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await Axios.get("http://localhost:8000/admin/products", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        const resData = res.data;
        console.log(resData);
        setProducts(resData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        {products.map((product, index) => (
          <Content key={index}>
            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <strong>{product.creater}</strong>
          </Content>
        ))}
      </Container>
    </>
  );
}

export default AdminProducts;
