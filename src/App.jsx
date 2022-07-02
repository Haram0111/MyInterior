import React, {Suspense} from "react";
import { useNavigate, Router, Routes, Route, Link } from 'react-router-dom';
import {Card, Button, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nav from './img/logo.PNG'
import './CSS/App.css';
import './CSS/Board.css'

function App(){
  let Navigate = useNavigate();
  return(
    <div>
      <br></br><img src={nav} alt='로고' className='logo' onClick={()=>{Navigate('/') }}></img>
        <Nav justify variant="tabs" defaultActiveKey="/" >
          <Nav.Item>
            <Nav.Link onClick={()=>{Navigate('/')}} style={ {color: "black"} }>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{Navigate('/Interior')}} style={ {color: "black"} }>INTERIOR</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link onClick={()=>{Navigate('/login')}} style={ {color: "black"} }>LOGIN</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link onClick={()=>{Navigate('/Board')}} style={ {color: "black"} }>Board</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{Navigate('/chating')}} style={ {color: "black"} }>CHATING</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className = "container_home">
            <div className = "carouselContainer"/>
            <div className = "experts">
                <Link to = "/Board">
                    <img className = "expertsImg" src = {process.env.PUBLIC_URL + '/img/test_1.jpg'} alt = ""/>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default App;