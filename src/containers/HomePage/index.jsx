import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, Typography, Tabs, Tab, IconButton } from '@mui/material';
import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CardComponent from '../../components/CardComponent';
import ButtonComponent from '../../components/ButtonComponent';
import FormCreate from './FormCreate';
import clsx from 'clsx';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCreateImage
} from '../../reducers/images';
import {
    fetchCreateProduct
} from '../../reducers/products';
const HomePage = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const imageUrl = useSelector((state) => state.images.data);
    const dispatch = useDispatch();

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handClickAdd = () => {
        setOpenDialog(true);
    }
    const handleUploadImage = async (file) => {
        setSelectedImage(file);
        const dataForm = new FormData();
        dataForm.append('file', file);
        dispatch(fetchCreateImage({params: dataForm}));
    }
    const initialValue = {
        productName: '',
        category: '',
        description: '',
        price: '',
    }
    const [dataInput, setDataInput] = useState(initialValue);
    const handleSubmit = () => {
        const dataForm = {
            ...dataInput,
            image: imageUrl,
        }
        dispatch(fetchCreateProduct({params:dataForm}));
        setDataInput(initialValue);
        setSelectedImage(null);
        setOpenDialog(false);
    }
    const handleOnChange = (event) => {
        setDataInput({
            ...dataInput,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <Box className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ButtonComponent 
                        text={"Create new product"}
                        handleClick={handClickAdd}
                    />
                </Grid>
                <Grid item xs={8}>
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
            <FormCreate 
            dataInput={dataInput}
                handleOnChange={handleOnChange}
                openDialog={openDialog}
                handleCloseDialog={handleCloseDialog}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                handleSubmit={handleSubmit}
                handleUploadImage={handleUploadImage}
            />
        </Box >
    )
}

export default HomePage;