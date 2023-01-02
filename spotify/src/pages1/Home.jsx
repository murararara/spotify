import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Side from "../pages/Search"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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
                <div className={styles.header}>
                    <div>
                        <AiFillLeftCircle style={{width: 30, height: 30}}></AiFillLeftCircle>
                        <AiFillRightCircle style={{width: 30, height: 30}}></AiFillRightCircle>
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
};
