import * as React from 'react';
import Main from '../../pages/Main';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css'

export default function DetailProduct(props) {
    return (
        <Main>
            <Box>
                <Grid container>
                    <Grid item xs={5}>
                        <Box display="flex" justifyContent="center">
                            <img className={styles.imageProduct} src="https://images.unsplash.com/photo-1656122986472-4755c0e4ff68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h3" gutterBottom className={styles.title}>
                            Kose - Softymo Sppedy Cleasing Oil 230ml
                        </Typography>
                        <Typography className={styles.price} variant="h6" gutterBottom>
                            250.000 Đ
                        </Typography>
                        <Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Main>
    );
}