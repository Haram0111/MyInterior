/* eslint-disable no-lone-blocks */
import { React, useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from '../service/ContextProvider';
import '../CSS/User.css';
import axios from 'axios';

export default function Login(){
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userType, setUserType] = useState("default");
    const [data, setData] = useState([]);
    const [expertData, setExpertData] = useState([]);
    const {loggedIn, setLoggedUser, setLoggedIn, setLoggedUserName} = useContext(Context);

    const handleInputId = (e) => {
        setUserId(e.target.value)
    };
    const handleInputPw = (e) => {
        setUserPw(e.target.value)
    };
    const handleCombo = (e) => {
        setUserType(e.target.value)
    }

    const onClickLogin = () => {
        if(userType === "default"){
            {data.map((i) => {
                if(userId === i.email && userPw === i.password){
                    setLoggedIn();
                }
            })}
        }else{
            {expertData.map((i) => {
                if(userId === i.email && userPw === i.password){
                    setLoggedIn();
                }
            })}
        }
    };

    const loginPost = () => {

        console.log(loggedIn)
        if(loggedIn){
            let body = {
                email: userId,
                password: userPw,
            }
            axios.post('http://localhost:8080/Login', body)
            .then(res => console.log(res))
            .catch()

            let params = {
                ...body,
                type: userType
            }
            setLoggedUserName(userId);
            setLoggedUser(params);

            alert("로그인 되었습니다");
            navigate("/");
        }else{
            alert("로그인 정보가 맞지 않습니다");
            setUserId("");
            setUserPw("");
        }
    }

    useEffect(() => {
        if(!loggedIn){
            axios.get("http://localhost:8080/users").then((data) => {
                console.log(data.data);
                setData(data.data);
            }).catch()
            axios.get("http://localhost:8080/expert-user/join").then((data) => {
                console.log(data.data);
                setExpertData(data.data);
            }).catch()
        }else{
            loginPost();
            navigate("/");
        }
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [loggedIn, navigate])

    return(
        <>
        <img className = "bg" src = "img/bg.jpg" alt = ""/>
        <div className = "container">
            <div className = "content">
                <h1>Login</h1>
                    <select className = "loginType" onChange = {handleCombo}>
                        <option key = "default" value = "default">default</option>
                        <option key = "expert" value = "expert">expert</option>
                    </select>
                    <input className = "loginInput" placeholder = "e-mail" value={userId} onChange={handleInputId}/>
                    <input className = "loginInput" placeholder = "password" type='password' value={userPw} onChange={handleInputPw}/>
                <div className = "btnContainer">
                    <button className = "btn" onClick={onClickLogin}>Submit</button>
                    <Link to ="/Register">
                        <button className = "btn2">Register</button>
                    </Link>
                </div>
                <br/><hr/><br/>
                <span className = "text_users">this site is sponsered by UMC</span>
            </div>
        </div>
        </>
    );
}