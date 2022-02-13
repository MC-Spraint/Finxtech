import "./TextForm.css";
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';

export default class TextForm extends Component {

    state={
        text:"Enter your comment",
        toggle:"off"
    }
    constructor(props) {
        super(props);

        this.submit=this.submit.bind(this);
        this.changeText=this.changeText.bind(this)
        
    }

    submit(){
        if(this.state.toggle==="off"){
            this.setState({toggle : "on"});
            this.setState({text : this.state.text.toUpperCase()});
        }
        else{
            this.setState({toggle : "off"});
            this.setState({text : this.state.text.toLowerCase()});
        }
    }

    changeText(event){
        console.log("Typing");
        this.setState({text : event.target.value});//important line for keep writing
        if(this.state.text.split(" ").length >500){
            this.setState({text : "Words more than 500 will not be allowed"})
        }
    }
    
    render() {
        return (
            <div className="template" id="TextForm" style={{color:this.props.mode==="light"? "black":"black"}}>
            <div className="container mt-5 mx-auto">
            <h2 className="text-center my-font" style={{color:this.props.mode==="dark"? "white":"black"}}>Contact Us</h2><hr style={{color:this.props.mode==="dark"? "white":"black"}}/>
            <div className="row pt-5 pb-5 mb-5">
                
            <div className="card w-50 col-12"  style={{color:this.props.mode==="dark"? "white":"black",background:this.props.mode==="dark"? "rgb(14, 21, 119)":"white"}}>
                
<div className="card-body">
    <h5 className="card-title">Leave A Comment</h5>
    <form>
<div className="form-group">
    <label htmlFor="name">Full Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your name"></input>
</div>
<div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email address"></input>
</div>
<div className="form-group">
    <label htmlFor="comment">Your Comment</label>
    (<span className="text-warning"> {this.state.text.split(" ").length} words and {this.state.text.length} character you have written, 500 words at max </span>)
    <span>
        <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch"  onClick={this.submit}></input>
        <label className="custom-control-label" htmlFor="customSwitch">Switch between upper & lowercase</label>
        </div>
    </span>
    <textarea className="form-control" id="comment" rows="8" value={this.state.text} onChange={this.changeText}></textarea>
</div>

<button type="button" className="btn btn-primary" onClick={()=>toast.error("Error: Not available", {position:toast.POSITION.BOTTOM_CENTER})}>Submit</button>
<p style={{color:"red"}}>*Form not connected to api</p>
</form>
</div>
</div>
</div>
</div>



        </div>
        )
    }
}
