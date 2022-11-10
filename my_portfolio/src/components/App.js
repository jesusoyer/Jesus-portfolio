import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import AboutMe from "./AboutMe";

class App extends React.Component{

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

export default App;