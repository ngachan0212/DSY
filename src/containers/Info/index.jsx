import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material';
import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCreateImage
} from '../../reducers/images';
import Avatar from '@mui/material/Avatar';
import Main from '../../pages/Main';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmailIcon from '@mui/icons-material/Email';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

const InfoContainer = (props) => {

    return (
        <Main>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box display='flex' alignItems="center" mb={3}>
                        <Box mr={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                        <Box>
                            <Typography className={styles.usernameAvt} variant="h6" gutterBottom>
                                Chan Chan
                            </Typography>
                            <Typography className={styles.subtitleAvt} variant="subtitle1" gutterBottom>
                                Edit profile
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <PersonIcon className={styles.icon} />
                        <Typography ml={2} className={styles.usernameAvt} variant="h5">
                            My Account
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={9}>
                    <Box className={styles.formContainer}>
                        <Typography ml={2} className={styles.titleForm} variant="h5" mb={4}>
                            My Profile
                        </Typography>
                        <Grid container spacing={2} className={styles.fullWidth}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={10}>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }} mb={2}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Username
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Name
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <InsertEmoticonIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Email
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Sex
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <WcIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Dob
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <CalendarMonthIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl variant="standard" sx={{ display: 'block', width: '100%', marginBottom: '30px' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Address
                                    </InputLabel>
                                    <Input
                                        sx={{ width: '80%' }}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <HomeIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Box sx={{ textAlign: 'right' }}>
                            <Button variant="contained" className={styles.btn}>Save</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Main>
    )
}

export default InfoContainer;