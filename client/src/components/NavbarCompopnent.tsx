import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarCompopnent = () => {
   return (
      <div>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand href="#home">Ethnus Assignment</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#transactions">Transactions</Nav.Link>
                  <Nav.Link href="#stats/statistics">Statistics</Nav.Link>
                  <Nav.Link href="#stats/barchart">BarChart</Nav.Link>
                  <Nav.Link href="#stats/piechart">PieChart</Nav.Link>
                  <Nav.Link href="#stats/report">Report</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </div>
   )
}

export default NavbarCompopnent