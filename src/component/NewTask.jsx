import { useContext, useRef, useState } from "react";
import styles from "./NewTask.module.css";
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../Context';
function NewTask() {
  let [inp, setInp] = useState('');
  const {array, setarr} = useContext(Context);

  
  function add(item) {
    console.log(item);
    if(inp){
      const h = {id: uuidv4(), task: item, isComp: false };
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
