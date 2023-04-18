import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid, Typography, Tabs, Tab, IconButton } from '@mui/material';
import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ButtonComponent from '../../components/ButtonComponent';
import ProductComponent from '../../components/ProductComponent';
import PaginationComponent from '../../components/PaginationComponent/index.jsx';
import FormCreate from './FormCreate';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import clsx from 'clsx';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCreateImage
} from '../../reducers/images';
import {
    fetchCreateProduct
} from '../../reducers/products';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        '& .MuiFormLabel-root': {
        color: '#EAE7B1 !important',
    },
        '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
            borderBottom: '1px solid #EAE7B1 !important',
        },
        '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
            borderBottom: '1px solid #EAE7B1 !important',
        }
},
    iconSelect: {
        '& .MuiSvgIcon-root': {
            color: '#EAE7B1 !important',
        },
        '& .MuiInputBase-root': {
            '&:before': {
                borderBottom: '1px solid #EAE7B1 !important',
            },
        },
        '& .css-qaihwf-MuiInputBase-root-MuiInput-root-MuiSelect-root:before': {
            borderBottom: '1px solid #EAE7B1 !important',
        }
    }
});
const HomePage = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const imageUrl = useSelector((state) => state.images.data);
    const dispatch = useDispatch();
    const classes = useStyles();

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
                <Grid item xs={8} >
                <Box sx={{marginBottom: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <InputLabel  id="demo-simple-select-label" sx={{paddingRight:'20px', color:"#EAE7B1"}}>Category: </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={dataInput.category}
                        label="Age"
                        variant="standard"
                        sx={{minWidth: "100px", color:"#EAE7B1"}}
                        name="category"
                        onChange={(event)=>handleOnChange(event)}
                        required
                        className={clsx(classes.iconSelect,styles.categoryText)}
                    >
                    <MenuItem value={"Cosmetic"}>Cosmetic</MenuItem>
                    <MenuItem value={"Lipstick"}>Lipstick</MenuItem>
                    <MenuItem value={"Makeup"}>Makeup</MenuItem>
                    </Select>
                </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: '#EAE7B1', mr: 1, my: 0.5 }} />
                        <TextField
                            className={classes.root}
                            sx={{ color: '#EAE7B1' }}
                            id="input-with-sx" label="Search"
                            inputProps={{ style: { color: "#EAE7B1" } }}
                            variant="standard" />
                    </Box>
                </Grid>
            </Grid>
            <ProductComponent/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "50px"}}>
                <PaginationComponent/>
            </Box>
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