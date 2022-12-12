import React from "react";
import Header from "./HeaderComponents/Header";
import AboutMe from "./HomePageComponents/AboutMe";
import NavigationBar from "./NavigationComponents/NavigationBar"

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