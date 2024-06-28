import React, {useContext, useState} from 'react';
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Registration = () => {

    const [user, setUser] = useState({username: "", email: "", password: ""});
    const {loading, error, } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/api/auth/register", user)
            navigate("/")
        } catch (e) {
            console.log(e.response.data)
        }
    }
    return (
        <>
            <Navbar/>
            <div className="login"> 
                <div className="lContainer">
                    <h2 className="login-title">Register</h2> 
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="username" name="username" onChange={handleChange} value={user.username} className="lInput"/>
                        <input type="email" placeholder="email" name="email" onChange={handleChange} value={user.email} className="lInput"/>
                        <input type="password" placeholder="password" name="password" onChange={handleChange} value={user.password} className="lInput"/>
                        <button type="submit" className="lButton" disabled={loading}>Register</button>
                        {error && <span>{error.message}</span>}
                    </form>
                    <div className="register-link">
                        Already have an account? <Link to="/login">Login</Link> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;