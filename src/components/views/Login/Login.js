import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';

const Login = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant='h6' align='center'>Please Login in</Typography>
      <Paper>
        <Grid container spacing={2} className={styles.wrapper}>
          <Grid item className={styles.textField}>
            <AccountBoxRoundedIcon fontSize='large'/>
            <TextField
              required
              id="outlined-required"
              label="Login"
              defaultValue="Hello"
              variant="outlined"
            />
          </Grid>
          <Grid item className={styles.textField}>
            <LockOpenRoundedIcon fontSize='large'/>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button component={Link} variant='contained' color='primary' to={`${process.env.PUBLIC_URL}/dashboard`}>Log In</Button>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default Login;