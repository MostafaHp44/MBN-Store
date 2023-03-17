import { Link } from 'react-router-dom';
import { UilUserCircle,UilPlus,UilCloudRedo,UilTrashAlt} from '@iconscout/react-unicons'
import { useState } from 'react';
import './Admin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddTool from './Tools/AddTool';
import Item from './Tools/Item/Item';
import {useSelector } from "react-redux";




const Admin = () => {
    const[open,setopen]=useState(false)
    const product=useSelector(state=>state.product)

    const handelclickadd=(e)=>{
          setopen(curr=>!curr)
    }
    return (
    <div className="Main-Admin">

    <nav className='BigNavAdmin'>
       <div className='RightNavAdmin'>
       <h1>MBN-Store</h1>
       </div>
       <div className='LeftNavAdmin'>
        <ul className='listadmin'>
            <li><Link style={{textDecoration:"none"}}> Home</Link></li>
            <li><Link style={{textDecoration:"none"}}>LogOut</Link></li>
            <li><Link style={{textDecoration:"none"}}>Hello Admin</Link></li>


        </ul>
       </div>

    </nav>

<div className='Main-Panel'>

<div className='Edit-Panel'>

        <div className='row1admin'>
        <div className='textrowadmin'><h4>Hello </h4> </div>
         <div className='iconrowadmin'><UilUserCircle size="100" color="red"/></div>
        </div>

        <div className='row2admin'>
         <div className='textrowadmin'><h4>AddItem</h4> </div>
         <div className='iconrowadmin'><button className='iconadmin' onClick={handelclickadd}><UilPlus color="red"/></button></div>
         {open?<AddTool/>:<></>}
        </div>

        <div className='row3admin'>
        <div className='textrowadmin'><h4>UpdateItem</h4> </div>
         <div className='iconrowadmin'><button className='iconadmin'><UilCloudRedo color="red"/></button></div>
        </div>

        <div className='row4admin'>
        <div className='textrowadmin'><h4>DeleteItem </h4> </div>
         <div className='iconrowadmin'><button className='iconadmin'><UilTrashAlt color="red"/></button></div>
        </div>

</div>


 <div className='ShowItem'>

    <div className='search' style={{display:"flex",padding:"2em"}}>

<div className='searchpanellist' style={{paddingRight:"1em"}}>
<Form.Select>
     <option>All</option>
      <option>PC</option>
      <option>LapTop</option>
      <option>Phone</option>
   



</Form.Select>
</div>
<div className='searchpanel'>

<Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
</Form>
</div>

    </div>
   
    <div className='itempanel'>
      <Item/>
    </div>

 

</div>

</div>


</div>
    );
}
 
export default Admin