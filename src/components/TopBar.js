import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'

export default function TopBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt ="instacart" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link>
                        <Button variant="light">Log in</Button>
                        <Button variant="success">Sign up</Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}