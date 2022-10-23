import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


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