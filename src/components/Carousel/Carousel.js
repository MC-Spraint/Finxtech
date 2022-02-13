import "./Carousel.css";
import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="Carousel">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">

                <div className="carousel-item active" data-interval="1000">
        <img id="CarouselPic" src="/images/carousal/c1.png" className="d-block w-100" alt="c1.png"></img>
                </div>
                <div className="carousel-item" data-interval="1000">
        <img id="CarouselPic" src="/images/carousal/c2.png" className="d-block w-100" alt="c2.png"></img>
                </div>
                <div className="carousel-item" data-interval="1000">
        <img id="CarouselPic" src="/images/carousal/c3.png" className="d-block w-100" alt="c3.png"></img>
                </div>

                    </div>
                </div>
            </div>
        )
    }
}
