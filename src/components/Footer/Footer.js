import "./Footer.css";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
    render() {console.log(this.props)
        return (
            <div id="Footer" className="container-fluid mb-0 my0" style={{background:this.props.mode==="dark" ? "linear-gradient(-90deg,blue,black)" : "linear-gradient(-90deg,white,rgb(165, 177, 187))", color:this.props.mode==="dark"?"white":"black"}}
                                                                    >
                <div className="row px-5 py-5">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xsm-12">
                        <h4>Important links</h4><hr/>
                        <ul>
                            <li><Link to="/" classList="nv" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'home']} /><span>Home</span></Link></li>
                            <li><Link to="/about" classList="nv" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'address-card']} /><span>About</span></Link></li>
                            <li><Link to="/services" classList="nv" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fab', 'servicestack']} /><span>Services</span></Link></li>
                            <li><Link to="/contact" classList="nv" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'handshake']} /><span>Contact</span></Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xsm-12">
                    <h4>Follow us on</h4><hr/>
                        <ul>
                            <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fab', 'facebook']} /><span>Facebook</span></a></li>
                            <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fab', 'twitter']} /><span>Twitter</span></a></li>
                            <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fab', 'instagram']} /><span>Instagram</span></a></li>
                            <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fab', 'youtube']} /><span>Youtube</span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xsm-12">
                        <h4>Our Contact</h4><hr/>
                        <ul>
                            <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'envelope-open']} /><span>your@gmailcom</span></a></li>
                            <li><a href="https://spraintswebtech.herokuapp.com" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'globe']} /><span>yourwebsite.com</span></a></li>
                            <li><a><FontAwesomeIcon icon={['fab', 'whatsapp']} /><span>+917602746149</span></a></li>
                            <li><a><FontAwesomeIcon icon={['fas', 'phone']} /><span>+917811847476</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-2">
                    <p>Developed by Snahashis Das A.K.A Mc Spraint</p>
                    <li><a href="https://spraintswebtech.herokuapp.com" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'globe']} /><span>https://spraintswebtech.herokuapp.com</span></a></li>
                    <li><a href="#" style={{color:this.props.mode==="dark"? "white":"black"}}><FontAwesomeIcon icon={['fas', 'envelope-open']} /><span>mcspraint954@gmail.com</span></a></li>
                    <li><a><FontAwesomeIcon icon={['fab', 'whatsapp']} /><span>+917602746149</span></a></li>
                    <b> © copyright 2022 | All rights reserved</b>
</div>
            </div>
        )
    }
}
