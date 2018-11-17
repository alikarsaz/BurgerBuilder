import React from 'react'
import classes from './NavItem.css'
import {NavLink} from 'react-router-dom'

const navItem=(props)=>(
    <li className={classes.NavItem}>
        {/* <a href={props.link} className={ props.active ? classes.active : null } >
            {props.children}
        </a> */}
        <NavLink to={props.link} activeClassName={classes.active} >{props.children}</NavLink>


    </li>
);

export default navItem;