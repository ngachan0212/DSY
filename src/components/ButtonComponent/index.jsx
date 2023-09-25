import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent(props) {
  // eslint-disable-next-line
  const { isDisabled = false, handleClick, text, styles } = props;
  return (
    <Button
      className={styles}
      variant="outlined"
      //   disabled= {isDisabled}
      onClick={() => handleClick()}
    >{text}</Button>
  );
}