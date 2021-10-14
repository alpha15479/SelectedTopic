import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../fire'
import "../Login.css";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);


        } catch (error) {
            alert(error);
        }

    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/hero" />
    }

    return (
        <>
            <section className="contain" id="contain">
                <div className="form-container sign-in-contain">
                <br /><br /><br /><br />
                <h1>Hello, Friend!</h1>
                <p>Enter your email address and password to my web.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
                        </div>
                        <div className="form">
                        <br /><br />
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form" id="exampleInputPassword1" placeholder="Enter your password" /><br /><br />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;