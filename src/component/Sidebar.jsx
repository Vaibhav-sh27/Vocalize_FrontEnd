import styles from "./Sidebar.module.css";
// import Footer from "./Footer";
import NewTask from "./NewTask";
import Completed from "./Completed";
import Current from "./Current";
// import { Outlet } from "react-router-dom";

const arr = [
  {
    task: "Work to do",
    isComp: true,
  },
  {
    task: "Gym to go",
    isComp: false,
  },
  {
    task: "sleeping 8 hrs",
    isComp: false,
  },
  {
    task: "study 10hrs",
    isComp: true,
  },
  {
    task: "study 10hrs",
    isComp: false,
  },
  {
    task: "gaming 10hrs",
    isComp: true,
  },
];

function Slidebar() {
  return (
    <div className={styles.sidebar}>
      {/* <Outlet /> */}
      <div className={styles.left}>
        <NewTask />
        <Completed arr={arr} />
      </div>
      <Current arr={arr} />
    </div>
  );
}
{
  /* <Footer />   */
}

export default Slidebar;
