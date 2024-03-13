import styles from "./NewTask.module.css";
function NewTask() {
  return (
    <div className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">New Task</label>
        <input id="cityName" placeholder="Create a new Task" />
        <input id="Time" placeholder="Time" type="time" />
        <button className={styles.btn}>ADD </button>
      </div>
    </div>
  );
}

export default NewTask;
