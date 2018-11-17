import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'}
]


const buildControls=(props)=>{
    
return(
    <div className={classes.BuildControls}>   
        <p>The current price is : <strong> {props.price.toFixed(2)} </strong></p>
        {
            controls.map(material =>{
                // console.log(disableControl[material.type])
                return (
                
                    <BuildControl 
                            moreClicked ={()=>props.addIngredient(material.type)}
                            lessClicked ={()=>props.removeIngredient(material.type)}
                            key={material.label} label={material.label}
                            disabled={props.disabledInfo[material.type]} />
                 )
            })
        }

        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>
            ORDER NOW
        </button>

    </div>
);
}
export default buildControls;   
