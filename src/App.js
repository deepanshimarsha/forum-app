import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comment from "./pages/Comment";
import "./App.css";

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
