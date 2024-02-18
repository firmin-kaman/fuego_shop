import React from 'react' ;
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import OrdersComponent from '../../Components/Pages/Orders/OrderComponent';
// import { Paper } from '@mui/material';
import Paper from '@material-ui/core/Paper';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <Header />
        <Paper elevation={0} style={{ padding: '2px', marginTop: '2px', textAlign: "center",marginBottom: '20px' }}>
            <h1 className="title">My Orders</h1>
        </Paper>
        <OrdersComponent/>
      <Footer />
    </div>
  )
}

export default OrdersPage ;