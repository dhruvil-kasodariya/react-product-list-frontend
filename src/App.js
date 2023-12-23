import React from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from './pages/Auth';
import ProductList from './pages/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductView from './pages/ProductView';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Auth />}/>
        <Route path='productList' element={<ProductList />}/>
        <Route path='productView' element={<ProductView />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
