import React, { Component } from 'react'

//import components here
import Carousel from '../components/Carousel/Carousel.js';
import Footer from "../components/Footer/Footer.js";
import Testimonials from "../components/Testimonials/Testimonials.js";

export default class TestimonialsPage extends Component {
    render() {
        return (
            <div id="TestimonialsPage">
                <Carousel/>
                <Testimonials mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}
