import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './css/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/login`, {username, password}, {withCredentials: true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.response.data.msg)
            })
        }
    return (
        <div className="loginContainer">
                <h2>Login</h2>
                <form onSubmit={loginHandler}>
                    <div className="username">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    
} 
export default Login;