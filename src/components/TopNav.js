import React from 'react';
import './TopNav.css'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'

class TopNav extends React.Component {
    render() {
        return (
            <div className="TopNav">
                <Navbar bg='dark'>
                    <NavbarBrand href="#home">Welcome</NavbarBrand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Me</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar>
                {/* <Button>hello</Button>
            <p>just a test, {this.props.name}</p>
            <p>color is {this.props.color}</p> */}
            </div>
        );
    }
}

export default TopNav;