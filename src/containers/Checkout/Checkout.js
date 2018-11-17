import React , {Component } from 'react'
import Hoc from '../../hoc/hoc'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Checkout.css'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'


class Checkout extends Component {
    
    state={
        showSideDrawer:false,
        ingredients:{
            salad:1,
            bacon:1,
            meat:1,
            cheese:1
        },
        price:4.00
    }

    
    render () {


        return(

            <div className={classes.Checkout}>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}
export default Checkout;