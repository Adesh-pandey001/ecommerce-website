import './App.css';
import Home from './home';
import Product from './product';
import { Routes, Route } from 'react-router-dom';
import Addsaler from './addsaler';
import Loginsign from './loginsignin';
function App() {
  return (
   <> 
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addsaler" element={<Addsaler />} />
          <Route path="/loginsign" element={<Loginsign />} />
    </Routes> 
   </>
  );
}

export default App;