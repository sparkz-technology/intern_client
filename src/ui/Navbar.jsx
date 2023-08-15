import { NavLink } from "react-router-dom";
import { Container, Nav } from "../styles/Navbar";
import { styled } from "styled-components";
function Navbar() {
  return (
    <>
      <Container>
        <StyledNavLink to="/">Home</StyledNavLink>
        <Nav>
          <li>
            <StyledNavLinkLogin to="/login">Login</StyledNavLinkLogin>
          </li>
          <li>
            <StyledNavLinkSignup to="/signup">Signup</StyledNavLinkSignup>
          </li>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;

const StyledNavLinkLogin = styled(NavLink)`
  width: 3rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #6c63ff;
  border: solid #6c63ff 2px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #564dff;
  }
`;

const StyledNavLinkSignup = styled(NavLink)`
  width: 3rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  color: #6c63ff;
  border: solid #6c63ff 2px;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #564dff;
    color: #ffffff;
  }
`;
const StyledNavLink = styled(NavLink)`
  color: #564dff;
  font-size: larger;
  font-family: sans-serif;
`;
