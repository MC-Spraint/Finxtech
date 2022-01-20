import React, { Component } from 'react'

//import components here
import Carousel from '../components/Carousel/Carousel.js';
import Footer from "../components/Footer/Footer.js";
import Special from "../components/Special/Special.js"

export default class ServicesPage extends Component {
    render() {
        return (
            <div id="ServicesPage">
                <Carousel/>
                <Special mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}