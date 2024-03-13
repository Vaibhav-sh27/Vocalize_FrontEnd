import styles from "./Sidebar.module.css";
// import Footer from "./Footer";
import NewTask from "./NewTask";
import Completed from "./Completed";
import Current from "./Current";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { Outlet } from "react-router-dom";

const arr = [
  {
    id: uuidv4(), 
    task: "Work to do",
    isComp: true,
  },
  {
    id: uuidv4(), 
    task: "Gym to go",
    isComp: false,
  },
  {
    id: uuidv4(), 
    task: "sleeping 8 hrs",
    isComp: false,
  },
  {
    id: uuidv4(), 
    task: "study 10hrs",
    isComp: true,
  },
  {
    id: uuidv4(), 
    task: "study 10hrs",
    isComp: false,
  },
  {
    id: uuidv4(), 
    task: "gaming 10hrs",
    isComp: true,
  },
];

function Slidebar() {
  const [array, setarr] = useState(arr);
  return (
    <div className={styles.sidebar}>
      {/* <Outlet /> */}
      <div className={styles.left}>
        <NewTask array={array} setarr={setarr}/>
        <Completed arr={array} setarr={setarr}/>
      </div>
      <Current array={array} setarr={setarr} />
    </div>
  );
}
{
  /* <Footer />   */
}

export default Slidebar;
