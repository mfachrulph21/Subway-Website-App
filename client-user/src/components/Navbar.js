import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


function NavbarComponent() {
    // const [categories, setCategories] = useState([])
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
          {/* <Nav className="me-auto">
          <NavDropdown title="OUR MENU" id="basic-nav-dropdown">
            {categories.map((category, index) => {
                return <NavDropdown.Item href="#">{category.name}</NavDropdown.Item>
            })} 
            </NavDropdown>
          </Nav> */}
          <Nav className="navbar-menu me-auto navbarMenu">
              <Nav.Link onClick={() => navigate('/')}>HOME</Nav.Link>
              <Nav.Link onClick={() => navigate('/products')} >PRODUCTS</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;