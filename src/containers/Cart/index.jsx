import * as React from 'react';
import Main from '../../pages/Main';
import { Box, Grid, Typography, ButtonGroup, Button, Avatar   } from '@mui/material';
import {useState} from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import TableComponent from '../../components/TableComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components'


export default function DetailProduct(props) {
    const [quantity, setQuantity] = useState(1);
    const Styles = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    thead {
        background-color: #3C6255;
        color: #fff;
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      text-align: center;
      font-size: 1.4em;
      :first-child {
        text-align: center;
      }
      :last-child {
        border-right: 0;
      }
    }
  }
`
const columns = React.useMemo( () => [
    {
        Header: 'Product',
        accessor: 'productName',
        colorText: '#fff',
      },
      {
        Header: 'Category',
        accessor: 'category',
        colorText: '#fff',
      },
      {
        Header: 'Price',
        accessor: 'price',
        colorText: '#fff',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        colorText: '#fff',
      },
      {
        Header: 'Action',
        accessor: 'action',
        colorText: '#fff',
        Cell: (value) => {
            return (
            <React.Fragment style={{textAlign: 'center'}}>
                <Button>
                    <DeleteIcon className={styles.colorWhite}/>
                </Button>
            </React.Fragment>)
        }
      },
] )
const data = [
    {
        productName: "12",
        category: "visits",
        price: "status",
        quantity: "progress",
        action: "progress",
    },
    {
        productName: "12",
        category: "visits",
        price: "status",
        quantity: "progress",
        action: "progress",
    },
    {
        productName: "12",
        category: "visits",
        price: "status",
        quantity: "progress",
        action: "progress",
    },
]
    return (
        <Main>
             <Typography class={styles.title} variant="h3" gutterBottom>
                YOUR CART
             </Typography>
             <Styles>
                 <TableComponent columns={columns} data={data}/>
             </Styles>
             <Typography class={styles.colorWhite} variant="h3" gutterBottom>
                TOTAL PRICE: 200.000.00 Đ
             </Typography>
             <Box textAlign="right" mr={3} mt={4}>
                <Button variant="contained" className={styles.btnPurchase}>Purchase</Button>
             </Box>
        </Main>
    );
}