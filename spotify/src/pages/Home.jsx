// import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai"
import { AiFillRightCircle } from "react-icons/ai"
import axios from 'axios';
// import { auth } from "../config"
import React from "react";
import account from "../assets/accountPic.jpeg"
import styles from "../styles/Home.module.css"
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Side } from "./Sidebar";
import { Link } from "react-router-dom"
import { useEffect } from "react";

 const baseUrl = "http://localhost:3000/playlists";

export const Home = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
        .get(baseUrl)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);
    // const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, setUser ] = useState("")
    
    // const onLogin = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             navigate("/");
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         });
    // };
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         console.log(user);
    //         if (user) {
    //             setUser(user);
    //             const uid = user.uid;
    //             console.log(user);
    
    //             console.log("uid", uid);
    //         } else {
    //             console.log("user is logged out");
    //         }
    //     });
    // }, []);

    
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Side/>
                {/* <div className={styles.header}>
                    <div>
                        <AiFillLeftCircle style={{width: 30, height: 30}}></AiFillLeftCircle>
                        <AiFillRightCircle style={{width: 30, height: 30}}></AiFillRightCircle>
                    </div>
                    <div>
                        <div className={styles.topRight}>
                            <div>hehe</div>
                            <button className={styles.upgrade}></button>
                            <button className={styles.account}>
                                <img src={ account } style={{borderRadius: "50%", width: 30, height: 30}}/>
                                <Link to="/Playlists">Account</Link>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
};
