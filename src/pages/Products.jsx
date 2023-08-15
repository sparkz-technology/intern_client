import { useProducts } from "../hooks/useProducts";
import { Container, Content } from "../styles/Home";
import styled from "styled-components";

function Products() {
  const {
    products,
    currentPage,
    handlePreviousPage,
    handleNextPage,
    lastPage,
  } = useProducts();

  return (
    <>
      <Container>
        {products.map((product, index) => (
          <Content key={index}>
            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <span>Price ${product.price}</span>
            <strong>Creater:{product.creater}</strong>
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
    border: 1px solid var(--color-indigo-700);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
