import React, { useContext } from "react";
import "../Hero.css";
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../fire'
import { AuthContext } from './Auth'

const Hero = ({ handleLogout }) => {
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
                        <h3>Welcome to<em> PENTAGON</em></h3><br /><br /><br />
                        <div className="col">
                            <div className="col pics">
                                <img src="https://riahsoftware.com/wp-content/uploads/2019/06/System-Programmer.jpg" alt="Girl in a jacket" />
                            </div>
                            <div className="col name">
                                <h4>Programmer</h4>
                            </div>
                            <div className="col desc">
                                <h4>- ประสบการณ์ 3 ปีขึ้นไป <br />
                                - ใช้ Python, JavaScript, React คล่อง <br />
                                - รับจำนวนทั้งหมด 4 คน <br />
                                - รับทั้งเพศชายและหญิง อื่นๆ <br />
                                - เงินเดือนเริ่มต้นที่ 400,000 บาท <br />
                                - สมัครก่อนวันที่ 31 ธันวาคม 2564</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col pics">
                                <img src="https://www.mindinventory.com/blog/wp-content/uploads/2018/07/full-stack1200.png" alt="Girl in a jacket" />
                            </div>
                            <div className="col name">
                                <h4>Full Statck</h4>
                            </div>
                            <div className="col desc">
                                <h4>- ประสบการณ์ 3 ปีขึ้นไป <br />
                                - Nodejs, PHP, Python, Ruby, Angular <br />
                                - รับจำนวน 2 คน <br />
                                - รับทั้งเพศชายและหญิง อื่นๆ <br />
                                - เงินเดือนเริ่มต้นที่ 590,900 บาท <br />
                                - สมัครก่อนวันที่ 31 ธันวาคม 2564</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col pics">
                                <img src="https://www.tcels.or.th/getattachment/0d2fc1ed-c0be-4a3a-8b0e-d7e5af65e061/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A8%E0%B8%99%E0%B8%A2.aspx" alt="Girl in a jacket" />
                            </div>
                            <div className="col name">
                                <h4>Full Statck</h4>
                            </div>
                            <div className="col desc">
                                <h4>- ประสบการณ์ 5 ปีขึ้นไป <br />
                                - ควบคุมลูกทีม และดูแลการทำงานจนตลอดรอดฝั่ง <br />
                                - รับจำนวน 1 คน <br />
                                - รับทั้งเพศชายและหญิง อื่นๆ <br />
                                - เงินเดือนเริ่มต้นที่ 750,900 บาท <br />
                                - สมัครก่อนวันที่ 1 ธันวาคม 2564</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col pics">
                                <img src="https://assets.website-files.com/5ef30172d420a29464502cf6/5ef30172d420a2f79f502fed_%231-Web%20Marketing-03.jpg" alt="Girl in a jacket" />
                            </div>
                            <div className="col name">
                                <h4>Web Design</h4>
                            </div>
                            <div className="col desc">
                                <h4>- ประสบการณ์ 1 ปีขึ้นไป <br />
                                - อย่างน้อย CSS, JavaScript, Html ต้องคล่อง <br />
                                - รับพนักงานทั้งหมด 3 คน <br />
                                - รับทั้งเพศชายและหญิง อื่นๆ <br />
                                - เงินเดือนเริ่มต้นที่ 190,000 บาท <br />
                                - สมัครก่อนวันที่ 31 ธันวาคม 2564</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col pics">
                                <img src="https://www.carecleans.com/wp-content/uploads/2020/09/VNDIK8Jf35u5DJZ.jpg" alt="Girl in a jacket" />
                            </div>
                            <div className="col name">
                                <h4>Housekeeper</h4>
                            </div>
                            <div className="col desc">
                                <h4>- ประสบการณ์ 0 ปีขึ้นไป <br />
                                - ใช้ไม้กวาด ไม้ถูกพื้น และรู้เรื่องการทำความสะอาดกระจก <br />
                                - รับพนักงานทั้งหมด 10 คน <br />
                                - รับทั้งเพศชายและหญิง อื่นๆ <br />
                                - เงินเดือนเริ่มต้นที่ 390,000 บาท <br />
                                - สมัครก่อนวันที่ 1 ธันวาคม 2564</h4>
                            </div>
                        </div>
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