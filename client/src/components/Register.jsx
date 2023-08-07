import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './css/Register.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/register`, {username, email, password, confirmPassword}, {withCredentials: true})
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                const errorMsg = err.response.data.msg
                const errorResponse = err.response.data.errors;
                const errorArr = []
                if (errorMsg) {
                    alert(errorMsg)
                }
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
            
    }
    return (
            <div className="regContainer">
                <h2>Register</h2>
                <div className="errorContainer">
                {errors.map((err, index) => (
                    <p className="errors" key={index}>{err}</p>
                ))}
                </div>
                
                    <form onSubmit={registerHandler}>
                        <div className="regFormContainer">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="username">Username: </label>
                            <input className="form-control" type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email: </label>
                            <input className="form-control" type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label className="form-label" htmlFor="password">Password: </label>
                            <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password: </label>
                            <input className="form-control" type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                            <button className="btn btn-primary m-2">Register</button>
                        </div>
                        </div>
                    </form>
                
            </div>
        
    )
}
export default Register;