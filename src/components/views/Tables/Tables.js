import React from 'react';
import styles from './Tables.module.scss';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

const hour = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

const marks = [
  {
    value: 12,
    label: '12:00',
  },
  {
    value: 13,
    label: '13:00',
  },
  {
    value: 14,
    label: '14:00',
  },
  {
    value: 15,
    label: '15:00',
  },
  {
    value: 16,
    label: '16:00',
  },
  {
    value: 17,
    label: '17:00',
  },
  {
    value: 18,
    label: '18:00',
  },
  {
    value: 19,
    label: '19:00',
  },
  {
    value: 20,
    label: '20:00',
  },
  {
    value: 21,
    label: '21:00',
  },
  {
    value: 22,
    label: '22:00',
  },
  {
    value: 23,
    label: '23:00',
  },

];

const numberToHour = function(number){
  return (Math.floor(number) % 24) + ':' + (number % 1 * 60 + '').padStart(2, '0');
};


const filterStore = (time) => {
  const data = store.filter(s => s.hour === numberToHour(time));
  console.log(data);
  return data.length ? data[0].table : null;
};

const Tables = () => {
  return (
    <Paper className={styles.component}>
      <Grid container>
        <Grid item xs={12} md={4} className={styles.gridContainer}>
          <Typography id="date" gutterBottom className={styles.typo}>
            Pick a Date
          </Typography>
          <TextField
            id="date"
            aria-labelledby="date"
            type="date"
            defaultValue="2020-10-01"
          />
        </Grid>
        <Grid item xs={12} md={8} className={styles.gridContainer}>
          <Typography id="track-false-slider" gutterBottom className={styles.typo}>
            Pick an Hour
          </Typography>
          <Slider
            track={false}
            aria-labelledby="track-false-slider"
            //getAriaValueText={valuetext}
            defaultValue={12}
            marks={marks}
            min={12}
            max={23}
            step={1}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
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
          {hour.map(h => (
            <TableRow key={h}>
              <TableCell>{numberToHour(h)}</TableCell>
              <TableCell>{filterStore(h) === 1 ? <Button>Event/Booked</Button> : 'Free'}</TableCell>
              <TableCell>{filterStore(h) === 2 ? <Button>Event/Booked</Button> : 'Free'}</TableCell>
              <TableCell>{filterStore(h) === 3 ? <Button>Event/Booked</Button> : 'Free'}</TableCell>
            </TableRow>           
          ))}
        </TableBody>
      </Table>    
    </Paper>
  );
};

export default Tables;
