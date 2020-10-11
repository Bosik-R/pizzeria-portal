import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const demoContent = [
  {table: '1', status: 'free', order: null},
  {table: '2', status: 'thinking', order: null},
  {table: '3', status: 'ordered', order: 123},
  {table: '4', status: 'prepared', order: 234},
  {table: '5', status: 'delivered', order: 345},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <Grid container spacing={1}>
          <Grid item>
            <Button variant='contained' color='primary'>thinking</Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>new order</Button>
          </Grid>
        </Grid>
      );
    case 'thinking':
      return (
        <Button variant='contained' color='primary'>new order</Button>
      );
    case 'ordered':
      return (
        <Button variant='contained' color='primary'>prepared</Button>
      );
    case 'prepared':
      return (
        <Button variant='contained' color='primary'>delivered</Button>
      );
    case 'delivered':
      return (
        <Button variant='contained' color='primary'>paid</Button>
      );
    case 'paid':
      return (
        <Button variant='contained' color='primary'>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;
