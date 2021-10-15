import React, { useContext } from "react";
import "./Hero.css";
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../fire'
import { AuthContext } from './Auth'
import WorkItem from './WorkItem'
import works from './Work';

const Hero = ({ handleLogout }) => {

    const { currentUser } = useContext(AuthContext);
    const workElements = works.map((work, index) => {
        return <WorkItem key={index} work={work} />;
    })

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
                        <h3>Welcome to<em> PENTAGON</em></h3><br /><br /><br />
                        { workElements }
                    </div>
                </div>
            </section>
            <div className="footer">
                <p>Hello, friends! Welcome to my Selected Topic Website. </p>
            </div>
        </body>
    )
}

export default Hero;