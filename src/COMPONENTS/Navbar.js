import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <>
        <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand>Training Institute</BSNavbar.Brand>

        <BSNavbar.Toggle />
        <BSNavbar.Collapse>
          <Nav className="ms-auto">

            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/courses" className="nav-link">Courses</NavLink>
            <NavLink to="/instructors" className="nav-link">Instructors</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>

          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
    </>
  )
}

export default Navbar
