import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger=(props)=>{
  
    //BURGER MAKER!!!
    let transformedIngredients=Object.keys(props.ingredients)
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])].map((el,i)=>{
                return <BurgerIngredient type={igKey} key={igKey+i}/>
            })
        }).reduce((Ar,El)=>{return Ar.concat(El)},[]);
      
        if (transformedIngredients.length===0) transformedIngredients=<p>Please start adding ingredients!</p>


       
        //DOING IT MY WAY
        // const isEmpty= Object.keys(props.ingredients).findIndex(igKey=>( props.ingredients[igKey]!==0));
        // console.log(isEmpty);
        // if (isEmpty===-1) transformedIngredients=<p>Please start adding ingredients!</p>

        

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>    
    )
}
export default burger;


