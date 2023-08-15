import { styled } from "styled-components";
import Navbar from "../ui/Navbar";

function Home() {
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
          <button>Get started</button>
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
  background-color: #fff;
  min-height: calc(100vh - 70px);
  button {
    width: 15%;
    padding: 1rem;
    border-radius: 10px;
    background-color: #6c63ff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #564dff;
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
  }

  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 300;
  }
`;

const Container = styled.div`
  margin: auto;
  /* display: flex;
  justify-content: center; */
  align-items: center;
`;
