import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UilAngleUp,UilAngleDown,UilHeartAlt,UilShoppingCart,UilListUiAlt,UilApps,UilEstate,UilAngleRight} from '@iconscout/react-unicons'
import { useState } from 'react';

const FilterOfCases = () => {
    const ListGrid=document.getElementById('Main-Item')
    const [open1,setopen1]=useState(true)
    const [open2,setopen2]=useState(true)
    const [open3,setopen3]=useState(true)
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [grid,setgrid]=useState(true)
    const [list,setlist]=useState(true)

   
 const handellist=()=>{
    setlist(current=>!current)
    ListGrid.style.display="block"
 }
 const handelgrid=()=>{
    setgrid(current=>!current)
    ListGrid.style.display="flex"

 }

    return (  
<div className='Main-Filter'>

<div className='Filter'>

<div className='NumOfItem'>
    <span>20464 Item</span>
</div>

<div className='Menu-filter'>
  


             <ul className='Main-Menu-filter'>

<li className='elements-Menu-filter'>
    <div className='text-elements-Menu-filter' onClick={()=>{setopen1(current => !current)}}>
     <a> Stock Status<span>{open1?<UilAngleDown/>:<UilAngleUp/>}</span></a></div>            
 <ul className='element' style={open1?{display:"none"}:{display:"block",transition:"10.3s"}}>
        <li className='element1'>
            <div>
            <Form.Check  type={'checkbox'} id={'instock'} label={'in Stock'} />
             </div>
         </li>

         <li className='element1'>
            <div>
            <Form.Check  type={'checkbox'} id={'outstock'} label={'Out Stock '} />

             </div>
         </li>
     
        
 </ul>
  
</li>

<li className='elements-Menu-filter'>
    <div className='text-elements-Menu-filter' onClick={()=>{setopen2(current => !current)}}> <a> SIZE <span>{open2?<UilAngleDown/>:<UilAngleUp/>}</span></a></div>            
 <ul className='element' style={open2?{display:"none"}:{display:"block"}}>
       

            <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'intel-1'} label={'FULL-TOWER'} onChange={()=>{setIsCheckAll(current=>!current)}} checked={isCheckAll}/>
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'intel-2'} label={'MID-TOWER'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'intel-3'} label={'MIN-TOWER'} />

</div>
           </li>

           <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'amd-1'} label={'MINI-ITX'} />
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-2'} label={'NUC'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-3'} label={'Raspberry Pi'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-4'} label={'External GPU'} />

</div>
           </li>
        
 </ul>
  
</li>


<div className='btnreset'>
<Button variant="danger">Reset</Button>{' '}
</div>

            </ul>
            </div>


</div>

</div>
    );
}
 
export default FilterOfCases;