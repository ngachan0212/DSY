import * as React from 'react';
import Main from '../../pages/Main';
import { Box, Grid, Typography, ButtonGroup, Button, Avatar } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useLocation, useParams } from 'react-router-dom';

const reviewSample = [
    {
        image: "https://images.unsplash.com/photo-1656122986472-4755c0e4ff68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        userName: "Law",
        comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
    },
    {
        image: "https://images.unsplash.com/photo-1656122986472-4755c0e4ff68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        userName: "Luffy",
        comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
    },
    {
        image: "https://images.unsplash.com/photo-1656122986472-4755c0e4ff68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        userName: "Garp",
        comment: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
    },
]
export default function DetailProduct(props) {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    return (
        <Main>
            <Box>
                <Grid container>
                    <Grid item xs={3}>
                        <Box display="flex" >
                            <img className={styles.imageProduct} src="https://images.unsplash.com/photo-1656122986472-4755c0e4ff68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h3" gutterBottom className={styles.title}>
                            Kose - Softymo Sppedy Cleasing Oil 230ml
                        </Typography>
                        <Typography className={styles.price} variant="h6" gutterBottom mt={5}>
                            250.000 Đ
                        </Typography>
                        <Box display="flex" alignItems="center" mt={5}>
                            <Typography className={styles.label} variant="subtitle1" mr={3}>
                                Quantity
                            </Typography>
                            <ButtonGroup className={styles.yellowBorder} variant="outlined" aria-label="outlined button group">
                                <Button className={styles.yellowBorder}>
                                    <RemoveIcon className={styles.colorWhite} />
                                </Button>
                                <Button className={clsx(styles.colorWhite, styles.yellowBorder)}>{quantity}</Button>
                                <Button className={styles.yellowBorder}>
                                    <AddIcon className={styles.colorWhite} />
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <Box mt={7}>
                            <Button className={styles.btnCart} variant="outlined" startIcon={<ShoppingCartIcon />}>
                                Add to cart
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <Typography className={styles.colorWhite} variant="h4" gutterBottom mb={4}>
                        Product Description
                    </Typography>
                    <Box className={styles.boxDescription}>
                        <Typography className={styles.colorWhite} variant="body1" gutterBottom>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                    </Box>
                </Box>
                <Box mt={8}>
                    <Typography className={styles.colorWhite} variant="h4" gutterBottom mb={4}>
                        Product Review
                    </Typography>
                    <Box>
                        {reviewSample.map((item, index) => (
                            <Box mb={5} key={index}>
                                <Box display="flex" alignItems="center" mb={4}>
                                    <Avatar
                                        sx={{ width: 56, height: 56, marginRight: '20px' }}
                                        src={item.image}
                                        alt="Remy Sharp"
                                    />
                                    <Typography className={styles.colorWhite} variant="h5" gutterBottom>
                                        {item.userName}
                                    </Typography>
                                </Box>
                                <Box className={styles.boxDescription}>
                                    <Typography className={styles.colorWhite} variant="body1" gutterBottom>
                                        {item.comment}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                    </Box>
                </Box>
            </Box>
        </Main>
    );
}