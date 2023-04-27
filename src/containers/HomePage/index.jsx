import React, { useEffect, useState, useRef } from 'react'
import { Box, Grid } from '@mui/material';
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
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCreateImage
} from '../../reducers/images';
import {
    fetchCreateProduct, fetchListProduct
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
const initialFilters = {
    search: '',
    category: 'All',
    page: 1,
}
const HomePage = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const imageUrl = useSelector((state) => state.images.data);
    const productList = useSelector((state) => state.products.dataList);
    // const productList = [{
    //     productName: "productName",
    //     price: 20000,
    //     _id: 1,
    //     image: "data:image/png;base64,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"
    // }];
    const pagination = useSelector((state) => state.products.pagination);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [filters, setFilters] = useState(initialFilters);
    useEffect(() => {
        console.log(filters, 'filters')
        dispatch(fetchListProduct({
            params: filters,
        }));
    }, [filters])

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
        dispatch(fetchCreateImage({ params: dataForm }));
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
        dispatch(fetchCreateProduct({ params: dataForm }));
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
    const handleFilter = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        })
    }
    const handlePagination = (event, value) => {
        setFilters({
            ...filters,
            page: value,
        })
    }
    return (
        <Box className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ButtonComponent
                        styles={styles.yellowBtn}
                        text={"Create new product"}
                        handleClick={handClickAdd}
                    />
                </Grid>
                <Grid item xs={8} >
                    <Box sx={{ marginBottom: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <InputLabel id="demo-simple-select-label" sx={{ paddingRight: '20px', color: "#EAE7B1" }}>Category: </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={filters.category}
                            label="Age"
                            variant="standard"
                            sx={{ minWidth: "100px", color: "#EAE7B1" }}
                            name="category"
                            onChange={(event) => handleFilter(event)}
                            required
                            className={clsx(classes.iconSelect, styles.categoryText)}
                        >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Health and Beauty"}>Health and Beauty</MenuItem>
                            <MenuItem value={"Housewares"}>Housewares</MenuItem>
                            <MenuItem value={"Personal Care"}>Personal Care</MenuItem>
                            <MenuItem value={"Baby Care"}>Baby Care</MenuItem>
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
                            variant="standard"
                            value={filters.search}
                            name="search"
                            onChange={(event) => handleFilter(event)}
                        />
                    </Box>
                </Grid>
            </Grid>
            <ProductComponent productList={productList} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "50px" }}>
                <PaginationComponent pagination={pagination} handlePagination={handlePagination} />
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