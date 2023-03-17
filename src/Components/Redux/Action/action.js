import { ADD_ITEM, ADD_TOCART,FAV_ITEM,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_Quantity,UPDATE_CART} from "./actontype"; 


export const favproduct=()=>{
    return{
        type:FAV_ITEM,
    
    }
}
export const addtocart=(payload)=>{
    return{
        type:ADD_TOCART,
        payload
        
    }
}
export const additem=(payload)=>{
    return{
        type:ADD_ITEM,
        payload
       

    }
}
export function UpdateItem(payload){
    return {
        type:UPDATE_CART,
        payload
    }
}


export function DeleteQuantity(payload){
    return{
        type:DELETE_Quantity,
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type:INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:DECREASE_QUANTITY,
        payload
    }
}
