import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './css/Header.css'

const Header = (props) => {

    const logout = () => {
        axios.post(`http://localhost:8000/api/logout`, {}, {withCredentials: true})
            .then(console.log('logged out'))
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <h1>Community PC's</h1>
            </div>
            <div className="headerRight">
                <button className="btn btn-light m-1"><Link className="link-secondary link-underline-opacity-0" to='/register'>Register</Link></button>
                <button className="btn btn-light m-1"><Link className="link-secondary link-underline-opacity-0" to='/login'>Login</Link></button>
                <button  className="btn btn-danger m-1" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}
export default Header;