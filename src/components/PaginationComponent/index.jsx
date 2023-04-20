import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './styles.module.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiButtonBase-root': {
      color: '#EAE7B1 !important',
    },
    '& .MuiPaginationItem-root': {
      color: '#EAE7B1 !important',
    }
  },
});
export default function PaginationComponent(props) {
  const {pagination} = props;
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination className={classes.root} count={pagination.pageCount} defaultPage={pagination.currentPage} shape="rounded" />
    </Stack>
  );
}