// import Footer from "../component/Footer";
import Logo from "../component/Logo";
import ProfileTo from "../component/ProfileTo";
import Sidebar from "../component/Sidebar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.sidenav}>
          <Logo />
          <ProfileTo />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default AppLayout;
