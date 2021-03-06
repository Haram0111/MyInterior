import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, Router, Routes, Route } from 'react-router-dom';
import './CSS/index.css';
import App from './App';
import Interior from './Page/Interior';
import Login from './Page/Login';
import Chating from './Page/Chatting';
import Register from './Page/Register';
import Board from './Page/Board';
import NotFound from './Page/NotFound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/interior" element={ <Interior /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/chating" element={ <Chating /> }/>
        <Route path = "/Board" element = {<Board/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path = "*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
