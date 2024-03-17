import styles from "./Completed.module.css";
import { Context } from '../Context';
import { useContext } from "react";

function Completed() {
  const {array, setarr} = useContext(Context);
  return (
    <div>
      <h1 className={styles.main}>Completed Task</h1>
      <ul className={styles.List}>
        {array.map((comp, i) => comp.isComp && <List key={i} comp={comp}  />)}
      </ul>
    </div>
  );
}

function List({ comp}) {
  const {array, setarr} = useContext(Context);

  function handledel(id) {
    let arr = array.filter((item, index) => {
      if (item.id !== id) {
        return item;
      }
    });
    //let arr = array;
    console.log(arr);
    setarr(arr);
    //  navigate("/app");
  }
  return (
    <li className={styles.li}>
      <h1>{comp.task}</h1>
      <button
          onClick={() => {
            handledel(comp.id);
          }}
        >
          ❌
        </button>
    </li>
  );
}

export default Completed;
