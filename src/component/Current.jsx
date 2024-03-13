import { Link } from "react-router-dom";
import styles from "./Current.module.css";
import { useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Current({ array, setarr }) {
  // const [g, setg] = useState(arr);
  function add(item) {
    console.log(item);
    const h = { task: item, isComp: false };
    setarr((item) => [...item, h]);
  }

  const commands = [
    {
      command: ["add *"],
      callback: (item) => add(item),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className={styles.main}>
      <button onClick={SpeechRecognition.startListening} className={styles.btn}>
        {/* <Link className={styles.Link} to="/speech"> */}
        Start Recording
        {/* </Link> */}
      </button>
      <input className={styles.inp} type="text" value={transcript} />
      <h1 className={styles.head}>Current Task</h1>
      <ul className={styles.List}>
        {array.map((comp, i) => !comp.isComp && <List key={i} comp={comp} />)}
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
