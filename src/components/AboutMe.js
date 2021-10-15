import React, { useContext } from "react";
import "./About.css";
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../fire'
import { AuthContext } from './Auth'

const About = ({ handleLogout }) => {
    const { currentUser } = useContext(AuthContext);

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
                        <h3>The CEO of<em> Pentagon</em></h3><br /><br /><br />
                        <div className="coll">
                            <div className="coll pics">
                                <img className="img1" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/241388950_2961864234055117_9120084267659094638_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFSKgrC3BWcGTHA8SX0oMpZTbDr_Giomx9NsOv8aKibH4bxRnff_ZSfI1kYy_AZG1McIkrWP4xP4mvhIM0-nAhU&_nc_ohc=izliztjAeNoAX-I5WN7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=405403d9ce947275efb1df769e865ec3&oe=618A4AAA" alt="Girl in a jacket" />
                            </div>
                        </div>
                        <div className="profile">
                            <div className="profile name">
                                Name : Wichuda Phromsoda
                            </div>
                            <div className="profile name">
                                Nickname : Cream
                            </div>
                            <div className="profile name">
                                Age : 21 years old
                            </div>
                            <div className="profile name">
                                Birthdate : The 4th of October 2000
                            </div>
                            <div className="profile desc">
                                Description : I am student of Ubon Ratchathani University. 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default About;