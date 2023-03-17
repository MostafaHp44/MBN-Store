import './PagesOfMotherBoard.css'
import { UilAngleUp,UilAngleDown,UilHeartAlt,UilShoppingCart,UilListUiAlt,UilApps,UilEstate,UilAngleRight} from '@iconscout/react-unicons'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Filter from '../../../../Dashbord/Admin/Tools/Filter/Filter';
import { useDispatch,useSelector } from "react-redux";
import { addtocart } from '../../../../Redux/Action/action';


const Asus = () => {
   const ListGrid=document.getElementById('Main-Item')
   
    const [grid,setgrid]=useState(true)
    const [list,setlist]=useState(true)
    const product=useSelector(state=>state.product)
    const dispatch=useDispatch()



   
 const handellist=()=>{
    setlist(current=>!current)
    ListGrid.style.display="block"
 }
 const handelgrid=()=>{
    setgrid(current=>!current)
    ListGrid.style.display="flex"

 }

    

    return (
<div className='BigShow'>

<div className='Page-Details'>
           <div className='Right-Details'>
          <div className='icon-Right-Details'>
          <Link to="/"> <UilEstate/></Link>
          <UilAngleRight size="20"/>
            </div> 
            <div className='text-Right-Details'><Link to='/motherboard' style={{textDecoration:"none"}}><span>MotherBoard</span></Link></div>  
           </div>
           <div className='Left-Details'>
            <div className='ListItem'><button className='List-Grid' onClick={handellist}><UilListUiAlt /></button></div>
            <div className='GridItem'><button className='List-Grid' onClick={handelgrid}><UilApps/></button></div>
            <div className='searchItem'>  
             <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button></div>
           </div>
</div>
<div className='Page-Content'>
     <Filter/>

      (
<div className='Main-Item' id='Main-Item'>
{ 
product.filter((item)=>(item.typemotherboard==='ASUS')).map((item,key)=>(
<div className='Big-Card-Item'key={key}>
              <div className='Card-Item'>

                  <div className='Up-card'>
                      <div className='Imge-Item'>
                              <div className='img-1'>
                                      <img src={item.img} style={{ width: '150px', height: '100%' }}></img>
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
                                img:item.img
                            }
                             dispatch(addtocart(itemm))

                          }}><UilShoppingCart /></div>
                          <div className='Fav-Item' ><UilHeartAlt /></div>

                      </div>
                      <div className='stockcard' style={item.statusstock==="InStock" ?{backgroundColor:"green"}:{backgroundColor:"crimson"}}><span>{item.statusstock}</span></div>
                  </div>
              </div>



</div>
))


}
</div>

    );
     
</div>
       
</div>
    );
}
 
export default Asus;