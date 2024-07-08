import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";


const NavbarCompopnent = () => {
   return (
      <div style={{ position: 'fixed', width: '100vw' }}>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand className="me-auto" href="#home">Ethnus Assignment</Navbar.Brand>
               <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#transactions">Transactions</Nav.Link>
                  <NavDropdown title="Statistics" id="navbarScrollingDropdown">
                     <Nav.Link href="#stats/salesData">Sales Data</Nav.Link>
                     <Nav.Link href="#stats/barchart">BarChart</Nav.Link>
                     <Nav.Link href="#stats/piechart">PieChart</Nav.Link>
                  </NavDropdown>
               </Nav>
            </Container>
         </Navbar>
      </div>
   )
}

export default NavbarCompopnent