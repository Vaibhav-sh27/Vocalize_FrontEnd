import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Commands from "./pages/Commands";
import AppLayout from "./pages/AppLayout";
import Speech from "./component/Speech";
import { Context } from "./Context";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import axios from 'axios';

function App() {
  const [array, setarr] = useState([]);
  console.log();
  useEffect( () => {
    async function getData(){
      await axios
      .get(`${window.API_URL}/todos`)
      .then((res) => {
        setarr(res.data)
        console.log(res);
      })
      .catch((error) => {
        console.log(error)
      })
    }
    getData();
  }, [])

  return (
    <BrowserRouter>
      <Context.Provider value={{ array, setarr }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="command" element={<Commands />} />
        <Route path="app" element={<AppLayout />} />
        {redirect}
        <Route path="speech" element={<Speech />} />
      </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
