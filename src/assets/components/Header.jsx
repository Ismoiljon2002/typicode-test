import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi'
import './styles/componentStyles.css';
import { PostContext } from '../context/PostContext';

function Header () {
    
    const { setShowSidebar } = useContext(PostContext);
    
    return ( 
        <header className='py-3 fixed-top'>
            <Container>
                <Button onClick={() => setShowSidebar(true)}>
                    <GiHamburgerMenu />
                </Button>
            </Container>
        </header>
     );
}

export default Header ;