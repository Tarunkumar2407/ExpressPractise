import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import View from './Components/View';
import Edit from './Components/Edit';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/view/:id' element={<View />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
