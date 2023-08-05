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
                    <div className="formContainer">
                        <div className="username">
                            <label htmlFor="username" className="form-label">Username: </label>
                            <input className="form-control" type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="password">
                            <label className="form-label" htmlFor="password">Password: </label>
                            <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="btn btn-primary m-2">Login</button>
                    </div>
                    </form>
                    
                </div>
                
            
        )
    
} 
export default Login;