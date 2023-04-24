import React from "react";
import MenuAppBar from "./pages/Sidebars";
import Footers from "./pages/Footers";
import RegisterContainer from './components/Register';
import LoginContainers from './components/Login';
import HomePage from './containers/HomePage';
import DetailProduct from './containers/DetailProduct';
import Cart from './containers/Cart';
import { Box } from '@mui/material'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./containers/ProtectedRoute";
import configureStore from './redux/configureStore';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Provider store={configureStore}>
      <ToastContainer />
      <Box style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <BrowserRouter>
          <MenuAppBar />
          <Routes>
            <Route path="/" element={<ProtectedRoute component={HomePage} />} />
            <Route path="/login" element={<LoginContainers />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
            <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
            <Route path="/product/info/:id" element={<ProtectedRoute component={DetailProduct} />} />
          </Routes>
          <Footers />
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
