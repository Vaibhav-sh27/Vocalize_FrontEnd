import { useContext, useRef, useState } from "react";
// import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../contexts/Context";
import ModalAlert from "../components/Modal";
import axios from 'axios'

export default function Register() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  let emailInputRef= useRef("");
  let usernameInputRef= useRef("");
  let nameInputRef= useRef("");
  let passInputRef = useRef("");

  const {setShow, setAlert} = useContext(Context);

  async function handleRegister(e) {
    e.preventDefault();
    let email = emailInputRef.current.value;
    let username = usernameInputRef.current.value;
    let name = nameInputRef.current.value;
    let pass = passInputRef.current.value;
    if(!(email && username && name && pass)){
        setAlert("Please Enter Full Details!!!")
        setShow(true);
        return;
    }


    try {
      let res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
        email:email,
        username: username,
        name: name,
        password:pass, 
      });
      console.log(res);
      //alert("User Registerd Successfully! Please Login");
      setAlert("User Registerd Successfully! Please Sign In")
      setShow(true);
      navigate("/login");
    } catch (e) {
      // alert(e.response.data)
      console.log(e);
      setAlert(e.response.data)
      setShow(true);
    }
  }

  return (
    <main className={styles.login}>
     <ModalAlert/>
      <Logo />
      <form className={styles.form}>
      <h1>Create Account</h1>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            placeholder="jack@example.com"
            required
          />
        </div>
        <div className={styles.row}>
        <label htmlFor="text">Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            placeholder="Jack"
            required
          />
        </div>
        <div className={styles.row}>
        <label htmlFor="text">Username</label>
          <input
            type="text"
            id="username" 
            ref={usernameInputRef}
            placeholder="jack123"
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passInputRef}
            placeholder="Password"
            required
          />
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
          Already Registered? &nbsp; <Link to={'/login'} style={{color:'cyan'}}> Sign In</Link>
        </div>

        <div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button type="submit" onClick={handleRegister} style={{padding:' 7px 5rem', borderRadius:'8px'}}>Register</button>
          </div>
        </div>
      </form>
    </main>
  );
}
