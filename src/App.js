import logo from "./logo.svg";
import "./App.css";
import SideNav from "./component/SideNav";
import TopNav from "./component/TopNav";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Comment from "./pages/Comment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments/:postId" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
