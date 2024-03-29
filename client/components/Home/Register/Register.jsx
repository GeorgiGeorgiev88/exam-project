import { useState } from "react";
import styles from "../Login/Login.module.css";
import { Link } from 'react-router-dom';

const Register = ({handleUserRegister}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");

 
  
  const handleRegister = () => {

    if (email == "" || password == "") {
      return alert("All filds must be fild");
    }

    if(password!=rePassword){
      return alert("Repassword must much to password");
  }

    handleUserRegister(email,password,username);
    setEmail("");
    setPassword("");
    setRePassword("");
    setUsername("")
    console.log(
      `Register in with email: ${email}, password: ${password} and re-password: ${rePassword}`
    );
  };

  return (
    <>
      <div className={styles.rapper}> </div>
      <div className={styles["register-container"]}>
        <h2>Register</h2>
        <form>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="re-password">Repeat password:</label>
          <input
            type="password"
            id="re-password"
            name="re-password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />

          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <Link to='/login' className={styles.registration}>You are already registered</Link>
        </form>
      </div>
    </>
  );
};

export default Register;
