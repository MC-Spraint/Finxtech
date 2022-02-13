import React, { Component } from 'react'

//import components here
import EcomDevelopment from "../../components/TheServices/EcomDevelopment/EcomDevelopment.js";
import Footer from "../../components/Footer/Footer.js";

export default class EcomDevPage extends Component {
    render() {
        return (
            <div id="EcomDevPage">
                <EcomDevelopment mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}