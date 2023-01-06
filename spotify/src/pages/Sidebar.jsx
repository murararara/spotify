import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css"
import { AiFillPlusSquare } from "react-icons/ai";


export const Side = () => {
    return (
        <div className={styles.containerr}>
            <div className={styles.main}>
                <div className={styles.button}>
                    <div>
                        <AiFillHome/>
                        <Link to="/Home">Home</Link>
                    </div>
                    <div>
                        <BiSearch/>
                        <Link to="/Home">Search</Link>
                    </div>
                    <div>
                        <VscLibrary/>
                        <Link to="/Playlists">Playlists</Link>
                    </div>
                    <div>
                        <AiFillPlusSquare/>
                        <Link to="/Playlists">Create playlists</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

