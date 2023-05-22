import React, { useContext } from 'react';
import img from '../img/img.jpg';
import { Button } from 'react-bootstrap';
import { FaUser, FaLink } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import { ImCross, ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function Sidebar() {
    
    const { showSidebar, setShowSidebar } = useContext(PostContext);
    
    return (
        <div className={`sidebar py-5 px-3 text-white text-center ${showSidebar ? 'show' : 'hide'}`}>
            <Button variant="outline-light" onClick={() => setShowSidebar(false)}> <ImCross className='flex-end'/> </Button>
            
            <div className="sidebar-header">
                <img src={img} alt="Ismoiljon Mirabdullaev" />
                <h4> <FaUser /> Ismoiljon Mirabdullayev</h4>
                <a href="mailto:ismoiljo.20.02@gmail.com"> <MdEmail /> ismoiljo.20.02@gmail.com</a>
                <br />
                <a href="https://www.linkedin.com/in/ismoiljon-mirabdullaev-71a41b21b">
                    <ImLinkedin /> LinkedIn
                </a>
                <br />
                <a href="https://t.me/Ismoil_Mirabdullaev"> <SiMinutemailer /> Telegram </a>
                <br />
                <a href="https://ismoilportfolio.netlify.app"> <FaLink /> Portfolio website </a></div>

            <div className="path-links pt-5">
                <Link className='nav-link' to="/">Posts</Link>
                <Link className='nav-link' to="/about">About Me</Link>
            </div>                             
        </div>
    );
}

export default Sidebar;