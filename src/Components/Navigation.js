import React from "react";
//We installed react-bootstrab so we could call to componenets form the react-bootstrap package that will render Bootstrap enabled HTML just by the call to one of their components. Follow the steps bleow to implement:
//1. npm install react-bootstrap
//2. Import the components we want to use from the package
//3. Call to the component desired and pass in porps to cusomize

import { Nav, Navbar } from "react-bootstrap";
//Below we import the Link Component from a package called react-router-dom that connects the routing functionality in our app to the navigation we write. It's just a specialized Link!
//To install react-router-dom  (routing functionality), np,m install react-router-dom then import {Link} like below
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const { currentUser, login, logout } = useAuth();

  return (
    <Navbar variant="dark" bg="dark" expand="md" className="p-3">
      <Navbar.Brand href="/">ResourcePlus</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {/* Below we only show resources and categories when the user is loged in. */}
          {currentUser && (
            <>
              <Link to="/resources" className="nav-link">
                Resources
              </Link>
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </>
          )}
          <Link to="/bootstrap" className="nav-link">
            Bootstrap
          </Link>
          <Link to="/routing" className="nav-link">
            Routing
          </Link>
          {currentUser ? (
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={() => login()}>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
