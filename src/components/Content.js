import React, { useContext } from "react";
import "../Content.css";
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../fire'
import Axios from 'axios'
import { useState } from 'react'

const Content = ({ handleLogout }) => {
    
    const { currentUser } = useContext(AuthContext);
    const [employeeList, setEmployeeList] = useState([]);

    const getEmployee = () => {
        Axios.get('http://localhost:3000/employee').then(response => {
            setEmployeeList(response.data);
        });
    }

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <body>
            <header className="main-header clearfix">
                <div className="logo">
                    <a href="/hero" className="logo"><em>Penta</em>gon</a>
                </div>
                <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li><a href="#section1">Hello - {currentUser.email}</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/content">Apply</a></li>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="#section4"><button onClick={() => firebaseConfig.auth().signOut()}>LogOut</button></a></li>
                    </ul>
                </nav>
            </header>
            <section className="section main-banner">
                <div className="content">
                    <div className="row">
                        <h3>Please apply<em> your application</em></h3><br />
                        <div className="first">
                            <form action="" className="former">
                                <br />
                                <label htmlFor="name" className="form-control">Name :</label>
                                <input type="text" placeholder="Enter your name here" />
                                <label htmlFor="age" className="form-control">Age :</label>
                                <input type="number" placeholder="Enter your age here" />
                                <label htmlFor="country" className="form-control">Country :</label>
                                <input type="text" className="form-control" placeholder="Enter your country here" />
                                <label htmlFor="position" className="form-control">Position :</label>
                                <input type="text" className="form-control" placeholder="Enter your position here" />
                                <label htmlFor="salary" className="form-control">Salary :</label>
                                <input type="number" className="form-control" placeholder="Enter your salary expectation here" /><br />
                                <button className="btn btn-success">Add Employee</button><br />
                            </form>
                        </div>
                        <div className="second">
                            <button className="btn btn-primary" onClick={getEmployee}>Show Employees</button>

                            {employeeList.map((val, key) => {
                                return (
                                    <div className="second">
                                        <p className="card-text">Name : {val.name}</p>
                                        <p className="card-text">Age : {val.age}</p>
                                        <p className="card-text">Country : {val.country}</p>
                                        <p className="card-text">Position : {val.position}</p>
                                        <p className="card-text">Salary : {val.salary}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Content;