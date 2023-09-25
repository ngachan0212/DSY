import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './styles.module.css'
import { Grid, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footers(props) {
    const { children, value, index, ...other } = props;
    return (

        <Box className={styles.containerFooter}>
            <p>
                2018 @ <strong>Admire</strong> All Right Reserved
            </p>
        </Box >

    )
}
