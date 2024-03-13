import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Commands from "./pages/Commands";
import AppLayout from "./pages/AppLayout";
import Speech from "./component/Speech";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="command" element={<Commands />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="speech" element={<Speech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
