import { Link } from 'react-router-dom';
import './MotherBoard.css'
import SlideShowOfMotherBoard from '../SlideShowForMotherboard/SM';
import icm1 from '../picofcategory/asus (1).png'
import icm2 from '../picofcategory/gigabyte (1).png'
import icm3 from '../picofcategory/msi-300.png'

const MotherBoard = () => {
    return (
<div className="Main-MotherBoard">

<div className="row1-mother">

<div className='SlideShowOfMotherBoard'>
<SlideShowOfMotherBoard/>
</div>

<div className="Category-MotherBoard">
    <div className='text-Category-MotherBoard'>
    <h1>Find Your Motherboards</h1>

    </div>
    <div className='icon-Category-MotherBoard'>
            <Link to="asus"><img className='im'src={icm1} ></img></Link>
            <Link to="gigabyte"><img className='im' src={icm2}></img></Link>
            <Link to="msi"><img className='im' src={icm3}></img></Link>
    
    </div>

</div>

</div>

<div className="row2-mother">

<div className='HostProduct'>

<div className='text-HostProduct'>
    <h1>HostProduct</h1>
</div>

<div className='slide-HostProduct'>
</div>

</div>

</div>

</div>
 );
}
 
export default MotherBoard;