import React from "react";
import linkedIn from './navigationImages/linkedIn.png';
import gitHub from './navigationImages/gitHub.png';
import InfoModal from "./InfoModal";

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
                <Nav.Link href="/" style={{marginRight:'12px'}}>Home</Nav.Link>
                <Nav.Link href="/Projects"style={{marginRight:'12px'}}>Projects</Nav.Link>
                
                <Nav.Link href="" target="_blank" style={{marginRight:'12px'}}><InfoModal /></Nav.Link>
                
                <Nav.Link href="https://www.linkedin.com/in/jesus-oyervides-jr/" target="_blank" style={{marginRight:'12px'}}><img className="linkedInNavImage"  src={linkedIn}></img></Nav.Link>

                <Nav.Link href="https://github.com/jesusoyer" target="_blank" style={{marginRight:'12px'}}><img className="gitHubNavImage"  src={gitHub}></img></Nav.Link>

                
              
              </Nav>
            </Container>
          </Navbar>
          </>
        )

    }
}

export default NavigationBar; 