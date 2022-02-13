import "./Navbar.css";
import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    
    render() {
        //let {title,home,about,services,contact,more}=this.props;
        return (
            <div id="Navbar">
    <nav className={`navbar navmobile fixed-top navbar-expand-lg navbar-${this.props.mode.mode} bg-${this.props.mode.mode}`}
        style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>
        <Link to="/" lassName="navbar-brand">
        <img id="logo" src="/favicon1.png" alt="" />
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link my-2" href="/">
                {this.props.home} <span className="sr-only">(current)</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link my-2" href="/">
                {this.props.about} <span className="sr-only"></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/projects" className="nav-link my-2" href="/">
                {this.props.projects} <span className="sr-only"></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/testimonials" className="nav-link my-2" href="/">
                {this.props.testimonials} <span className="sr-only"></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link my-2" href="/">
                {this.props.contact} <span className="sr-only"></span>
            </Link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link my-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>
                <li><Link to="/services" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>All Services</Link></li>
                <li><Link to="/services/webDesign" class="dropdown-item"style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>UX/UI and web designing</Link></li>
                <li><Link to="/services/webDevelopment" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>Modern web development</Link></li>
                <li><Link to="/services/android" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>Android apps development</Link></li>
                <li><Link to="/services/api" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>RESTful APIs development</Link></li>
                <li><Link to="/services/ecom" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>E-commerce application</Link></li>
                <li><Link to="/services/graphicDesign" class="dropdown-item" style={{background:this.props.mode.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode.mode==="dark"?"white":"black"}}>Graphic Design</Link></li>
            </ul>
        </li>
        </ul>
            
            <div className={`custom-control custom-switch my-2 my-lg-0 text-${this.props.mode.mode==="light" ? "dark":"light"}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={this.props.toggleMode}></input>
            <label className="custom-control-label" htmlFor="customSwitch1">Change Theme</label>
            </div>
        
        </div>
    </nav>
    </div>
        )
    }
}
