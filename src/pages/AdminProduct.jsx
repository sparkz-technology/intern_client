import { useAdminProduct } from "../hooks/useAdminProduct";
import { Container, Content } from "../styles/Home";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Products() {
  const {
    products,
    currentPage,
    handlePreviousPage,
    handleNextPage,
    lastPage,
    handleDeleteProduct,
  } = useAdminProduct();
  if (products.length === 0) {
    // You can add a navigation element to redirect to the add product page
    return (
      <Container>
        <p>
          No products found.{" "}
          <StyledNavLink to="/admin-add-product">
            Add a new product
          </StyledNavLink>
        </p>
      </Container>
    );
  }
  return (
    <>
      <Container>
        {products.map((product, index) => (
          <Content key={index}>
            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <span>Price ${product.price}</span>
            <strong>Creater:{product.creater}</strong>
            <button onClick={() => handleDeleteProduct(product._id)}>X</button>
          </Content>
        ))}
      </Container>
      {lastPage !== 1 && (
        <Pagination>
          <button onClick={handlePreviousPage}>Previous</button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage}>Next</button>
        </Pagination>
      )}
    </>
  );
}

export default Products;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-indigo-700);
    color: var(--color-grey-0);
    margin: 10px;
    cursor: pointer;
  }
  span {
    width: 30px;
    height: 30px;
    border: 1px solid var(--colo7-indigo-700);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-brand-500);
  padding: 0.5rem;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 100;
  margin-left: 10px;
  &.active {
    border: solid var(--color-indigo-700);
    border-top: 15px;
    border-left: 15px;
    border-right: 15px;
  }
`;
