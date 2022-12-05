import React from "react";
import testImage from './images/testImage.jpg'
import{Row, Col, Container} from 'react-bootstrap';



class AboutMe extends React.Component{

    render(){

        return(
            <Container>
            <Row>
              <Col  style={{ backgroundColor:'red',  }}>About Me</Col>
              <Col style={{width: '100%', }}><img src={testImage} alt ="testImage" style={{width:'100%'}}/></Col>
            </Row>
            </Container>

          
            
        );
    }
}

export default AboutMe;