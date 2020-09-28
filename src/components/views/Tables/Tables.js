import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => {
  const table = [
    {
      id: 1,
      name: 'event',
    },
    {
      id:2,
      name: 'booking',
    },
  ];
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <nav>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
      </nav>
      <div>
        <h3>Tables per 30min</h3>
        { table.map(t => (
          <div key={t.id}>
            <h3>{t.name}</h3>
            {t.name === 'event' 
              ? 
              <Link to={`${process.env.PUBLIC_URL}/tables/events/${t.id}`}>Event detail</Link>
              : 
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/${t.id}`}>Booking details</Link>
            }
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Tables;