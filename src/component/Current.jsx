import { Link, redirect, useNavigate } from "react-router-dom";
import styles from "./Current.module.css";
import { useContext, useState } from "react";
import "regenerator-runtime/runtime";
import { v4 as uuidv4 } from "uuid";
// import { Redirect } from "react-router-dom";
import { Context } from '../Context';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Current() {
  // const [g, setg] = useState(arr);
  const {array, setarr} = useContext(Context);

  function add(item) {
    console.log(item);
    const h = { id: uuidv4(), task: item, isComp: false };
    setarr((item) => [...item, h]);
  }

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

  function remove(item) {
    console.log(item);
    let st = item.toUpperCase();
    let uid = array.filter((k) => {
      let del;
      let str = k.task.toUpperCase();
      if (st == str) {
        del = k.id;
      }
      return del;
    });
    console.log(uid[0].id);
    handledel(uid[0].id);
  }

  const navigate = useNavigate();

  const commands = [
    {
      command: ["add *"],
      callback: (item) => add(item),
    },
    {
      command: ["go to *", "open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
    {
      command: ["skip *", "remove *", "delete *"],
      callback: (item) => remove(item),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "login"];
  const urls = {
    home: "/",
    login: "/login",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  let redirect = "";
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = navigate({ redirectUrl });
    } else {
      redirect = <p> could not find page :{redirectUrl}</p>;
    }
  }

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
        {array.map(
          (comp, i) =>
            !comp.isComp && (
              <List key={i} comp={comp} />
            )
        )}
      </ul>
    </div>
  );
}

function List({ comp}) {
  let navigate = useNavigate();
  const {array, setarr} = useContext(Context);

  function handleComp(id) {
    let arr = array.map((item, index) => {
      if (item.id == id) {
        item.isComp = true;
      }
      return item;
    });
    //let arr = array;
    console.log(arr);
    setarr(arr);
    //  navigate("/app");
  }

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
      <h1> ⚫ {comp.task}</h1>
      <div>
        <button
          onClick={() => {
            handleComp(comp.id);
          }}
        >
          ✅
        </button>
        <button
          onClick={() => {
            handledel(comp.id);
          }}
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default Current;
