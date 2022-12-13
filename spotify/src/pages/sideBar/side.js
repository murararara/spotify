import React from "react";
import "./side.css";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiHeartSquare } from "react-icons/bi";


function Side() {
    return (
        <div className="main">
            <div className="nav-text">
                <Link to="/Home">Home</Link>
            </div>
            <div className="nav-text">
                <Link to="/Search">Search</Link>
            </div>
            <div className="nav-text">
                <Link to="/Library">Your Library</Link>
            </div>
            <div className="nav-text2">
                <div> 
                    <AiFillPlusSquare/>
                    Create Playlist
                </div>
            </div>
            <div className="nav-text2">
                <div>
                    <BiHeartSquare/>
                    Liked Songs
                </div>
            </div>
            <hr id="line"/>
            <div className="playlists">
                <div className="playlist">
                    My Playlist #1
                </div>
                <div className="playlist">
                    My Playlist #2
                </div>                
                <div className="playlist">
                    My Playlist #3
                </div>
                <div className="playlist">
                    My Playlist #4
                </div>
            </div>
        </div>
    )
}

export default Side;