import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
    }),
    updateTables: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }
  
  renderActions(id, status){
    switch (status) {
      case 'free':
        return (
          <Grid container spacing={1}>
            <Grid item>
              <Button onClick={() => this.props.updateTables(id, 'thinking')} variant='contained' color='primary'>thinking</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => this.props.updateTables(id, 'ordered')} variant='contained' color='primary'>new order</Button>
            </Grid>
          </Grid>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.props.updateTables(id, 'ordered')} variant='contained' color='primary'>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.props.updateTables(id, 'prepared')} variant='contained' color='primary'>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.props.updateTables(id, 'delivered')} variant='contained' color='primary'>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.props.updateTables(id, 'paid')} variant='contained' color='primary'>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.props.updateTables(id, 'free')} variant='contained' color='primary'>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
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
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
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
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
