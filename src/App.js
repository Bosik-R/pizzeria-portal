import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
//import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
//import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
//import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f' },
    //secondary: { main: '#11cb5f' },
  },
});

export const routes = [
  {
    path: '/',
    component: Login, 
  },
  {
    path: '/login',
    component: Login, 
  },
  {
    path: '/dashboard',
    component: Dashboard, 
  },
  {
    path: '/kitchen',
    component: Kitchen, 
  },
  {
    path: '/tables',
    component: Tables, 
  },
  {
    path: '/tables/booking/:id',
    component: TablesBooking, 
  },
  {
    path: '/tables/events/:id',
    component: TablesEvent, 
  },
  {
    path: '/waiter',
    component: Waiter, 
  },
  {
    path: '/waiter/order/:id',
    component: WaiterOrder, 
  },
];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                {routes.map(route => (
                  <Route key={route.path} exact path={`${process.env.PUBLIC_URL}${route.path}`} component={route.component} />
                ))}      
              </Switch>
            </MainLayout>
          </ ThemeProvider>
        </StylesProvider>
      </BrowserRouter>  
    </Provider>
  );
}

export default App;
