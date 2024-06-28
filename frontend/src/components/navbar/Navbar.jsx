import "./navbar.css"
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    return (
        <div className="navbar">
            <div className="navContainer">
                <NavLink to={"/"} style={{textDecoration: "none", color: "inherit"}}>
                    <span className="logo">Booking Clone</span>
                </NavLink>
                {user ? (
                    <div className="navItems">
                        <span> Welcome, {user.username}</span>
                        <button className="navButton" onClick={logout}>Logout</button>
                    </div>

                ) : (
                    <div className="navItems">
                        <NavLink to="/register" style={{textDecoration: 'none', color: "inherit"}}>
                            <button className="navButton">Register</button>
                        </NavLink>
                        <NavLink to="/login" style={{textDecoration: 'none', color: "inherit"}}>
                            <button className="navButton">Login</button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar