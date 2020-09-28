import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {/* Mainview */}
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/Dashboard`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          
          {/* Subview */}
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBooking} />
      
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEvent} />
      
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
      
        </Switch>
      </MainLayout>
    </BrowserRouter>  
  );
}

export default App;
