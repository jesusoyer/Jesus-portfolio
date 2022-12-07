import React from "react";
import './projects.css';
import testProjectImage from './ProjectImages/testProjectImage.jpg'

class ProjectGrid extends React.Component{

    render(){
        return(
            <div>
                <div class="ui three column relaxed grid projectsContainer" >
  <div class="five wide column firstColumn">
    <div class="ui segment ">
      <img className="testImages" src={testProjectImage}></img>
    </div>
    <div class="ui segment">
      <img className="testImages" src={testProjectImage}></img>
    </div>
  </div>
  <div class="five wide column">
    <div class="ui segment">
      <img className="testImages" src={testProjectImage}></img>
    </div>
    <div class="ui segment">
      <img className="testImages" src={testProjectImage}></img>
    </div>
  </div>
  <div class="five wide column">
    <div class="ui segment">
      <img className="testImages" src={testProjectImage}></img>
    </div>
    <div class="ui segment">
      <img className="testImages" src={testProjectImage}></img>
    </div>
  </div>
  
</div>



            </div>
        )
    }
}

export default ProjectGrid;