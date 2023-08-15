import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 600;
  a {
    text-decoration: none;
  }
`;
export const Nav = styled.ul`
  display: flex;
  align-items: end;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
