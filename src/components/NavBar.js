import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
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

    <Dropdown position="fixed">
      <Dropdown.Toggle variant="outline" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">smartphones</Dropdown.Item>
        <Dropdown.Item href="#/action-2">laptops</Dropdown.Item>
        <Dropdown.Item href="#/action-3">fragrances</Dropdown.Item>
        <Dropdown.Item href="#/action-3">skincare</Dropdown.Item>
        <Dropdown.Item href="#/action-3">groceries</Dropdown.Item>
        <Dropdown.Item href="#/action-3">home-decoration</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>
   
    </>
  );
}

export default NavBar;