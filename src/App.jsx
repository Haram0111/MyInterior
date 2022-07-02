import React, {Suspense} from "react";
import { useNavigate, Router, Routes, Route } from 'react-router-dom';
import {Card, Button, Container, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Interior from './Page/Interior';
import nav from './img/logo.PNG'
import Chating from "./Page/Chatting";
import Login from "./Page/Login";
import './CSS/App.css';

function App(){
  let Navigate = useNavigate();
  return(
    <div>
      <h2>main</h2>
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
          <Nav.Item>
            <Nav.Link onClick={()=>{Navigate('/chating')}} style={ {color: "black"} }>CHATING</Nav.Link>
          </Nav.Item>
        </Nav>
    </div>
    
  )
}

export default App;