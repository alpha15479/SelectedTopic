import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../fire'
import "./Login.css";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch (error) {
            alert(error)
        }
    }

    if (currentUser) {
        return <Redirect to="/hero" />
    }

    return (
        <>
            <section className="contain" id="contain">
                <div className="form-container sign-in-contain">
                <br /><br /><br />
                <h1>Sign Up</h1><br /><br />
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small><br /><br /><br />
                        </div>
                        <div className="form">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                        </div><br /><br />
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp;