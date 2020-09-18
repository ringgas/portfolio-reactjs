import React,{Component} from 'react';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Awards from './pages/Awards';


import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
                <Sidebar />
                <Home />
                <About />
                <Experience />
                <Skills/>
                <Awards />
                <Interests />
                
            </Router>
        )
    }
}

export default App;
