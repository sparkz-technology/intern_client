import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--color-grey-0);
  padding: 20px 0px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const Content = styled.div`
  position: relative;
  margin: 20px;
  background-color: var(--color-grey-0);
  width: 300px;
  border: 1px solid var(--color-grey-300);
  border-radius: 8px;
  padding: 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    /* color:; */
    font-size: 30px;
    font-weight: 400;
    margin: 0 0 10px;
    color: var(--color-brand-500);
  }
  p {
    font-weight: 300;
    font-size: 16px;
    margin: 0 0 10px;
    color: var(--color-brand-500);
  }
  span {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-green-700);
  }
  strong {
    text-align: start;
    width: fit-content;
    color: var(--color-grey-300);
    font-size: 16px;
    font-weight: 100;
    text-align: center;
  }
  button {
    position: absolute;
    text-align: center;
    width: 25px;
    border-radius: 100%;
    background-color: var(--color-grey-0);
    color: var(--color-red-700);
    border: solid red 2px;
    padding: 5px;
    /* padding: 12px 25px; */
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    top: 7px;
    right: 10px;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-red-800);
      color: var(--color-grey-0);
    }
  }
`;
// export const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
//   bottom: 0;
// `;

// export const PaginationButton = styled.button`
//   background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
//   color: ${(props) => (props.active ? "#fff" : "#333")};
//   border: none;
//   padding: 8px 16px;
//   margin: 4px;
//   cursor: pointer;
//   border-radius: 4px;
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     background-color: ${(props) => (props.active ? "#0056b3" : "#eee")};
//   }
// `;

// export const PageWrapper = styled.div`
//   position: relative;
// `;

// export const FixedPaginationContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   margin-bottom: 20px;
// `;
// export const PageIndicator = styled.p`
//   margin-top: 10px;
//   font-size: 16px;
// `;
{
  /* <PageIndicator>
        Page: {currentPage} of {totalPages}
      </PageIndicator> */
}
