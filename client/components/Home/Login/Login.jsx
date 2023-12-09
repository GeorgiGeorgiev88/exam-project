
import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from "./Login.module.css";

const Login = ({handleUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email == "" || password == "") {
      return alert("All filds must be fild");
    }

   handleUser(email,password);
   setEmail('');
   setPassword('');
  };

  return (
    <>
    <div className={styles.rapper}> </div>
     <div className={styles["login-container"]}>
      <h2>Login</h2>
      <form>
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

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to='/register' className={styles.registration}>You don't have registration yet</Link>
      </form>
     </div>
     </>
  );
};

export default Login;
