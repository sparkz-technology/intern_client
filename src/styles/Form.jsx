import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  box-shadow: val(--shadow-lg);
  font-size: 20px;
  font-weight: 600;
  height: 100vh;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.form`
  font-family: "Poppins", sans-serif;
  color: var(-color-grey-900);
  border-radius: 7px;
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 32rem;
  margin: ${(props) => props.size || " 8rem auto"};
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);

  input {
    padding: 0px 20px;
    height: 40px;
    border: 1px solid var(--color-grey-300);
    border-radius: 8px;
    color: var(--color-indigo-700);
    transition: border-color 0.3s ease-in-out;
    font-size: 16px;
    background-color: var(--color-grey-0);

    &:focus {
      border-color: var(--color-indigo-700);
      outline: none;
    }

    &::placeholder {
      color: var(--color-grey-400);
    }
  }
  label {
    font-size: 14px;
    color: var(--color-grey-900);
  }
  h1 {
    /* font-size: 24px; */
    color: var(--color-grey-900);
  }
  textarea {
    padding: 10px 20px;
    height: 60px;
    border: 1px solid var(--color-grey-300);
    border-radius: 8px;
    color: var(--color-grey-900);
    transition: border-color 0.3s ease-in-out;
    font-size: 16px;
    background-color: var(--color-grey-0);
    &:focus {
      border-color: var(--color-indigo-700);
      outline: none;
    }
    &::placeholder {
      color: var(--color-grey-400);
    }
  }
  p {
    font-size: 14px;
    color: var(--color-red-700);
    margin-top: 6px;
  }

  button {
    background-color: var(--color-indigo-700);
    color: var(--color-grey-0);
    border: none;
    border-radius: 8px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-indigo-700);
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
  color: var(--color-indigo-700);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  text-align: end;
`;
