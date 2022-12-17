import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import BookUser from "./components/BookUser";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="/book/:user" element={<BookUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
