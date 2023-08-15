import { NavLink } from "react-router-dom";
import { Container, Nav } from "../styles/Navbar";
function Navbar() {
  return (
    <>
      <Container>
        <NavLink to="/">Home</NavLink>
        <Nav>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
