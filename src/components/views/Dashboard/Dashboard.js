import React from 'react';
import styles from './Dashboard.module.scss';
import CanvasJSReact from '../../../assets/canvasjs.react';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  title: {
    text: 'Todays selling chart',
  },
  data: [
    {
      type: 'column',
      dataPoints: [
        { label: 'Pizza',  y: 40  },
        { label: 'Cake', y: 15  },
        { label: 'Breakfast', y: 25  },
        { label: 'Salad',  y: 20  },
      ],
    },
  ],
};

const store = [
  {
    id: 1,
    date: '2020-10-01',
    hour: '12:00',
    table: 1,
    duration: 1,
    ppl: 4,
    starters: ['water'],
  },
  {
    id: 2,
    date: '2020-10-01',
    hour: '13:00',
    table: 2,
    duration: 1,
    ppl: 4,
    starters: ['water'],
  },
  {
    id: 3,
    date: '2020-10-01',
    hour: '14:00',
    table: 1,
    duration: 2,
    ppl: 4,
    starters: ['water'],
  },
  {
    id: 4,
    date: '2020-05-25',
    hour: '15:00',
    table: 3,
    repeat: false,
    duration: 2,
    ppl: 3,
    starters: ['water'],
  },
  {
    id: 5,
    date: '2020-05-21',
    hour: '16:00',
    table: 1,
    repeat: true,
    duration: 3,
    ppl: 4,
    starters: ['water'],
  },
];

const Dashboard = () => {
  return (
    <div className={styles.component}>
      <CanvasJSChart options={options} />
      <Paper className={styles.wrapper}>
        <Typography variant='h5' align='center'>
          Today Events and Bookings
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.hour}</TableCell>
                <TableCell>
                  {row.table === 1 ? row.repeat ? 
                    <Button component={Link} variant='contained' color='primary'>Event</Button> 
                    : 
                    <Button component={Link} variant='contained' color='primary'>Booking</Button> 
                    :
                    null
                  }
                </TableCell>
                <TableCell>
                  {row.table === 2 ? row.repeat ? 
                    <Button component={Link} variant='contained' color='primary'>Event</Button> 
                    : 
                    <Button component={Link} variant='contained' color='primary'>Booking</Button> 
                    :
                    null
                  }
                </TableCell>
                <TableCell>
                  {row.table === 3 ? row.repeat ? 
                    <Button component={Link} variant='contained' color='primary'>Event</Button> 
                    : 
                    <Button component={Link} variant='contained' color='primary'>Booking</Button> 
                    :
                    null
                  }
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Dashboard;