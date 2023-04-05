import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'

export default function CardComponent() {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                title="green iguana"
            />
            <CardContent>
                <Typography className={styles.yellowColor}>
                    Redfill Foaming...
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={styles.yellowColor} sx={{ fontWeight: 'bold' }}>
                    250.000 Đ
                </Typography>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
    );
}