import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Tabs, Tab, IconButton } from '@mui/material';
import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CardComponent from '../../components/CardComponent';
import clsx from 'clsx';
const HomePage = (props) => {

    return (
        <Box className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: '#EAE7B1', mr: 1, my: 0.5 }} />
                        <TextField
                            sx={{ color: '#EAE7B1' }}
                            id="input-with-sx" label="Search"
                            inputProps={{ style: { color: "#EAE7B1" } }}
                            variant="standard" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12}>
                    <Typography className={clsx(styles.yellowText, styles.categoryText)} variant="h6" gutterBottom>
                        Best Seller
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12}>
                    <Typography className={clsx(styles.yellowText, styles.categoryText)} variant="h6" gutterBottom>
                        Best Seller
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12}>
                    <Typography className={clsx(styles.yellowText, styles.categoryText)} variant="h6" gutterBottom>
                        Best Sellerr
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent />
                </Grid>
            </Grid>
        </Box >
    )
}

export default HomePage;