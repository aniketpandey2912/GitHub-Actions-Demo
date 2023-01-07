import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HtmlStar from "./Pages/HtmlStar";
import CssStar from "./Pages/CssStar";
import JavaScriptStar from "./Pages/JavaScriptStar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/html" element={<HtmlStar />}>
          Home
        </Route>
        <Route path="/css" element={<CssStar />}>
          Home
        </Route>
        <Route path="/javascript" element={<JavaScriptStar />}>
          Home
        </Route>
      </Routes>
    </div>
  );
}

export default App;
