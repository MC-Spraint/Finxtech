import React, { Component } from 'react'

//import components here
import Carousel from '../components/Carousel/Carousel.js';
import TextForm from "../components/TextForm/TextForm.js";
import Footer from "../components/Footer/Footer.js";

export default class AboutPage extends Component {
    render() {
        return (
            <div id="AboutPage">
                <Carousel/>
                <TextForm mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}
