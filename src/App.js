import './App.css';
//import pages here
import AboutPage from './pages/AboutPage.js'
import HomePage from './pages/HomePage.js';
import ServicesPage from './pages/ServicesPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import TestimonialsPage from './pages/TestimonialsPage.js';
import ContactPage from './pages/ContactPage.js';

//import components here
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
//import this to handle routing
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { Component,useState } from 'react';

//Aos library
import Aos from "aos";
import "aos/dist/aos.css";

//icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas,fab,far);




export default class App extends Component {

  state={mode:"light"};//Reserved keyword
  
  constructor(props){
    super(props);
    //this.setState({mode:"liiiiiiiiiiight"});  use of constructor and setState, use of constructor is to initialize the state value and use of setState is to update the state value, so using setState inside `constructor doesn't makes any sense.
    this.toggleMode=this.toggleMode.bind(this);
    
}

toggleMode(){
if(this.state.mode==="light"){
    this.setState({mode:"dark"});
    document.body.style.backgroundColor="rgb(3, 8, 70)";
    
}else{
    this.setState({mode:"light"});
    document.body.style.backgroundColor="white";

    }
}
  
  render() {
    return(
    <div>
      <BrowserRouter>
      <Navbar mode={this.state} toggleMode={this.toggleMode} title="Finxtech" home="Home" about="About" services="Services" contact="Contact" testimonials="Testimonials" projects="Projects" />
      
      <Routes>
        <Route path="/" element={<HomePage mode={this.state}/>}></Route>
        <Route path="/about" element={<AboutPage mode={this.state}/>}></Route>
        <Route path="/services" element={<ServicesPage mode={this.state}/>}></Route>
        <Route path="/testimonials" element={<TestimonialsPage mode={this.state}/>}></Route>
        <Route path="/contact" element={<ContactPage mode={this.state}/>}></Route>
        <Route path="/projects" element={<ProjectsPage mode={this.state}/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
    )
  }
  componentDidMount() {
    Aos.init({duration: 1500});
  }
  
}
function Xmpl(){
  return(
    <h1>Hello I'm from xmpl</h1>
    
  )
}
function Xmpl2(){
  return(
    <h1>Hello I'm from xmpl2</h1>
  )
}




