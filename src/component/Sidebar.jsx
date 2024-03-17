import styles from "./Sidebar.module.css";
// import Footer from "./Footer";
import NewTask from "./NewTask";
import Completed from "./Completed";
import Current from "./Current";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from '../Context';
// import { Outlet } from "react-router-dom";

// const arr = [
//   {
//     id: uuidv4(),
//     task: "Work to do",
//     isComp: true,
//   },
//   {
//     id: uuidv4(),
//     task: "Gym to go",
//     isComp: false,
//   },
//   {
//     id: uuidv4(),
//     task: "sleeping 8 hours",
//     isComp: false,
//   },
//   {
//     id: uuidv4(),
//     task: "study 10 hours",
//     isComp: true,
//   },
//   {
//     id: uuidv4(),
//     task: "study 10 hours",
//     isComp: false,
//   },
//   {
//     id: uuidv4(),
//     task: "gaming 10 hours",
//     isComp: true,
//   },
// ];

function Slidebar() {
  const {array, setarr} = useContext(Context);
  return (
    <div className={styles.sidebar}>
      {/* <Outlet /> */}
      <div className={styles.left}>
        <NewTask />
        <Completed />
      </div>
      <Current />
    </div>
  );
}
{
  /* <Footer />   */
}

export default Slidebar;
