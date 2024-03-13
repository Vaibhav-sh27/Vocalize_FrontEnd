import { useRef, useState } from "react";
import styles from "./NewTask.module.css";
function NewTask({array,setarr}) {
  let [inp, setInp] = useState('');
  function add(item) {
    console.log(item);
    if(inp){
      const h = { task: item, isComp: false };
      setarr((item) => [...item, h]);
      setInp("");
    }
    
  }
  return (
    <div className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">New Task</label>
        <input id="cityName" placeholder="Create a new Task" onChange={(e)=>{setInp(e.target.value)}} value={inp} />
        {/* <input id="Time" placeholder="Time" type="time" /> */}
        <button  className={styles.btn} onClick={()=>{add(inp)}}>ADD </button>
      </div>
    </div>
  );
}

export default NewTask;
