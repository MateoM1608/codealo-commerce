import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products';
import DetailProducts from './components/DetailProducts';
import Purchase from './components/Purchase';
import Login from './components/Login';
import SignUp from './components/SignUp';

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/productos" element={<Products/>}/>
      <Route exact path="/productos/:slug" element={<DetailProducts/>}/>
      <Route exact path="/comprar" element={<Purchase/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registrar" element={<SignUp/>}/>

    </Routes>
  );
}

export default App;
