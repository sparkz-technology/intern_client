/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useProducts } from "../hooks/useProducts";

const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PageLink = styled.button`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  padding: 10px 15px;
  margin: 0 5px;
  color: #333;
  background-color: ${(props) => (props.isActive ? "#007bff" : "transparent")};
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f4f4f4; // Use a different color for hover state
  }
`;

const Ellipsis = styled.span`
  margin: 0 5px;
  font-weight: bold;
`;

const Pagination = () => {
  const { currentPage, lastPage, PagePlus, PageMinus } = useProducts();

  const startPage = Math.max(currentPage - 1, 1); // Adjusted startPage calculation
  const endPage = Math.min(startPage + 2, lastPage); // Adjusted endPage calculation

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PageLink onClick={() => PageMinus(currentPage)}>First</PageLink>
      )}
      {startPage > 1 && <Ellipsis>...</Ellipsis>}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;
        return (
          <PageLink
            key={page}
            onClick={page === currentPage ? null : () => PagePlus(page)}
            isActive={currentPage === page}
          >
            {page}
          </PageLink>
        );
      })}
      {endPage < lastPage && <Ellipsis>...</Ellipsis>}
      {currentPage < lastPage && (
        <PageLink onClick={() => PagePlus(currentPage)}>Last</PageLink>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
