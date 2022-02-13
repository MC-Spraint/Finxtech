import React, { Component } from 'react'

//import components here
import AndroidDevelopment from "../../components/TheServices/AndroidDevelopment/AndroidDevelopment.js";
import Footer from "../../components/Footer/Footer.js";

export default class AndroidDevPage extends Component {
    render() {
        return (
            <div id="AndroidDevPage">
                <AndroidDevelopment mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}