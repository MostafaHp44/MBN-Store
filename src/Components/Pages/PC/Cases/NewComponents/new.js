import './new.css'
import img11 from '../NewComponents/ph11.jpg'
import img22 from '../NewComponents/ph22.jpg'
import btnline from './btnline.png'

const NewFunc = () => {
    return (
 <div className='Main-newfunc'>
<div className='newfunc'>
<div  className="imges" style={{boxSizing:"border-box",position:"relative",width:"100%",height:"63em",overflow:"hidden",display:"flex"}}>
<img src={img11} className="img11"  data-testid="right-image"></img>
<img src={img22} className='img22'  data-testid="left-image"></img>

<div className='BigLine'>
    <div className='ThinLine-Up'></div>
    <div className='btnline'><img src={btnline} style={{maxWidth:"100%",height:"auto"}}></img></div>
    <div className='ThinLine-Down'></div>

</div>

</div>
</div>
    </div>
    );
}
 
export default NewFunc;