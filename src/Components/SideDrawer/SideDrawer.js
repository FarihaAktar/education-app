import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["side-drawer"];

    if (show) {
        sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <h1 className='cross' onClick={click}><FontAwesomeIcon className='times' icon={faTimes} /></h1>
            <div className='middle'>
                <ul className='side-drawer-links' onClick={click}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='courses'>Courses</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default SideDrawer;