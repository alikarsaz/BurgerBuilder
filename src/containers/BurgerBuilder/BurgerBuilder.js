import React, { Component } from 'react'
import Hoc from '../../hoc/hoc'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES={
        salad:0.50,
        bacon:0.70,
        meat:1.30,
        cheese:0.40,
}

class BurgerBuilder extends Component{
    state={
        ingredients:
        {
            salad:1,
            meat:1,
            cheese:0,
            bacon:0
        },
        totalPrice:5.30,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(response=>{
        //         this.setState({ingredients:response.data})
        //         // console.log('Have Done')
        //     })
        //     .catch(error=>{this.setState({error:true})});

    }

    purchaseCancelHandler=() => {
        // console.log('clicekd');
        this.setState({purchasing: false})
    }

    purchaseContinueHandler=()=>{
        console.log(this.props);
       
        // alert('Done')
        this.setState({loading:true})
      

        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'Ali',
                address:{
                    street:'Ashrafi Esfahani',
                    zipCode:'14188'
                },
                email:'Ali@danatechsun.com',

            },
            deliveryMethod:'fastest'
        }

            // axios.post('/orders.json',order)
            //     .then(response=>{
            //         // console.log(response)
            //         this.setState({purchasing:false,loading:false})
            //     })
            //     .catch(error=>{
            //         // console.log(error)
            //         this.setState({loading:false,purchasing:false})
            //     })

                this.props.history.push('/Checkout')

    }

    purchaseHandler=()=>{
        this.setState({purchasing:true,wentWrong:false})
        
    }

    updatePurchaseState=(ingredients)=>{
        
        let sum=Object.keys(ingredients)
            .map((igKey)=>{
                return ingredients[igKey]
            }).reduce((sum,el)=>{return sum+el},0)
        this.setState({purchasable: sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=newCount;
        
        const oldPrice=this.state.totalPrice;
        const priceAddition=INGREDIENT_PRICES[type];
        const newPrice=oldPrice+priceAddition;
        // console.log(type)

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount=this.state.ingredients[type];
        if (oldCount<=0) return
        let  newCount=oldCount-1;       
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=newCount;
        
        const oldPrice=this.state.totalPrice;
        const pricededuction=INGREDIENT_PRICES[type];
        let newPrice=oldPrice-pricededuction;
        
        // console.log(type)

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);
    }
   
   
    render(){
        
        let disabledInfo={...this.state.ingredients}
        for (let key in disabledInfo ){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        let burger= this.state.error ? <p style={{textAlign:'center'}}>The ingredients cannot be loaded</p> : <Spinner/>
       
        let orderSummary=null;
        if (this.state.ingredients){
            burger=
                <Hoc>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        addIngredient={(type)=>this.addIngredientHandler(type)} 
                        removeIngredient={(type)=>this.removeIngredientHandler(type)}
                        disabledInfo={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}/>
                </Hoc>;
                orderSummary= <OrderSummary ingredients={this.state.ingredients} 
                                canceling={this.purchaseCancelHandler}
                                continue={this.purchaseContinueHandler}
                                price={this.state.totalPrice}/>;
    
        }

        
        if (this.state.loading){
            orderSummary=<Spinner/>
        }


        return(
            <Hoc>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Hoc>
        );

    }
}
export default withErrorHandler(BurgerBuilder,axios);