import React, { Component } from 'react'
import "./Testimonials.css";

export default class Testimonials extends Component {
    
    render() {
        
        return (
            <div id="Testimonials" className="template">
                <div className="container mb-4 py-4"><h2 className="text-center my-font" style={{color:this.props.mode==="dark"? "white":"black"}}>Our Happy Clients</h2><hr style={{color:this.props.mode==="dark"? "white":"black"}}/></div>
            <div className="testimonials">
        <section className="view" id="view" data-aos="fade-down">
            <section>
                <img src="images/testimonials/a.png" alt=""/>
                <h2>Alex Wayne</h2>
                <q>Hello world from testimonials. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a esse iure perferendis nam dolore. Amet, tempora voluptas quibusdam nam nihil porro nostrum illo cum, earum vitae reprehenderit dolor officia.</q>
            </section>
            <section>
                <img src="images/testimonials/b.png" alt=""/>
                <h2>Mc Spraint</h2>
                <q>Hello world from testimonials. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a esse iure perferendis nam dolore. Amet, tempora voluptas quibusdam nam nihil porro nostrum illo cum, earum vitae reprehenderit dolor officia.</q>
            </section>
            <section>
                <img src="images/testimonials/c.png" alt=""/>
                <h2>Olie Daniela</h2>
                <q>Hello world from testimonials. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a esse iure perferendis nam dolore. Amet, tempora voluptas quibusdam nam nihil porro nostrum illo cum, earum vitae reprehenderit dolor officia.</q>
            </section>
        </section>
        <section className="controlls">
                <span id="controll1"></span>
                <span id="controll2" className="active"></span>
                <span id="controll3"></span>
            </section>
    </div>
    
    </div>
        )
    }
    
    componentDidMount() {
    console.log("Testimonials mounted");
    var view   =    document.getElementById("view");
var controll1 = document.getElementById("controll1");
var controll2 = document.getElementById("controll2");
var controll3 = document.getElementById("controll3");

var handlControll1 = () =>{
    view.style.transform = "translateX(33.37%)";
    controll1.classList.add("active");
    controll2.classList.remove("active");
    controll3.classList.remove("active");
}
var handlControll2 = () =>{
    view.style.transform = "translateX(0%)";
    controll1.classList.remove("active");
    controll2.classList.add("active");
    controll3.classList.remove("active");
}
var handlControll3 = () =>{
    view.style.transform = "translateX(-33.37%)";
    controll1.classList.remove("active");
    controll2.classList.remove("active");
    controll3.classList.add("active");
}

controll1.addEventListener("click",()=>{return handlControll1()});
controll2.addEventListener("click",()=>{return handlControll2()});
controll3.addEventListener("click",()=>{return handlControll3()});
    }
    
}
