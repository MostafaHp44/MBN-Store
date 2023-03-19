import './NavBar.css'
import logo from './logopage/logo.png'
import { Link, } from 'react-router-dom';
import { Link as Link1 } from "react-scroll";

import { UilDesktop,UilLaptop,UilMobileAndroid,UilUserSquare,UilShoppingCartAlt,UilAngleRightB,UilTrashAlt,UilShoppingCart} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import{IncreaseQuantity,DecreaseQuantity, DeleteQuantity} from '../../Redux/Action/action'
import { useSelector,useDispatch} from "react-redux";
import Badge from 'react-bootstrap/Badge';

const NavBar = (props) => {

const numberCart=useSelector((state)=>state.numberCart)
const favitem=useSelector((state)=>state.favitem)

const Carts=useSelector((state)=>state.Carts)

const [opencart,setopencart]=useState(false)

const dispatch=useDispatch();


const handelprice=(price,item)=>{
    return Number(price * item).toLocaleString('en-US');
}


    return (
        <div className='Main-Nav'>
    <div className='Nav'>
        <div className='Left-Nav'>
            <div className='logopage'>
                <Link to="/" ><img src={logo} className="logo"></img></Link>
            </div>
        </div>
        <div className='Center-Nav'>
            <nav className='Big-Nav'>
                <ul className='listnav'>
                  <li className='PC'> <span><UilDesktop/></span>PC 
                    <div className='BigCardOfCategory'>
        <div className='maincol'>
        <div className='col--1'>
    <h2> TopNew</h2>
    <img></img>
</div>
<div className='col--2'>
    <h2>Categories</h2>

    <ul className='category'>
        <li className='category1'><Link to="/motherboard"style={{textDecoration:"none"}}>MotherBoard</Link></li>
        <li className='category1'><Link to="/ram" style={{textDecoration:"none"}}>Ram</Link></li>
        <li className='category1'><Link to="/processor" style={{textDecoration:"none"}}>Processor</Link></li>
        <li className='category1'><Link to="/cases" style={{textDecoration:"none"}}>Cases</Link></li>
        <li className='category1'><Link to="/powersupply" style={{textDecoration:"none"}}>PowerSupply</Link></li>
    </ul>
</div>
<div className='col--3'>
    <h2>Best Seller</h2>
</div>
        </div>

                    </div>
                  </li> 
                  <li className='Laptop'> <span><UilLaptop/></span>LapTop
                  <div className='BigCardOfCategory'>
        <div className='maincol'>
        <div className='col--1'>
    <h2> TopNew</h2>
    <img></img>
</div>
<div className='col--2'>
    <h2>Categories</h2>

    <ul className='category'>
        <li className='category1'><Link to="/dell"style={{textDecoration:"none"}}>Dell</Link></li>
        <li className='category1'><Link to="/msi" style={{textDecoration:"none"}}>MSI</Link></li>
        <li className='category1'><Link to="/lenovo" style={{textDecoration:"none"}}>Lenovo</Link></li>
        <li className='category1'><Link to="/asus" style={{textDecoration:"none"}}>ASUS</Link></li>
        <li className='category1'><Link to="/hp" style={{textDecoration:"none"}}>HP</Link></li>
    </ul>
</div>
<div className='col--3'>
    <h2>Best Seller</h2>
</div>
        </div>

                    </div>
              
                  </li> 
                  <li className='Phone'> <span><UilMobileAndroid/></span>Phone

                  <div className='BigCardOfCategory'>
        <div className='maincol'>
        <div className='col--1'>
    <h2> TopNew</h2>
    <img></img>
</div>
<div className='col--2'>
    <h2>Categories</h2>

    <ul className='category'>
        <li className='category1'><Link to="/oppo"style={{textDecoration:"none"}}>OPPO</Link></li>
        <li className='category1'><Link to="/samsung" style={{textDecoration:"none"}}>Samsung</Link></li>
        <li className='category1'><Link to="/huawei" style={{textDecoration:"none"}}>Huawei</Link></li>
        <li className='category1'><Link to="/xiaomi" style={{textDecoration:"none"}}>Xiaomi</Link></li>
        <li className='category1'><Link to="/infnix" style={{textDecoration:"none"}}>Infnix</Link></li>
    </ul>
</div>
<div className='col--3'>
    <h2>Best Seller</h2>
</div>
        </div>

                    </div>
                  </li>
                    
                </ul>
            </nav>
        </div>
        <div className='Right-Nav'>
            <div className='Icon-signandLogin'>
                <UilUserSquare size="30" className="icon"/>
                <div className='SignUp-SignIn'>
                    <div className='Main-SignUp-SignIn'>
                        <div className='row--1'>
                            <div className='text-row--1'>
                            <h1 style={{fontWeight:"900",fontSize:"25px",color:"whitesmoke"}}>Welcome to MBN-Store</h1>
                            <p style={{color:"white"}}>Sign in to enjoy a personalized experience and collect redeemable points 🔥</p>

                            </div>
                            <div className='btn-row--1'>
                           <Link to="/login"><Button variant="primary">SignIn</Button>{' '}</Link>
                           <Link to="/signup"><Button variant="outline-primary">SignUp</Button>{' '}</Link> 


                            </div>
                        </div>
                      <Link to="/wishlist" style={{textDecoration:"none"}}>
                       <div className='row--2'>
                            <div className='text-row--2'>
                            <h2 style={{fontWeight:"900",fontSize:"25px",color:"whitesmoke"}}>FavItem</h2>
                            <span style={{fontWeight:"900",fontSize:"20px",color:"crimson"}}>Watch Your FavItem</span> <Badge pill bg="primary">{favitem}</Badge>{' '}

                            </div>
                            <div className='icon-row--2'>
                                <UilAngleRightB/>
                            </div>
                        </div>
                     </Link>

                        <div className='row--3'>
                        <div className='text-row--3' style={{textAlign:"left"}}>
                            <h2 style={{fontWeight:"900",fontSize:"25px",color:"whitesmoke"}}>Refer Your Friend</h2>
                            <p style={{color:"white", fontSize:"13px"}}>Tell your friends about Chubbies and <span style={{color:"green" ,fontWeight:"800", fontSize:"15px"}}>get EGP‌355.00!</span> </p>
                        </div>
                        </div>
                    </div>
                </div>

                
                </div>
            <div className='Icon-Cart' >
              <UilShoppingCartAlt size="30" className="cart"/>
              <span className='numitem'>{numberCart}</span>
<div className='Main-ShopingCartCard' style={{color:"wh"}}>

{
Carts.map((item,key)=>(

    <div className='Mainrow' key={key}>
        

        <div className='imgitem'>
            <img style={{width:"30px",height:"30px"}} src={item.img}></img>
        </div>
        <div className='titleitem'>
            <span>{item.title}</span>
        </div>
        <div className='priceitem'>
        <span>{item.price}<span  style={{color:"green"}}>.EGP</span></span>
        </div>
        <div className='quantityitem'>

        <Button variant="success" onClick={()=>{dispatch(IncreaseQuantity(key))}}>+</Button>{' '}
        <Badge pill bg="primary">{item.quantity}</Badge>{' '}
        <Button variant="warning" onClick={()=>{dispatch(DecreaseQuantity(key))}}>-</Button>{' '}
        </div>
        <div className='priciotem'>  
          <Badge pill bg="info">{handelprice(item.price,item.quantity)}$</Badge>{' '}
        </div>
        <div className='deleteitem' onClick={()=>{dispatch(DeleteQuantity(key))}} style={{cursor:"pointer"}}>
            <UilTrashAlt/>
        </div>
    </div>
    
))
}

{numberCart===0?
   <div className='totalprice' >
   <span> Your Cart Is Empty </span><UilShoppingCart size='50'/>
   <Link1 to='MainStartShopping' spy={true} smooth={true} offset={50} duration={100}><Button variant="primary" >Start Shopping</Button>{' '}</Link1>
</div> 
:
 <div className='totalprice' >
 <span> Your Total Product is :{Carts.reduce((total, item)=>total+(item.price*item.quantity),0)} </span><Badge pill bg="info">{}$</Badge>{' '}
 <Link to='paymentprocess'><Button variant="primary" >Complate Checkout</Button>{' '}</Link>
</div> 

}


</div>
</div>
              

            
        </div>

    </div>

  
                 
   
    </div>



    );
}
 
export default NavBar;