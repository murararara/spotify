import React from "react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom";
import account from "../assets/accountPic.jpeg"
import styles from "../styles/Sidebar.module.css"

export const Side = () => {
    const [user] = useState("");

    return (
        <div className={styles.container}>
            <div classname={styles.main}>
                <div className={styles.button}>
                    <div>
                        <AiFillHome style={{color: "white", width: 30, height: 30}}/>
                        <Link to="/Home">Home</Link>
                    </div>
                    <div>
                        <BiSearch style={{color: "white", width: 30, height: 30}}/>
                        <Link to="/Search">Search</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

