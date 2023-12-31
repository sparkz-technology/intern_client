import { styled } from "styled-components";
import Navbar from "../ui/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <Container>
        <StylesHome>
          <h1>The Wild Oasis</h1>
          <h3>
            welcome to the wild oasis where you imagination personifies
            <br />
            into reality and hones itself to perfection
          </h3>
          <button onClick={handleLogin}>Get started</button>
        </StylesHome>
      </Container>
    </>
  );
}

export default Home;

const StylesHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  min-height: calc(100vh - 64px);
  button {
    width: 15%;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--color-indigo-700);
    color: var(--color-grey-0);
    border: none;
    border-radius: 8px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-indigo-700);
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 14px;
    }
    /* border: none; */
  }

  h1 {
    font-size: 100px;
    font-weight: 200;
    color: var(--color-indigo-700);
  }

  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 300;
    color: var(--color-indigo-700);
  }
`;

const Container = styled.div`
  margin: auto;
  /* display: flex;
  justify-content: center; */
  align-items: center;
`;
