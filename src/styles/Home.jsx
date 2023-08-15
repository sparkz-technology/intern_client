import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Content = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  bottom: 0;
`;

export const PaginationButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  padding: 8px 16px;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#eee")};
  }
`;

export const PageWrapper = styled.div`
  position: relative;
`;

export const FixedPaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-bottom: 20px;
`;
// export const PageIndicator = styled.p`
//   margin-top: 10px;
//   font-size: 16px;
// `;
{
  /* <PageIndicator>
        Page: {currentPage} of {totalPages}
      </PageIndicator> */
}
