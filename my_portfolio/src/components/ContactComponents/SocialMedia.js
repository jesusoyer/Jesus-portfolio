import React from "react";
import linkedInImage from "./socialMediaImages/linkedIn.png"
import gitHubImage from "./socialMediaImages/github.png"
import './SocialMediaCss.css'

class SocialMedia extends React.Component{

    render(){
        return(

<div class="ui four column grid">
  <div class="column">
    <img className="linkedInImage" src={linkedInImage}></img>
  </div>
  <div class="column">
  <img className="linkedInImage" src={gitHubImage}></img>
  </div>
  <div class="column">
  <img className="linkedInImage" src={linkedInImage}></img>
  </div>
  <div class="column">
  <img className="linkedInImage" src={linkedInImage}></img>
  </div>
  
</div>








            


          
        )

    }
}
export default SocialMedia;