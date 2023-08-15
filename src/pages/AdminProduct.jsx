import { useAdminProduct } from "../hooks/useAdminProduct";
import {
  Container,
  Content,
  PaginationContainer,
  PaginationButton,
  PageWrapper,
  FixedPaginationContainer,
} from "../styles/Home";

function Products() {
  const [products, currentPage, totalPages, handlePageChange] =
    useAdminProduct();
  const maxButtonsToShow = 5; // Maximum number of pagination buttons to show

  const renderPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxButtonsToShow / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    const addButton = (key, label, page, additionalProps = {}) => {
      buttons.push(
        <PaginationButton
          key={key}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
          {...additionalProps}
        >
          {label}
        </PaginationButton>
      );
    };

    if (startPage > 1) {
      addButton(1, "1", 1);
      if (startPage > 2) {
        buttons.push(<span key="ellipsis-start">...</span>);
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      addButton(page, page, page);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis-end">...</span>);
      }
      addButton(totalPages, totalPages, totalPages);
    }

    return buttons;
  };

  return (
    <>
      <PageWrapper>
        <Container>
          {products.map((product, index) => (
            <Content key={index}>
              <h2>{product.title}</h2>
              <p>{product.content}</p>
              <strong>{product.creater}</strong>
            </Content>
          ))}
        </Container>
        <FixedPaginationContainer>
          <PaginationContainer>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
            {[...renderPaginationButtons()]}
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </PaginationContainer>
        </FixedPaginationContainer>
      </PageWrapper>
    </>
  );
}

export default Products;
