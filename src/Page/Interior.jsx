import React, {useState,useEffect, Component} from "react";
import {Card, Button, Container, Nav, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import nav from '../img/logo.PNG'
import as2 from '../img/as2.gif';
import as3 from '../img/as3.jpg';
import '../CSS/App.css';

function Interior(){
  let Navigate  = useNavigate ();
  let [Intype, setIntype] = useState("All");
  let [cardInfo, setCardInfo] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/interiors")
      .then((result) => {
        setCardInfo(result.data.result);
      })
      .catch((err) => {console.log(err)});
  }, []);

  // const renderCard = (card) => {
  //   return(
  //     <Card style={{ width: '18rem' }} className="box">
  //       <Card.Img variant="top" src={card.image} />
  //       <Card.Body>
  //       <Card.Title>{card.title}</Card.Title>
  //       <Card.Text>
  //           {card.text}
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   )
  // }
  
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
        <Form.Select onChange={(e) => setIntype(e.target.value)}>
          <option value="All">전체</option>
          <option value="charge">유료</option>
          <option value="free">무료</option>
        </Form.Select>        
        <div className="grid">
          {
            cardInfo&&cardInfo.map((i,a)=>{
              if(Intype === "All"){
                return(
                  <Card style={{ width: '18rem' }} className="box">
                    <Card.Img variant="top" src={i.image_url} />
                    <Card.Body>
                    <Card.Title>{i.description}</Card.Title>
                    <Card.Text>
                        {i.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              }
              else{
                if(Intype === i.type){
                  return(
                    <Card style={{ width: '18rem' }} className="box">
                      <Card.Img variant="top" src={i.image} />
                      <Card.Body>
                      <Card.Title>{i.title}</Card.Title>
                      <Card.Text>
                          {i.text}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  )
                }
              }
            })
          }
        </div>
      </Container>
    </div>
    
  )
}

export default Interior;