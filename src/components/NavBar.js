import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
    <Navbar bg="light"  expand="lg" className="navbar sticky-top navbar-expand-lg">
      <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2"><Link to="login">Login</Link></Nav.Link>
          
            <Nav.Link href="#action2"><Link to="register">Register</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Items"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>

    
    </>
  );
}

export default NavBar;