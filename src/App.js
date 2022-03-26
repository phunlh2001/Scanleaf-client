import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./features/Home";
import Scan from "./features/Scan";
import Contact from "./features/Contact";
import About from "./features/About";
import Login from "./features/Login";
import SignUp from "./features/SignUp";
import UserPage from "./features/UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<SignUp />} exact />
          <Route path="/scan-photos" element={<Scan />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/about-us" element={<About />} exact />
          <Route path="/profile" element={<UserPage />} exact />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
