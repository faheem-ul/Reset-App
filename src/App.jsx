import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AuthContext } from "./Context/Auth";

import { toast } from "react-toastify";

function App() {
  const { user } = useContext(AuthContext);
  // const notify = () => toast("Wow so easy!");

  // useEffect(() => {
  //   console.log("User updated:", user);
  // }, [user]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && <Route path="/login" element={<Login />} />}{" "}
          {!user && <Route path="/signup" element={<Signup />} />}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
