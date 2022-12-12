import React from "react";



import Home from "./Home";
import Projects from './ProjectsComponents/Projects';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class App extends React.Component{

render(){

return(
<Router>   
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />}/>
  
    </Routes>
    </Router> 
) 
}
}

export default App;