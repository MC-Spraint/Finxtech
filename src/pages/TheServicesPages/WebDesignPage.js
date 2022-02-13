import React, { Component } from 'react'

//import components here
import WebDesign from "../../components/TheServices/WebDesign/WebDesign.js";
import Footer from "../../components/Footer/Footer.js";

export default class WebDesignPage extends Component {
    render() {
        return (
            <div id="WebDesignPage">
                <WebDesign mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}