import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import styles from "../styles/Login.module.css";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
return (
  <main>
    <section>
      <div>
        <div>
          <h1>Spotify</h1>
          <form>
            <div>
              <label htmlFor="email-address">Email address</label>{" "}
              <input
                type="email"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              ></input>
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              ></input>
            </div>
            <button type="submit" onClick={onLogin}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
);
};
