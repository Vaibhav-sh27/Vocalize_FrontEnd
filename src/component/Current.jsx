import { Link } from "react-router-dom";
import styles from "./Current.module.css";

function Current({ arr }) {
  return (
    <div className={styles.main}>
      <button className={styles.btn}>
        <Link className={styles.Link} to="/speech">
          Start Recording
        </Link>
      </button>
      <input className={styles.inp} type="text" />
      <h1 className={styles.head}>Current Task</h1>
      <ul className={styles.List}>
        {arr.map((comp, i) => !comp.isComp && <List key={i} comp={comp} />)}
      </ul>
    </div>
  );
}

function List({ comp }) {
  return (
    <li className={styles.li}>
      <h1> ⚫ {comp.task}</h1>
      <button>❌</button>
    </li>
  );
}

export default Current;
