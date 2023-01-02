import React from "react";
import { AiFillHome } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import account from "../assets/accountPic.jpeg"
import style from './Sidebar.module.css';

function Side() {
    return (
        <div className={styles.container}>
            <div classname={styles.main}>
                <div className={styles.button}>
                    <div>
                        <AiFillHome style={{color: white, width: 30, height: 30}}/>
                        Home
                    </div>
                    <div>
                        <BiSearch style={{color: white, width: 30, height: 30}}/>
                        Search
                    </div>
                    <div>
                        <div className={styles.topRight}>
                            <button className={style.upgrade}></button>
                            <button className={style.account}>
                                <img src={account}/>
                                <p>{user.name}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side;