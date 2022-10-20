import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/categories")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setCategories(data)
        })
    }, [])
    

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
          <NavDropdown title="OUR MENU" id="basic-nav-dropdown">
            {categories.map((category, index) => {
                return <NavDropdown.Item href="#">{category.name}</NavDropdown.Item>
            })} 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;