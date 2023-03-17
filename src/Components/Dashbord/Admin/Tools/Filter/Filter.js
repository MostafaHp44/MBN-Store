import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UilAngleUp,UilAngleDown,UilHeartAlt,UilShoppingCart,UilListUiAlt,UilApps,UilEstate,UilAngleRight} from '@iconscout/react-unicons'
import { useState } from 'react';

const Filter = () => {
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
    <div className='text-elements-Menu-filter' onClick={()=>{setopen2(current => !current)}}> <a>CPU Socket <span>{open2?<UilAngleDown/>:<UilAngleUp/>}</span></a></div>            
 <ul className='element' style={open2?{display:"none"}:{display:"block"}}>
       

            <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'intel-1'} label={'Intel 1151'} onChange={()=>{setIsCheckAll(current=>!current)}} checked={isCheckAll}/>
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'intel-2'} label={'Intel 1200'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'intel-3'} label={'Intel 1700'} />

</div>
           </li>

           <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'amd-1'} label={'AM5'} />
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-2'} label={'AMD AM4'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-3'} label={'AMD sTR4'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'amd-4'} label={'AMD sTRX40'} />

</div>
           </li>
        
 </ul>
  
</li>

<li className='elements-Menu-filter'>
    <div className='text-elements-Menu-filter' onClick={()=>{setopen3(current => !current)}}> 
<a> Motherboard Chipset<span>{open2?<UilAngleDown/>:<UilAngleUp/>}</span></a></div>            
 <ul className='element' style={open3?{display:"none"}:{display:"block"}}>
        <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'M1'} label={'AMD B450'} onChange={()=>{setIsCheckAll(current=>!current)}} checked={isCheckAll}/>
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M2'} label={'AMD B550'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M3'} label={'AMD TRX40'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M4'} label={'AMD TRX40'} />

</div>
           </li>   

             <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M5'} label={'AMD X399'} />

</div>
             </li>

           <li className='secondaryelement1'>
                <div>
         <Form.Check  type={'checkbox'} id={'M6'} label={'AMD X570'} />
            </div>
            </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M7'} label={'AMD X670'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M8'} label={'INTEL B560'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M9'} label={'INTEL B660'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M10'} label={'INTEL H610'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M11'} label={'INTEL Z490'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M12'} label={'INTEL Z590'} />

</div>
           </li>

           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M13'} label={'INTEL Z690'} />

</div>
           </li>
           
           <li className='secondaryelement1'>
<div>
<Form.Check  type={'checkbox'} id={'M14'} label={'INTEL Z790'} />

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
 
export default Filter;