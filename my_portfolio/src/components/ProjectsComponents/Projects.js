import React from "react";
import NavigationBar from "../NavigationBar";
import ProjectGrid from "./ProjectGrid";
import Header from "../Header";


class Projects extends React.Component{


    render(){
        return(
            <div>
            <Header />    
            <NavigationBar />
            <ProjectGrid />



            </div>
        )
    }
};

export default Projects;