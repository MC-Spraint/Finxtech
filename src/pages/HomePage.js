import React, { Component } from 'react'

//import components here
import Landing from '../components/Landing/Landing.js';
import Special from '../components/Special/Special.js';
import About from '../components/About/About.js';
import Projects from "../components/Projects/Projects.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import TextForm from '../components/TextForm/TextForm.js';
import Footer from "../components/Footer/Footer.js"

export default class HomePage extends Component {

    render() {
        return (
            <div id="HomePage">
                <Landing/>
                <About mode={this.props.mode.mode}/>
                <Special mode={this.props.mode.mode}/>
                <Projects mode={this.props.mode.mode}/>
                <Testimonials mode={this.props.mode.mode}/>
                <TextForm mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

