import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../JS/actions/users";
const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"> Navbar </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {isAuth ? <Nav.Link href="/profil">Profil</Nav.Link> : null}
          </Nav>

          {isAuth ? (
            <Link to="/">
              <Button onClick={() => dispatch(logout())}> Logout </Button>{" "}
            </Link>
          ) : (
            <div>
              <Link to="/login">
                <Button>Login</Button>{" "}
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
