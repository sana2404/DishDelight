import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Customer/pages/Home";
import About from "./Customer/pages/About";
import Contact from "./Customer/pages/Contact";
import Menu from "./Customer/pages/Menu";
import Pagenotfound from "../src/Customer/pages/Pagenotfound";
import Login from "./Customer/pages/Login";
import Cart from "./components/Cart/Cart";
import LoginSignup from "./Customer/pages/LoginSignup";
import PageController from "./AdminPanel/Home/PageController";
import AdminLogin from "./AdminPanel/Home/AdminLogin";

function App() { 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<LoginSignup/>} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/pagecontroller" element={<PageController />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
