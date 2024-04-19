import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/AuthContext";

function PageNav() {
  const {token} = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/command">Commands</NavLink>
        </li>
        <li>
          {token? <NavLink to="/logout" className={styles.ctaLink} style={{backgroundColor:'red', color:'white'}}>
            Logout
          </NavLink> : 
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
