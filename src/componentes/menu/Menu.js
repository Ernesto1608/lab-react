import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {

    render() {

        return (

			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/lab-react/">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/lab-react/">Game</Nav.Link>
							<Nav.Link href="/lab-react/">Game</Nav.Link>
							<NavDropdown title="Game dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="/lab-react/">Game</NavDropdown.Item>
								<NavDropdown.Item href="/lab-react/">Game</NavDropdown.Item>
								<NavDropdown.Item href="/lab-react/">Game</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="https://cdn.eldeforma.com/wp-content/uploads/2020/06/396216-341643145878615-1483311747-n.jpg">This is not an easter egg</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

        )

    }
}

export default Menu;