import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavigationBar extends React.Component{

    render(){
        return(
          <>
           <br />
            <Navbar bg="light" variant="light">
            <Container style={{marginLeft: '40%', display:'flex', textAlign:'center'}}>
              
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{marginRight:'12px'}}>Home</Nav.Link>
                <Nav.Link href="#projects"style={{marginRight:'12px'}}>Projects</Nav.Link>
                <Nav.Link href="#contact" style={{marginRight:'12px'}}>Contact</Nav.Link>
              
              </Nav>
            </Container>
          </Navbar>
          </>
        )

    }
}

export default NavigationBar; 