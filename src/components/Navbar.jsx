import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavbarComponent from "react-bootstrap/Navbar"; // Renamed to avoid conflict
import { Link } from "react-router-dom";

import "../componentsCss/NavbarCss.css";

function Navbar() {
  return (
    <NavbarComponent expand="lg" className="navbar-dark-theme">
      <Container fluid>
        <NavbarComponent.Brand href="#" className="text-white">
          HYPERSONIC
        </NavbarComponent.Brand>
        <NavbarComponent.Toggle aria-controls="navbarScroll" />
        <NavbarComponent.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll>
            <Nav.Link as={Link} to="hypersonic/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv" className="text-white">
              Television
            </Nav.Link>
            <Nav.Link as={Link} to="/washing" className="text-white">
              Washing-Machine
            </Nav.Link>
            <Nav.Link as={Link} to="/microwave" className="text-white">
              Microwave
            </Nav.Link>
            <Nav.Link as={Link} to="/aircondition" className="text-white">
              Air-Conditioner
            </Nav.Link>
            <Nav.Link as={Link} to="/Refridgerater" className="text-white">
            Refrigerator
            </Nav.Link>
            <Nav.Link as={Link} to="/DishWasher" className="text-white">
            Dish-Washer
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/products" className="text-white">
              Products
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/blogs" className="text-white">
              Blogs
            </Nav.Link> */}
            <Nav.Link as={Link} to="/book-now" className="text-white">
              Book-Now
            </Nav.Link>
            <Nav.Link as={Link} to="/troubleshoot" className="text-white">
              Trouble-Shoot
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-button">
              Search
            </Button>
          </Form>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}

export default Navbar;
