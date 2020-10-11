import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {order: 123, table: '3', status: 'ordered' , products:[
    {id: 'cake', amount: 2},
  ]},
  {order: 124, table: '4', status: 'prepared', products: [
    {
      id: 'breakfast',
      amount: 1,
      params:[
        {
          label: 'Coffee',
          options: ['Latte'],
        },
      ],
    },
    {
      id: 'breakfast',
      label: 'Coffee',
      amount: 1,
      options: ['Cappuccino'],
    },
  ]},
  {order: 130, delivery: '122', status: 'ordered', 
    products: [
      {
        id: 'pizza',
        amount: 1,
        params:[ 
          {
            label: 'Sauce',
            options: ['Tomato'],
          },
          {
            label: 'Toppings',
            options: ['Olives', 'Red peppers', 'Green peppers', 'Mushrooms', 'Fresh basil'],
          },
          {
            label: 'pizza crust',
            options: ['standard'],
          },
        ],
      },
    ],
  },
  {order: 150, delivery: '123', status: 'ordered',
    products: [
      {
        id: 'pizza',
        amount: 2,
        params:[ 
          {
            label: 'Sauce',
            options: ['Tomato'],
          },
          {
            label: 'Toppings',
            options: ['Mushrooms', 'Fresh basil', 'Salami'],
          },
          {
            label: 'pizza crust',
            options: ['thin'],
          },
        ], 
      },
    ],
  },
];

const renderAction = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    default:
      return null;
  }
};

const tableHead = ['Order Number', 'Status', 'Table/Delivery Number', 'Action', 'Products'];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableHead.map(head => (
              <TableCell key={head} className={styles.tableCellHead} align="center">{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.order}>
              <TableCell align="center" className={styles.tableCellHead}>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                {row.status}
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                {row.table || row.delivery}
              </TableCell>
              <TableCell align="center" className={styles.tableCellHead}>
                {renderAction(row.status)}
              </TableCell>
              <TableCell className={styles.tableCellHead}>
                {row.products.map(product => (
                  <TableRow key={product.id} className={styles.tableCellHead}>
                    <TableCell>
                      {product.id}
                    </TableCell>
                    <TableCell>
                      {product.amount}
                    </TableCell>
                    {product.params 
                      ?
                      product.params.map(param => (
                        <TableRow key={param.label}>
                          <TableCell align="right">
                            {param.label} :
                          </TableCell>
                          {param.options.map(opt => 
                            <TableCell key={opt}>
                              {opt}
                            </TableCell>
                          )} 
                        </TableRow>
                      ))
                      : null
                    }
                  </TableRow>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;