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
            .catch((err) => {
                const errorMsg = err.response.data.msg
                console.log(err)
                console.log(errorMsg);
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
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
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <div className="regFormContainer">
                    <form onSubmit={registerHandler}>
                        <div>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input type="text" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        
    )
}
export default Register;