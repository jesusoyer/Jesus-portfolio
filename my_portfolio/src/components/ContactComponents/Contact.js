import React from "react";
import NavigationBar from "../NavigationBar";
import Header from "../Header";
import SocialMedia from "./SocialMedia";

class Contact extends React.Component{

    render(){
        return(
            <div>
                <Header /> 
                <NavigationBar />
                <SocialMedia />
     
            </div>
        )

    }
}
export default Contact;