import './DaynamicText.css'
import { useEffect ,useState} from 'react';


const DynamicText = () => {

    const [showtext1,setshowtext1]=useState(true)
    const [showtext2,setshowtext2]=useState(false)
    const [showtext3,setshowtext3]=useState(false)
    

    useEffect(()=>{
            setTimeout(()=>{setshowtext1(false)},5000);
            setTimeout(()=>setshowtext2(true),7000)
          
        
        
    })
    return (
    
<div className='MainBigDynamicText'>

<div className='BigDynamicText'>
{

showtext1 ?
<div className='ArabicText' id='ar'>
    <div className='typewriter-ar'>
    <h1 dir="rtl">اخي...مرحبا بك متجرنا تحت خدمك</h1>
    </div>
</div>
:
<></>
}

{
!showtext2 ?
<></>
: 
<div className='NubiText'  id='NubiText'  >
    <div className='typewriter-nb'>
       <h1 dir="rtl">امبيسا...مينابو فَضّلوس </h1>
    </div>
</div>

}

{/* {
!showtext3 ?
<></>
: 
<div className='EnglishText' id='en' >
   <div className='typewriter-en'>
    <h1>Hi brother ,How are you..!</h1>
  </div>
</div>

} */}











</div>

    </div>
    );
}
 
export default DynamicText;