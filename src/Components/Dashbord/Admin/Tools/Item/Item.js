import { UilHeartAlt,UilShoppingCart} from '@iconscout/react-unicons'
import item1 from './item1.png'
import  './Item.css'
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { addtocart } from '../../../../Redux/Action/action';
import NavBar from '../../../../UI/NavBar/NavBar';

const Item = () => {
    const [love,setlove]=useState(true)

    const [startaddtoitem,setstartaddtoitem]=useState(false)
    const dispatch=useDispatch()
    
    const product=useSelector(state=>state.product)
    const handelstarttoadditem=()=>{
        setstartaddtoitem(true)
        console.log(startaddtoitem);
    }


  

    
    
    return (
        
<div className='Main-Item' id='Main-Item'>
{ 
product.map((item,key)=>(
<div className='Big-Card-Item'key={key}>
              <div className='Card-Item'>

                  <div className='Up-card'>
                      <div className='Imge-Item'>
                              <div className='img-1'>
                                      <img src={item.img}  style={{ width: '150px', height: '130px' }}></img>
                              </div>
                      </div>
                      <div className='Title-Item'>
                          <span>{item.title}</span>
                      </div>
                  </div>

                  <div className='Down-Card'>
                      <div className='Price-Item'>
                          <span>{item.price}<span className='pricebyegy'>.EGB</span></span>
                      </div>
                      <div className='Icon-Item'>
                          <div className='Cart-Item' onClick={()=>{
                            const itemm={
                                title:item.title,
                                price:item.price,
                                statusstock:item.statusstock,
                                main_category:item.main_category,
                                category:item.category,
                                quantity:item.quantity,
                                id_product:item.id_product,
                            }
                             dispatch(addtocart(itemm))
                             handelstarttoadditem()

                          }}><UilShoppingCart /></div>
                          <div className='Fav-Item' onClick={() => { setlove(curr => !curr); } } style={love ? { color: "crimson" } : { color: "white", transition: "0.5s" }}><UilHeartAlt /></div>

                      </div>
                      <div className='stockcard' style={item.statusstock==="InStock" ?{backgroundColor:"green"}:{backgroundColor:"crimson"}}><span>{item.statusstock}</span></div>
                  </div>
              </div>



</div>
))
}
</div>

    );
}
 
export default Item;