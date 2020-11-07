import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from '@material-ui/core/Avatar';
import Search from './Search';
function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/apps">Apps</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home_inputcontainer">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
