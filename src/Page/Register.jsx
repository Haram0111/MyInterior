import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/User.css';

export default function Register(){
    const navigate = useNavigate();
    const [useremail, setUseremail] = useState("");
    const [userPw, setUserPw] = useState("");
    // const [pwCheck, setPwCheck] = useState("");
    const [userType, setUserType] = useState("default");
    const [userName, setUserName] = useState("");
    const [userMajor, setUserMajor] = useState("");

    const handleInputemail = (e) => {
        setUseremail(e.target.value)
    };
    const handleInputPw = (e) => {
        setUserPw(e.target.value)
    };
    // const handleInputCheck = (e) => {
    //     setPwCheck(e.target.value)
    // };
    const handleCombo = (e) => {
        setUserType(e.target.value)
        console.log(e.target.value)
    };
    const handleInputName = (e) => {
        setUserName(e.target.value)
    };
    const handleInputMajor = (e) => {
        setUserMajor(e.target.value)
    }

    const onClickRegister = () => {
        if(userType === "dafault"){
            let body = {
                email: useremail,
                password: userPw,
                /* confirmPsword: pwCheck */
            }
            axios.post("http://localhost:8080/users", body)
                .then((res) => console.log(res));
    
            init();
        }else{
            let body = {
                email: useremail,
                password: userPw,
                name: userName,
                // major : userMajor
            }
            console.log(body);
            axios.post("http://localhost:8080/expert-user/join", body)
                .then((res) => {
                    init();
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
            
        }
    }

    const init = () => {
        alert("회원가입 완료되었습니다");
        setUseremail("");
        setUserPw("");
        setUserType("");
        setUserName("");
        setUserMajor("");
        navigate("/Login");
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    })

    return(
        <>
        <img className = "bg" src = "img/bg.jpg" alt = ""/>
        <div className = { userType === "default" ? "container2" : "container3" }>
            <div className = "content">
                <h1>Register</h1>
                    <select className = "loginType" onChange = {handleCombo}>
                        <option key = "default" value = "dafault">default</option>
                        <option key = "expert" value = "expert">expert</option>
                    </select>
                    <input className = "loginInput" placeholder = "e-mail" value={useremail} onChange={handleInputemail} />
                    <input className = "loginInput" placeholder = "password" type='password' value={userPw} onChange={handleInputPw} />
                    {/* <input className = "loginInput" placeholder = "password check" type='password' value={pwCheck} onChange={handleInputCheck} /> */}
                    { userType === "expert" ? 
                        <>
                        <input className = "loginInput" placeholder = "name" value = {userName} onChange = {handleInputName}/>
                        <input className = "loginInput" placeholder = "major" value = {userMajor} onChange = {handleInputMajor}/>
                        </> 
                        : null 
                    }
                <div className = "btnContainer">
                    <button className = "btn" onClick={onClickRegister}>Submit</button>
                </div>
                <br/><hr/><br/>
                <span className = "text_users">this site is sponsered by UMC</span>
            </div>
        </div>
        </>
    );
}