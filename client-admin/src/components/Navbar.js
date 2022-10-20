import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'


function NavbarComponent() {
    const navigate = useNavigate()

  return (
    <Navbar bg="white mb-5" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
            <img 
            src={process.env.PUBLIC_URL + '/assets/logo-subway.png'}
            width="250"
            height="50"
            />
          </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={()=> navigate('/')} >DASHBOARD</Nav.Link>
            <Nav.Link href="" onClick={()=> navigate('/categories')} >CATEGORIES</Nav.Link>
            <Nav.Link href="" onClick={()=> navigate('/register')}>REGISTER ADMIN</Nav.Link>
            <Nav.Link href="" onClick={()=> navigate('/login')}>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;