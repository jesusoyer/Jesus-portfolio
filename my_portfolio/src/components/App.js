import React from "react";
import Home from "./Home";
import Projects from './ProjectsComponents/Projects';
import Contact from "./ContactComponents/Contact";
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