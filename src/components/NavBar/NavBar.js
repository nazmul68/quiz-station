import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex">
        <div>
          <Link className="text-decoration-none fw-bold fs-3" to={"/"}>
            Quiz Station
          </Link>
        </div>
        <div>
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light fw-bold"
                  : " text-decoration-none mx-2 fw-bold"
              }
              to={"/home"}
            >
              Home{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light fw-bold"
                  : " text-decoration-none mx-2 fw-bold"
              }
              to={"/topics"}
            >
              Topics{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light fw-bold"
                  : " text-decoration-none mx-2 fw-bold"
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none mx-2 text-light fw-bold"
                  : " text-decoration-none mx-2 fw-bold"
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
