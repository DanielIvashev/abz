import React from 'react'
import '../styles.scss'
import logo from '../../../img/logo.svg'
import DrawerToggleButton from "../drawerToggleButton/drawerToggleButton";
import { Link } from "react-scroll";

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbarNavigation'>
                <img src={logo} alt="logo"/>
            <div className='toolbarNavigationItems'>
                <ul>
                    <li>
                        <Link to='section2'
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        >About me
                        </Link>
                    </li>
                    <li>
                        <Link
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              offset={70}
                              duration={500}
                        >Relationship
                        </Link>
                    </li>
                    <li>
                        <Link to='section1'
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={500}
                        >Requirements
                        </Link>
                    </li>
                    <li>
                        <Link to='section3'
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                        >Users
                        </Link>
                    </li>
                    <li>
                        <Link to='section4'
                              activeClass="active"
                              spy={true}
                              smooth={true}
                              offset={100}
                              duration={500}
                        >Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='toolbarToggleButton'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default toolbar