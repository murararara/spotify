import React from "react";
import "./home.css";
import Side from "../SideBar/side";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import pro from "../../assets/accountPic.jpeg"


function App() {
    return (
        <div className="container">
            <Side/>
            <div className="main">
                <div className="navbar">
                    <div className="arrows">                    
                        <GrPrevious/>
                        <GrNext/>
                    </div>
                    <div className="right">
                        <div className="buttons">Upgrade</div>
                        <div className="buttons">
                            <img src={ pro } />
                            Account 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;