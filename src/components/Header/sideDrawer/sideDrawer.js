import React from "react";
import '../styles.scss'
import { Link } from 'react-router-dom'
import logo from "../../../img/logo.svg";

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open'
    }
    return (
        <nav className={drawerClasses}>
            <div className='logoContainer'>
                <img src={logo} alt="logo"/>
            </div>
            <hr style={{margin: '0', marginLeft: '40px'}}/>
            <ul>
                <li>
                    <a to='/aboutMe'>About me</a>
                </li>
                <li>
                    <a to='/relationship'>Relationship</a>
                </li>
                <li>
                    <a to='/requirements'>Requirements</a>
                </li>
                <li>
                    <a to='/users'>Users</a>
                </li>
                <li>
                    <a to='/signUp'>Sign Up</a>
                </li>
                <li>
                    <a to='/termsAndConditions'>Terms and Conditions</a>
                </li>

                <hr/>
                <br/>

                <li>
                    <a to='/howItWorks'>How it works</a>
                </li>
                <li>
                    <a to='/partnership'>Partnership</a>
                </li>
                <li>
                    <a to='/help'>Help</a>
                </li>
                <li>
                    <a to='/leaveTestimonial'>Leave Testimonial</a>
                </li>
                <li>
                    <a to='/contactUs'>Contact us</a>
                </li>


                <hr/>
                <br/>


                <li>
                    <a to='/articles'>Articles</a>
                </li>
                <li>
                    <a to='/OurNews'>Our news</a>
                </li>
                <li>
                    <a to='/testimonials'>Testimonials</a>
                </li>
                <li>
                    <a to='/licenses'>Licenses</a>
                </li>
                <li>
                    <a to='/privacyPolicy'>Privacy Policy</a>
                </li>

            </ul>
        </nav>
    )
};

export default sideDrawer
