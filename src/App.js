import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import AboutePage from './page/AboutePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';
import { LoginPage } from './page/LoginPage';
import { UserPage } from './page/UserPage';


function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutePage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>
    </>
  );
}

export default App;
