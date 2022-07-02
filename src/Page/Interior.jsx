import React, {useState,useEffect} from "react";
import {Card, Button, Container, Nav, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import nav from '../img/logo.PNG'
import as2 from '../img/as2.gif';
import as3 from '../img/as3.jpg';
import '../CSS/App.css';

function Interior(){
  let Navigate  = useNavigate ();
  let [val, setVal] = useState("All");
  console.log(val);

  const cardInfo = [
    { image: as3, title: "James Bornd", text: "Yeah", type: "free"},
    { image: as2, title: "dfas", text: "asdf", type: "charge"},
    { image: as3, title: "asdf", text: "asdf", type: "charge"},
    { image: as2, title: "asdf", text: "asdf", type: "free" },
    { image: as2, title: "asdf", text: "asdf", type: "free" },
    { image: as2, title: "asdf", text: "asdf", type: "free" },
  ];

  let cardList = [];

  const renderCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} check={card.type} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
            {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }

  const renderChargeCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} check={card.type} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
            {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }

  const renderFreeCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} check={card.type} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
            {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
  
  return(
    <div>
      <Container fluid="xxl">
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
        <Form.Select value={val} onChange={(e) => setVal(e.target.value)}>
          <option value="All">전체</option>
          <option value="Charge">유료</option>
          <option value="Free">무료</option>
        </Form.Select>        
        {val === "All"? <div className="grid">
          {cardInfo.map(renderCard)}
        </div> : null}
        {val === "Charge"? <div className="grid">
          {cardInfo.map(renderChargeCard)}
        </div> : null}
        {val === "Free"? <div className="grid">
          {cardInfo.map(renderFreeCard)}
        </div> : null}
      </Container>
    </div>
    
  )
}

export default Interior;