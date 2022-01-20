import React, { Component } from 'react'

//import components here
import About from '../components/About/About.js';
import Carousel from '../components/Carousel/Carousel.js';
import Footer from "../components/Footer/Footer.js";

export default class AboutPage extends Component {
    
    render() {console.log(this.props.mode.mode);
        return (
            <div id="AboutPage">
                
                <Carousel/>
                <About mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
                
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}
