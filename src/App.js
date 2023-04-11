import React from "react";
import MenuAppBar from "./pages/Sidebars";
import Footers from "./pages/Footers";
import RegisterContainer from './components/Register';
import LoginContainers from './components/Login';
import HomePage from './containers/HomePage';
import { Box } from '@mui/material'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./containers/ProtectedRoute";
import configureStore from './redux/configureStore';
function App() {

  return (
    <Provider store={configureStore}>
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
    </Provider>
  );
}

export default App;
