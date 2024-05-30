import React from 'react';
import './Dashboard.css';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

const Dashboard = () => {
    return (
        <div className="container">
            <header>
                <h1>SOCIAL MEDIA DASHBOARD <RxDashboard /></h1>
            </header>
            <div className="main">
                <div className="info">
                    <h2>WELCOME TO YOUR DASHBOARD!</h2>
                </div>
                <div className="content">
                    <div className="sidebar">
                        <p>Click the below links for direct access of your account👇</p>
                        <ul className="links">
                            <li>
                                <h2><a href="https://www.instagram.com/">INSTAGRAM <FaInstagramSquare /></a></h2>
                                <ul className='schedule-posts'>
                                    <h2><a href="https://help.instagram.com/479832029758079/?helpref=hc_fnav">-Schedule Posts</a> </h2>
                                </ul>
                                <ul className='analytics'>
                                    <h2><a href="https://help.instagram.com/257516379077270/?helpref=uf_share">-Analytics</a> </h2>
                                </ul>
                            </li>
                            <li>
                                <h2><a href="https://www.facebook.com">FACEBOOK <FaFacebookSquare /></a></h2>
                                <ul className='schedule-posts'>
                                    <h2><a href="https://www.facebook.com/help/389849807718635">-Schedule Posts</a> </h2>
                                </ul>
                                <ul className='analytics'>
                                    <h2><a href="https://www.facebook.com/help/239070709801747/?helpref=hc_fnav">-Analytics</a> </h2>
                                </ul>
                            </li>
                            <li>
                                <h2><a href="https://www.twitter.com/?lang=en">TWITTER <FaTwitterSquare /></a></h2>
                                <ul className='schedule-posts'>
                                    <h2><a href="https://business.x.com/en/help/campaign-editing-and-optimization/scheduled-tweets.html">-Schedule Tweets</a> </h2>
                                </ul>
                                <ul className='analytics'>
                                    <h2><a href="https://help.twitter.com/en/safety-and-security/account-security-tips">-Analytics</a> </h2>
                                </ul>
                            </li>
                            <li>
                                <h2><a href="https://www.linkedin.com/feed/">LINKEDIN <IoLogoLinkedin /></a></h2>
                                <ul className='schedule-posts'>
                                    <h2><a href="https://www.linkedin.com/help/linkedin/answer/a1347212">--Schedule Posts</a> </h2>
                                </ul>
                                <ul className='analytics'>
                                    <h2><a href="https://www.linkedin.com/help/linkedin">-Analytics</a> </h2>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="details">
                        <h3>Check Your Social Media Details for the MAY Month!!</h3>
                        <div>                                     
                            <h2>INSTAGRAM</h2>
                            <p>followers: 2.5k</p>
                            <p>posts: 100</p>
                            <p>likes: 3K</p>
                        </div>
                        <div>
                            <h2>FACEBOOK</h2>
                            <p>followers: 3k</p>
                            <p>posts: 200</p>
                            <p>likes: 2.5K</p>
                        </div>
                        <div>
                            <h2>TWITTER</h2>
                            <p>followers: 200</p>
                            <p>tweets: 80</p>
                            <p>Retweets: 50</p>
                        </div>
                        <div>
                            <h2>LINKEDIN</h2>
                            <p>Connections: 2k</p>
                            <p>posts: 150</p>
                            <p>likes: 1.5K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


