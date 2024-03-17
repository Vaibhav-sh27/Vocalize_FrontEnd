import { useContext, useRef, useState } from "react";
import styles from "./NewTask.module.css";
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../Context';
import axios from "axios";
function NewTask() {
  let [inp, setInp] = useState('');
  const {array, setarr} = useContext(Context);

  
  async function add(item) {
    console.log(item);
    if(inp){
      const h = { task: item, isComp: false };
      let res = await axios.post(`${window.API_URL}/addtodo`, h)
      console.log(res.data);
      setarr((item) => [...item, res.data.data]);
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
