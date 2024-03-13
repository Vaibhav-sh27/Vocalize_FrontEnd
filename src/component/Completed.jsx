import styles from "./Completed.module.css";

function Completed({ arr }) {
  return (
    <div>
      <h1 className={styles.main}>Completed Task</h1>
      <ul className={styles.List}>
        {arr.map((comp, i) => comp.isComp && <List key={i} comp={comp} />)}
      </ul>
    </div>
  );
}

function List({ comp }) {
  return (
    <li className={styles.li}>
      <h1>{comp.task}</h1>
    </li>
  );
}

export default Completed;
