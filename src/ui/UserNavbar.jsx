import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
function UserNavbar() {
  const { logout } = useAuth();
  const user = Cookies.get("user");
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <Container>
        <div>
          <StyledNavLink to="/products">Products</StyledNavLink>
          <StyledNavLink to="/admin-products">Admin Products</StyledNavLink>
          <StyledNavLink to="/admin-add-product">Add Product</StyledNavLink>
        </div>
        <Nav>
          <li>
            <DarkModeToggle />
            <span>
              Welcome !<strong> {user}</strong>{" "}
            </span>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </Nav>
      </Container>
    </>
  );
}

export default UserNavbar;

const Container = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: var(--shadow-lg);
  font-size: 20px;
  font-weight: 600;
  a {
    text-decoration: none;
  }
  span {
    font-size: 15px;
    font-weight: 400;
    color: var(--color-indigo-700);
  }
  strong {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-brand-900);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    div {
      margin-bottom: 10px;
    }
  }
`;
const Nav = styled.ul`
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
    transition: all 0.3s ease;
  }
  span {
    margin-right: 10px;
  }
`;
const Button = styled.button`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-indigo-700);
  color: var(--color-indigo-700);
  padding: 10px 20px;
  font-weight: 800;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--color-indigo-700);
    color: var(--color-grey-0);
  }
  &:focus {
    outline: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-indigo-700);
  padding: 0.5rem;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 100;
  margin-left: 10px;
  &.active {
    border: solid var(--color-indigo-700);
    border-top: 15px;
    border-left: 15px;
    border-right: 15px;
  }
`;
