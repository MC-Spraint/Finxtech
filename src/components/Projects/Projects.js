import React, { Component } from 'react'
import "./Projects.css";

export default class Projects extends Component {
    render() {
        return (
          <div id="Projects" className="template">
          <div className="container">
          <div className="container mb-4 py-4"><h2 className="text-center my-font" style={{color:this.props.mode==="dark"? "white":"black"}}>Some Of Our Works</h2><hr style={{color:this.props.mode==="dark"? "white":"black"}}/></div>
<div className="row pb-5">
<div className="col-sm-6 col-md-6 col-lg-6 pt-4 mx-auto hover" data-aos="flip-up">
  <a href="https://spraintswebtech.herokuapp.com">
  <img src="/images/projects/portfolio.png" alt="Portfolio" className="img-fluid"/>
  </a> 
  <b style={{color:this.props.mode==="dark"? "white":"black"}}>Developer's Portfolio(MEAN Stack)</b>
  
</div>

<div className="col-sm-6 col-md-6 col-lg-6 pt-4 hover mx-auto" data-aos="flip-down">
  <a href="/images/projects/finxtech.png">
  <img src="/images/projects/finxtech.png" alt="finxtech_img" className="img-fluid"/>
  </a>
  <b style={{color:this.props.mode==="dark"? "white":"black"}}>Double-themed IT site(MERN+Springboot)</b>
  
</div>

<div className="col-sm-6 col-md-6 col-lg-6 pt-4 mx-auto hover" data-aos="flip-down">
  <a href="/images/projects/restaurant.png"><img src="/images/projects//restaurant.png" alt="Restaurant" className="img-fluid"/></a>
  <b style={{color:this.props.mode==="dark"? "white":"black"}}>Restaurant(Only CSS,HTML,JS with PHP+MySQL)</b>
  
</div>

<div className="col-sm-6 col-md-6 col-lg-6 pt-4 mx-auto hover" data-aos="flip-down">
  <a href="/images/projects/ecom.png">
  <img src="/images/projects/ecom.png" alt="E-Commerce" className="img-fluid"/>
  </a>
  <b style={{color:this.props.mode==="dark"? "white":"black"}}>E-Commerce Application(MEAN Stack)</b>
  
</div> 

<div className="col-sm-6 col-md-6 col-lg-6 pt-4 mx-auto hover" data-aos="flip-down">
  <a href="/images/projects/chatapp.png">
  <img src="/images/projects/chatapp.png" alt="Chat-App" className="img-fluid"/>
  </a>
  <b style={{color:this.props.mode==="dark"? "white":"black"}}>Chat-App(ExpressJs+Socket.io)</b>
  
</div>



</div>
</div>
          
      </div>
        )
    }
}
