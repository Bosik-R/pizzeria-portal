import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/11`}>edit order</Link>
    </div>
  );
};

export default Waiter;