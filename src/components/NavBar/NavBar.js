import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="nav-bar">
      <Container className="d-flex justify-content-between">
        <div>
          <Link className="text-decoration-none fw-bold" to={"/"}>
            QuizStation
          </Link>
        </div>
        <div>
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light "
                  : " text-decoration-none mx-2 "
              }
              to={"/home"}
            >
              Home{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light "
                  : " text-decoration-none mx-2 "
              }
              to={"/topics"}
            >
              Topics{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light"
                  : " text-decoration-none mx-2"
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light "
                  : " text-decoration-none mx-2"
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
