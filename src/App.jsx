import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Commands from "./pages/Commands";
import AppLayout from "./pages/AppLayout";
import Speech from "./component/Speech";
import { Context } from "./Context";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import { Redirect } from "react-router-dom";

const arr = [
  {
    id: uuidv4(),
    task: "Work to do",
    isComp: true,
  },
  {
    id: uuidv4(),
    task: "Gym to go",
    isComp: false,
  },
  {
    id: uuidv4(),
    task: "sleeping 8 hours",
    isComp: false,
  },
  {
    id: uuidv4(),
    task: "study 10 hours",
    isComp: true,
  },
  {
    id: uuidv4(),
    task: "study 10 hours",
    isComp: false,
  },
  {
    id: uuidv4(),
    task: "gaming 10 hours",
    isComp: true,
  },
];

function App() {
  const [array, setarr] = useState(arr);
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
