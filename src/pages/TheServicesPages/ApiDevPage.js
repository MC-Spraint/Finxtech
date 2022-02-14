import React, { Component } from 'react'

//import components here
import ApiDevelopment from "../../components/TheServices/ApiDevelopment/ApiDevelopment.js";
import Footer from "../../components/Footer/Footer.js";

export default class ApiDevPage extends Component {
    render() {
        return (
            <div id="ApiDevPage">
                <ApiDevelopment mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}