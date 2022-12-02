import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import NavigationBar from "./NavigationBar";

class Home extends React.Component{

    render(){
        return(
           <div>
            <h1><Header /></h1>
            <div><NavigationBar /></div>
            <h2><AboutMe /></h2>
            </div> 
        )

    }
}
export default Home;