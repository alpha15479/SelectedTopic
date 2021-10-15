import React, { useContext } from "react";
import "./Hero.css";
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <section className="cont" id="cont">
            <br />
                {currentUser ? (
                    <p>You are logged in<Link to="/hero"><br /><br /><h5>Go to Homepage</h5></Link></p>
                ) : (
                    <p>
                        <Link to="/login"><h5>Login</h5></Link><br /> OR <br /><br /><Link to="/signup"><h5>Sign Up</h5></Link>
                    </p>
                )}
            </section>

        </>
    )
}

export default Home;