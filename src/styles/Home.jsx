import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Content = styled.div`
  position: relative;
  /* width: 200px;
  height: 200px;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); */
  margin: 20px;
  background-color: #fff;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    /* color:; */
    font-size: 30px;
    font-weight: 400;
    margin: 0 0 10px;
  }
  p {
    font-weight: 300;
    font-size: 16px;
    margin: 0 0 10px;
  }
  span {
    font-weight: 600;
    font-size: 18px;
    color: #008000;
  }
  strong {
    text-align: start;
    width: fit-content;
    color: #ccc;
    font-size: 16px;
    font-weight: 100;
    text-align: center;
  }
  button {
    position: absolute;
    text-align: center;
    width: 25px;
    border-radius: 100%;
    background-color: #ffffff;
    color: #ff6b6b;
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
      background-color: #ff6b6b;
      color: #ffffff;
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
