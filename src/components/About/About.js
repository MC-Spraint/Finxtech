import "./About.css";
import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div id="About" style={{color:this.props.mode==="dark"? "black":"black"}}>
            <div className="container mt-5 mx-auto">
                <h2 className="text-center my-font" style={{color:this.props.mode==="dark"? "white":"black"}}>About Us</h2><hr style={{color:this.props.mode==="dark"? "white":"black"}}/>
            <div className="accordion pt-5 pb-5" id="accordionPanelsStayOpenExample" data-aos="fade-up" data-aos-anchor-placement="top-center">
  <div className="accordion-item"  style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="btn btn-primary accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        WHO WE ARE
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="btn btn-primary accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        WHY TO CHOOSE US
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item mb-2"  style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="btn btn-primary accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        WHAT WE DO EXACTLY
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
        </div>
        )
    }
}
