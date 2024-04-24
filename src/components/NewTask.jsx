import { useContext, useRef, useState } from "react";
import styles from "./NewTask.module.css";
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../contexts/Context';
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
function NewTask() {
  let [inp, setInp] = useState('');
  const {array, setarr} = useContext(Context);
  const {currUser} = useAuth();

  
  async function add(item) {
    if(inp){
      const h = { task: item, isComp: false, owner: currUser.email };
      let res = await axios.post(`${import.meta.env.VITE_API_URL}/todo/${currUser._id}/addtodo`, h)
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
