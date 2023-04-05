import React from "react";
import MenuAppBar from "./pages/Sidebars";
import Footers from "./pages/Footers";
import RegisterContainer from './components/Register';
import LoginContainers from './components/Login';
import HomePage from './containers/HomePage';
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./containers/ProtectedRoute";

function App() {

  return (
    <Box style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <BrowserRouter>
        <MenuAppBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute component={HomePage} />} />
          <Route path="/login" element={<LoginContainers />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </Box>
  );
}

export default App;
