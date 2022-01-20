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
        <a className="navbar-brand" href="/">
        <img src="/favicon1.png" alt="" />
        </a>
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
            <Link to="/services" className="nav-link my-2" href="/">
                {this.props.services} <span className="sr-only"></span>
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
            <li className="nav-item">
            <Link to="/projects" className="nav-link my-2" href="/">
                {this.props.projects} <span className="sr-only"></span>
            </Link>
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
