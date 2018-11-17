import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.css'

const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
        .map(igKey=>(  <li key={igKey}> 
                            <span style={{textTransform:'capitalize'}} > {igKey}</span>
                            : {props.ingredients[igKey]} 
                        </li>)
        )

    return(
        <Aux>
            <h3> Order Summary</h3>
            <p>Your delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>The current price is : <strong>  $ {props.price.toFixed(2)}</strong></p>
            <p>Want to continue?</p>
            <div className={classes.Buttons}>
                <Button btnType='Danger' clicked={props.canceling}>CANCEL</Button>
                <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
            </div>
        </Aux>
    );
}
export default orderSummary;