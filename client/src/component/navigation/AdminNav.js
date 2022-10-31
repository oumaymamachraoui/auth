import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/users";

const AdminNav = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"> Navbar </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
          </Nav>
          <Link to="/">
            <Button onClick={() => dispatch(logout())}> Logout </Button>{" "}
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNav;
