import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Tabs, Tab, IconButton } from '@mui/material';
import styles from './styles.module.css'
import { Form } from './Form';
import { fetchLogin } from '../../api/login';
import { useNavigate, Navigate } from "react-router-dom";
const LoginContainers = (props) => {
  const navigate = useNavigate();

  const initialForm = {
    userName: "",
    password: ""
  }
  const [loginForm, setLoginForm] = useState(initialForm);
  const { userName, password } = loginForm;
  const handleInputChange = event => {
    setLoginForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const rs = await fetchLogin(loginForm);
    if (rs?.data?.success) {
      localStorage.setItem('TOKEN', rs.data.data.token);
      navigate("/home");
    }
  }
  const token = localStorage.getItem('TOKEN');
  return !token ? (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box sx={{ paddingLeft: '10px' }}>
            <Typography className={styles.textWhite} variant="h2" gutterBottom>
              WELCOME TO SAKURA JDG
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Form handleInputChange={handleInputChange} userName={userName} password={password} handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </Box>
  ) : <Navigate to="/home" />
}

export default LoginContainers;