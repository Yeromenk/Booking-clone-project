import React, {useContext, useState} from 'react';
import './login.css';

import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";


const Login = () => {
    const [credentials, setCredentials] = useState({username: undefined, password: undefined});
    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            navigate("/")
        } catch (e) {
            dispatch({type: "LOGIN_FAILURE", payload: e.response.data})
            alert(e.response.data.message)
        }
    }

    return (
        <>
        <Navbar/>
        <div className="login">
            <div className="lContainer">
                <h2 className="login-title">Login</h2>
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"/>
                <input type="password" placeholder="password" id="password" onChange={handleChange}
                       className="lInput"/>
                <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
                {error && <span>{error.message}</span>}
                <div className="register-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;