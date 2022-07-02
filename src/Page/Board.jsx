import { React, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../service/ContextProvider';
import '../CSS/Board.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Board(){
    const navigate = useNavigate();
    const [ data, setData ] = useState([]);
    const [ major, setMajor ] = useState("all");
    const {loggedUser, loggedIn} = useContext(Context);

    const handleCombo = (e) => {
        setMajor(e.target.value)
    }

    useEffect(() => {
        if(loggedIn){
            if(loggedUser.type === "default"){
                axios.get("http://localhost:8080/expert-user/join").then((data) => {
                    console.log(data.data);
                    setData(data.data);
                });
            }else{
                navigate('/Chat');
            }
        }else{
            alert("로그인 후 이용해주세요");
            navigate('/Login');
        }
    }, [loggedIn, loggedUser.type, navigate]);

    return(
        <>
        <img className = "bg_board" src = "img/bg.jpg" alt = ""/>
        <div className = "container_board">
            <h1>List</h1>
            <select className = "loginType_board" onChange = {handleCombo}>
                <option key = "all" value = "all">all</option>
                <option key = "front" value = "front">front</option>
                <option key = "back" value = "back">back</option>
            </select>
            { data && <SetList item = {data} major = {major}/>}
        </div>
        </>
    );
}

function SetList({ item, major }){
    return(
        <>
        { item.map((i) => {
            if(major === "all"){
                return(
                    <>
                    <Link to ="/Chat">
                    <div className = "list_board">
                        <p>{i.name} ( {i.id} )</p>
                        <p>major : {i.major}</p>
                    </div>
                    </Link>
                    </>
                );
            }else{
                if(major === i.major){
                    return(
                        <Link to ="/Chat">
                        <div className = "list_board">
                            <p>{i.name} ( {i.id} )</p>
                            <p>major : {i.major}</p>
                        </div>
                        </Link>
                    );
                }else {return null;}
            }
        }) }
        </>
    );
}