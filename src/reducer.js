export const initialState={
    basket: [ ],
    user:null
};  
export const getbaskettotal =(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);


function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'ADD_THE_DISH':
            //logic to add items to basket
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            //logic
            let newbasket = [...state.basket];
            const index= state.basket.findIndex((basketitems)=>basketitems.id === action.id);
            if(index>=0){
                //item is in basket.remove it
                newbasket.splice(index,1)
            }else{
                console.warn(
                    'cant remove '
                )
            }
            return{...state,
                basket:newbasket}
            break;
        default:
            return state;        
    }
}

export default reducer;