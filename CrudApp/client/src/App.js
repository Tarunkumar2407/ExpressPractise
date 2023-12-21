import "./App.css";
import Home from "./component/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import View from "./component/View";
import Edit from "./component/Edit"
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/view/:id" element={<View />}></Route>
       <Route path="/edit/:id" element={<Edit />}></Route>
       <Route path="/register" element={<Register />}></Route>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
