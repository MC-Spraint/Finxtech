import React, { Component } from 'react'

//import components here
import GraphicDesign from "../../components/TheServices/GraphicDesign/GraphicDesign.js";
import Footer from "../../components/Footer/Footer.js";

export default class GraphicDesignPage extends Component {
    render() {
        return (
            <div id="GraphicDesignPage">
                <GraphicDesign mode={this.props.mode.mode}/>
                <Footer mode={this.props.mode.mode}/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}