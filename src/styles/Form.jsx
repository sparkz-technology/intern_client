import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 600;
  height: 100vh;
`;

export const FormContainer = styled.form`
  font-family: "Poppins", sans-serif;
  color: #333;
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 32rem;
  margin: ${(props) => props.size || " 8rem auto"};
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  input {
    padding: 0px 20px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: #333;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }

    &::placeholder {
      color: #999;
    }
  }
  textarea {
    padding: 10px 20px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: #333;
    transition: border-color 0.3s ease-in-out;
    font-size: 16px;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
    &::placeholder {
      color: #999;
    }
  }
  p {
    font-size: 14px;
    color: #ff6b6b;
    margin-top: 6px;
  }

  button {
    background-color: #6c63ff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #564dff;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const StyledLink = styled(Link)`
  color: #6c63ff;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  text-align: end;
`;
