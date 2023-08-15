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
  background-color: var(--color-indigo-700);
  border: solid var(--color-indigo-700) 2px;
  color: var(--color-grey-0);
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-indigo-700);
  }
`;

const StyledNavLinkSignup = styled(NavLink)`
  width: 3rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--color-grey-0);
  color: var(--color-indigo-700);
  border: solid var(--color-indigo-700) 2px;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-indigo-700);
    color: var(--color-grey-0);
  }
`;
const StyledNavLink = styled(NavLink)`
  color: var(--color-indigo-700);
  font-size: larger;
  font-family: sans-serif;
`;
