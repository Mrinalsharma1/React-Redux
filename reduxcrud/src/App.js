import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/Home';
import Create from './assets/Create';
import Update from './assets/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;