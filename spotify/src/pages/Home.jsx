import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai"
import { AiFillRightCircle } from "react-icons/ai"
import { auth } from "../config"
import React from "react";
import account from "../assets/accountPic.jpeg"
import styles from "../styles/Home.module.css"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Side } from "./Sidebar";


export const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser ] = useState("")
    
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
                const uid = user.uid;
                console.log(user);
    
                console.log("uid", uid);
            } else {
                console.log("user is logged out");
            }
        });
    }, []);

    
    return (
        <div className={styles.container}>
            <div classname={styles.main}>
                <Side/>
                <div className={styles.header}>
                    <div>
                        <AiFillLeftCircle style={{width: 30, height: 30}}></AiFillLeftCircle>
                        <AiFillRightCircle style={{width: 30, height: 30}}></AiFillRightCircle>
                    </div>
                    <div>
                        <div className={styles.topRight}>
                            <div>hehe</div>
                            <button className={styles.upgrade}></button>
                            <button className={styles.account}>
                                <img src={account} style={{width: 30, height: 30}}/>
                                <p>{user.name}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
