import React from 'react';
// import styled from 'styled-components';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
        <div className = "container_home">
            <div className = "carouselContainer"/>
            <div className = "experts">
                <Link to = "/Board">
                    <img className = "expertsImg" src = {process.env.PUBLIC_URL + '/img/test_1.jpg'} alt = ""/>
                </Link>
            </div>
        </div>
        </>
    );
}