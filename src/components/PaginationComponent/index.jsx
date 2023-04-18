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
export default function PaginationComponent() {
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination className={classes.root} count={10} shape="rounded" />
    </Stack>
  );
}