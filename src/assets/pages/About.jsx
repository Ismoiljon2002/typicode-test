import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import './styles/pages.css';

function About () {
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])
    return ( 
        <div className="about page">
                {
                    isLoading ? <Loader /> :
                    <iframe src='https://ismoilportfolio.netlify.app'></iframe>
                }
        </div>
     );
}

export default About ;