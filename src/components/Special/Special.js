import "./Special.css";
import React, { Component } from "react";

export default class Special extends Component {
  render() {
    return (
      <div className="template" id="special"  style={{color:this.props.mode==="dark"? "white":"black"}}>
        <div className="container mt-5 mx-auto">
        
          <div className="text-center p-5">
            <b>
              <i>
                -"Technology is the fuel and creativity is just a little spark,
                and when they come close, that is what we do"
              </i>
            </b>
          </div>

          <h2 className="text-center my-font">Our Expertise</h2>
          <hr />
          
        <div class="clearfix pt-5 pb-3">
          <img src="/gifs/transparency.gif" data-aos="zoom-in" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>
          <h5 className="h-sz-prm">Welcome to finxtech!</h5>
        <p>
          We believe in transparency when you reach out to us for the betterment of your business.
          We want to walk you through a process where you find things simple and comprehensive.
          So here below we listed down all the varieties of services we provide, where you will find
          the best suited solutions for your business to grow bigger.
          From full-stack software developments to even digital marketing, everything we are providin at a very reasonable
          and affordable price range.
          Specially technologies like <strong>MEAN and MEARN and LAMP Stack, Spring Boot(JAVA framework), IONIC</strong> etc, which are very popular in every industry
          for their cost effectiveness and highly optimised performances are what we work with very efficiently.
          We wish you good luck.
        </p>
      </div>

      </div>

      <div className="forAos">
        <div className="container mt-5 mx-auto">
          <h2 className="text-center my-font">The Top-notch Services</h2>
          <hr />
          <div className="container px-4">
            <div className="row g-4 pt-5 pb-5"  style={{color:this.props.mode==="dark"? "black":"black"}}>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="zoom-out-right" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/ios-filled/60/50bfe6/web-design.png" alt="icon1.png"/>
                  <h5 className="card-title">UX/UI and web designing</h5> <hr />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet omeasur nito consectetur adipisicing elit. Expedita officia ipsum cumque dolor corporis porro sit iusto. Nemo molestias eum ratione facilis molestiae amet cum?
                  </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="fade-up" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/60/50bfe6/external-coding-education-prettycons-lineal-prettycons.png" alt="icon2.png"/>
                  <h5 className="card-title">Modern web development</h5> <hr />
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quo voluptates soluta doloremque, perspiciatis quae, quos repellendus, amet facilis sit porro unde voluptate pariatur ea?
                  </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="zoom-out-left" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/ios/60/50bfe6/android-studio--v3.png"  alt="icon3.png"/>
                  <h5 className="card-title">Android apps development</h5> <hr />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati facere accusantium repellendus in aliquam minima exercitationem eveniet, voluptatibus maxime nemo, non!
                  </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="zoom-out-right" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/ios/60/50bfe6/api-settings.png"  alt="icon4.png"/>
                  <h5 className="card-title">RESTful APIs development</h5> <hr />
                <p className="card-text">
                      
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit deserunt recusandae voluptatem quia laudantium magnam facere nihil quis modi repellendus, quo eveniet?
                </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="fade-up" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/ios/60/50bfe6/checkout.png"  alt="icon5.png"/>
                  <h5 className="card-title">E-Com apps development</h5> <hr />
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur cum officiis atque perspiciatis aliquid enim molestias iure, quia reiciendis consequatur odio nesciunt, saepe corrupti.
                  </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>

              <div className="col-xs-6 col-xsm-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card crd" data-aos="zoom-out-left" style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                <div className="card-body p-3">
                <img src="https://img.icons8.com/ios/60/50bfe6/windows10-personalization.png"  alt="icon6.png"/>
                  <h5 className="card-title">Attractive graphic designing</h5> <hr />
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio a itaque cumque sint provident enim id iste sequi non? Rerum, ab hic. Voluptas, incidunt vel. Lorem ipsum dolor sit amet.
                  </p>
                  <a href="#" className="card-link">
                    Read more...
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
