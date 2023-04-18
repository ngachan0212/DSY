import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'

export default function CardComponent(props) {
    const {data} = props;
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={data.image}
                title="green iguana"
            />
            <CardContent sx={{textAlign: 'center'}}>
                <Typography className={styles.yellowColor}>
                   {data.productName}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={styles.yellowColor} sx={{ fontWeight: 'bold' }}>
                    {data.price} $
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}