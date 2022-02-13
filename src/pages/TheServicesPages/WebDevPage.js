import React, { Component } from 'react'

//import components here
import WebDevelopment from "../../components/TheServices/WebDevelopment/WebDevelopment.js";
import Footer from "../../components/Footer/Footer.js";

export default class WebDevPage extends Component {
    render() {
        return (
            <div id="WebDevPage">
                <WebDevelopment mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}