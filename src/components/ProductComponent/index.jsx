import * as React from 'react';
import CardComponent from '../../components/CardComponent';
import { Box, Grid, Typography, Tabs, Tab, IconButton } from '@mui/material';
import clsx from 'clsx';
import styles from './styles.module.css'

export default function ProductComponent(props) {
//   const {} = props;

  const dataSample = [ 
    {
        "id": 1,
        "productName": "test",
        "category": "cosmetics",
        "description": "description",
        "price": "300000",
        "image": "http://localhost:5000/file/image/1681313191034-charging.jpg"
    },
    {
        "id": 2,
        "productName": "test2",
        "category": "cosmetics",
        "description": "description",
        "price": "300000",
        "image": "http://localhost:5000/file/image/1681313191034-charging.jpg"
    },
  ]
  return (
    <Grid container spacing={2} sx={{ mt:3, mb: 4 }}>
        <Grid item xs={12}>
            <Typography className={clsx(styles.yellowText, styles.categoryText)} variant="h6" gutterBottom>
                Best Seller
            </Typography>
            </Grid>
            {dataSample.map(item => (
                 <Grid item xs={4}>
                    <CardComponent data={item}/>
                </Grid>
            ))}
    </Grid>
  );
}