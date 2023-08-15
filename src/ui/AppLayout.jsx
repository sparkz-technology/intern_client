import { Outlet } from "react-router-dom";
import styled from "styled-components";
import UserNavbar from "./UserNavbar";
// import Sidebar from "../components/Sidebar";
const Container = styled.div`
  height: 100vh;
`;

function AppLayout() {
  return (
    <Container>
      <UserNavbar />
      <Outlet />
    </Container>
  );
}
export default AppLayout;
