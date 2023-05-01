import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { convertFormatMoney } from '../../services/common.jsx';
import { Link } from "react-router-dom";
export default function CardComponent(props) {
    const { data, handleDeleteProduct } = props;
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={data.image}
                title="green iguana"
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography className={styles.yellowColor}>
                    {data.productName}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={styles.yellowColor} sx={{ fontWeight: 'bold' }}>
                    {convertFormatMoney(data.price)} $
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={`/product/info/${data?._id}`}>
                    <Button className={styles.yellowBtn} size="small"><VisibilityIcon /></Button>
                </Link>
                <Button
                    onClick={() => handleDeleteProduct(data?._id)}
                    className={styles.yellowBtn} size="small"><DeleteIcon /></Button>
            </CardActions>
        </Card>
    );
}