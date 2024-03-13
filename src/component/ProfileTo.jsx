import { Link } from "react-router-dom";
import styles from "./ProfileTo.module.css";
function ProfileTo() {
  return (
    <Link to="/">
      <img src="../profile.png" alt="Vocalize logo" className={styles.logo} />
    </Link>
  );
}

export default ProfileTo;
