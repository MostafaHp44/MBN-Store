import './FeaturedBrands.css'
import pic1 from './picimge/gigabyte.png'
import pic2 from './picimge/huawei.png'
import pic3 from './picimge/MSI.jpg'
import pic4 from './picimge/nvi.png'
import pic5 from './picimge/oppo.png'
import pic6 from './picimge/samsung.jpg'
import pic7 from './picimge/amd.png'
import pic8 from './picimge/asau.png'

const FeaturedBrands= () => {
    return (  
        <div className='Main-FeaturedBrands'>
<div className='FeaturedBrands'>
    <h3>FeaturedBrands</h3>
    <div className='LogoBrandS'>
<ul className='Brand'>

<li className='img-feature'>
<a href="https://www.gigabyte.com/" ><div><img src={pic1} className="picbrands"></img></div></a>
</li>
<li className='img-feature'>
<a href="https://consumer.huawei.com/eg/" ><div><img src={pic2} className="picbrands"></img></div></a>
</li>
<li className='img-feature'>
<a href="https://www.msi.com/index.php" ><div><img src={pic3} className="picbrands"></img></div></a>
</li>  
<li className='img-feature'>
<a href="https://www.nvidia.com/en-me/geforce/" className="picbrands"><div><img src={pic4} className="picbrands"></img></div></a>
</li> 
<li className='img-feature'>
<a href='https://www.oppo.com/eg/' ><div><img src={pic5} className="picbrands"></img></div></a>
</li>
<li className='img-feature'>
<a href='https://www.samsung.com/eg/' ><div><img src={pic6} className="picbrands"></img></div></a>
</li>
<li className='img-feature'>
<a href='https://www.samsung.com/eg/' ><div><img src={pic7} className="picbrands"></img></div></a>
</li>
<li className='img-feature'>
<a href='https://www.samsung.com/eg/' ><div><img src={pic8} className="picbrands"></img></div></a>
</li>

</ul>
       
       

    </div>
</div>
        </div>
    );
}
 
export default FeaturedBrands
;