import React, { Component } from 'react'

//import components here
import Carousel from '../components/Carousel/Carousel.js';
import Footer from "../components/Footer/Footer.js";
import Projects from "../components/Projects/Projects.js";

export default class ProjectsPage extends Component {
    render() {
        return (
            <div id="ServicesPage">
                <Carousel/>
                <Projects mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}
