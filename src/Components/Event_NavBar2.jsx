import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Image,Button } from '@chakra-ui/react';
import logo from "../assets/logo.png"
const Event_NavBar2 = () => {
    return (
        <Navbar background="black" variant="dark" bg='dark' expand="lg" sticky='top'>
          <Container>
            <Navbar.Brand href="#home"><Image w={40} src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href='https://forms.gle/ZZ4RQboaMpwifuhJA' target='_blank'>
              <Button colorScheme='blue'>
                Submission Form
              </Button>
            </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Event_NavBar2