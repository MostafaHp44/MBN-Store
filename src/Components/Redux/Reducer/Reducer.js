import { ADD_TOCART,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_Quantity, ADD_ITEM, FAV_ITEM} from "../Action/actontype";
import img1 from './img/item1.png'
import pcs1 from './img/pcas1.png'
import pcs11 from './img/pcas1-1.png'
 export const initProduct = {

    numberCart:0,
    favitem:0,
    Carts:[],
    WishList:[],
    product:[
        {
            title:"Giga byte H410M H V2",
            price:3000,
            statusstock:"InStock",
            main_category:"PC",
            category:"MotherBoard",
            typemotherboard:"GIGABYTE",
            img:img1,
            quantity:1,
            id_product:'22',
       },

       {
        title:"ASUS Byte H110-D",
        price:2020,
        statusstock:"InStock",
        main_category:"PC",
        category:"MotherBoard",
        typemotherboard:"ASUS",
        img:img1,
        quantity:1,
        id_product:'23',
       },
       {
        title:"MSI byte H410M H V2",
        price:3000,
        statusstock:"InStock",
        main_category:"PC",
        category:"MotherBoard",
        typemotherboard:"MSI",
        img:img1,
        quantity:1,
        id_product:'24',
   },
   {
    title:"MASTERBOX TD500 MESH V2",
    price:1300,
    statusstock:"InStock",
    main_category:"PC",
    category:"Cases",
    img:pcs1,
    imgone:pcs11,
    quantity:1,
    id_product:'276',
},
    

],
    
}


const Reducer =( state=initProduct ,action )=>{
    switch(action.type)
    {
       case(ADD_TOCART) :
       {
        if(state.numberCart=== 0){
            let cart = {
                id_product:action.payload.id_product,
                quantity:1,
                title:action.payload.title,
                img:action.payload.img,
                price:action.payload.price,
                statusstock:action.payload.statusstock,
                main_category:action.payload.main_category,
                category:action.payload.category,
            } 
            state.Carts.push(cart); 
        }
        else{
            let check = false;
            state.Carts.map((item,key)=>{
                if(item.id_product===action.payload.id_product){
                    state.Carts[key].quantity++;
                    check=true;
                }
            });
            if(!check){
                let _cart = {
                    id_product:action.payload.id_product,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    statusstock:action.payload.statusstock,
                    main_category:action.payload.main_category,
                    category:action.payload.category,
                }
                state.Carts.push(_cart);
            }
        }
        return{
            ...state,
            numberCart:state.numberCart+1
        }
           } 

           case(FAV_ITEM) :
       {
        if(state.favitem=== 0){
            let wishlist = {
                id_product:action.payload.id_product,
                quantity:1,
                title:action.payload.title,
                img:action.payload.img,
                price:action.payload.price,
                statusstock:action.payload.statusstock,
                main_category:action.payload.main_category,
                category:action.payload.category,
            } 
            state.WishList.push(wishlist); 
        }
        else{
            let check = false;
            state.WishList.map((item,key)=>{
                if(item.id_product===action.payload.id_product){
                    state.WishList[key].quantity++;
                    check=true;
                }
            });
            if(!check){
                let wish_list = {
                    id_product:action.payload.id_product,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    statusstock:action.payload.statusstock,
                    main_category:action.payload.main_category,
                    category:action.payload.category,
                }
                state.WishList.push(wish_list);
            }
        }
        return{
            ...state,
            favitem:state.favitem+1
        }
           }   


        case(INCREASE_QUANTITY):
        {
            state.numberCart++
            state.Carts[action.payload].quantity++;
          
           return {
                     ...state,
                     
                  }
        }
            
           
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
          
            return{
                ...state
            }

        case DELETE_Quantity:
            let quantity_ = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id_product!==state.Carts[action.payload].id_product
                })
               
            }    
        case(ADD_ITEM):
            {
                return{
                    ...state,product:[...state.product, action.payload]
                }
            }
        
         
         default:
      return state;
    }

}

 
export default Reducer;