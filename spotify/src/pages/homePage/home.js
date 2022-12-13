import React from "react";
import "./home.css";
import Side from "./sideBar/side"
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"


function Home() {
    return (
        <div className="container">
            <Side/>
            <div className="main">
                <div className="sidebar">
                    <div className="arrows">                    
                        <GrPrevious/>
                        <GrNext/>
                    </div>


                </div>
            </div>
        </div>
    )
}