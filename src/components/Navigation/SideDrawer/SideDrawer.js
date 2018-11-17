import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavItems from '../NavItems/NavItems'
import Hoc from '../../../hoc/hoc'
const sideDrawer =(props) => {
    
    return(
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div 
                className= {props.open ? [classes.SideDrawer,classes.Open].join(' ') : [classes.SideDrawer,classes.Close].join(' ') }> 
                <div className={classes.Logo}>
                <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Hoc>

    );
}

export default sideDrawer;
