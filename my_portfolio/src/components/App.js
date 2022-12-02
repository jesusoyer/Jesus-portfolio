import React from "react";
import Home from "./Home";
import Projects from './Projects';
import Contact from "./Contact";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class App extends React.Component{

render(){

return(
<Router>   
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
    </Router> 
) 
}
}

export default App;