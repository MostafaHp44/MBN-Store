import './SlideShow.css'
import { useState ,useEffect,useRef} from 'react';
import pic1 from './picslide/1.png'
import pic2 from './picslide/banner_1.jpeg'
import pic3 from './picslide/banner_2.jpeg'
import pic4 from './picslide/reno6-ar-pc-v2.jpg'
import pic5 from './picslide/PC.png'



const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const picslide   =[pic1,pic2,pic3,pic4,pic5]
const delay = 5000;

const SlideShow = () => {
    const [index, setIndex] = useState(0);
    const timeslide=useRef(null)
    const t=()=>{
        if (timeslide.current) {
          clearTimeout(timeslide.current);
        }
      }
    

    useEffect(() => {
        t();
      timeslide.current= setTimeout(() =>setIndex((prevIndex) =>
          prevIndex === picslide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
        return () => {
            t();
        };
    }, [index])

    return (
 <div className='Main-slideshow'>   

 <div className="slideshow">
    <div className="slideshowSlider"style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
    {picslide.map((pic, index) => (
          <img className="slide" key={index} src={pic}>

          </img>
        ))} 
</div>

<div className="slideshowDots">
        {picslide.map((_, idx) => (
          <div key={idx} 
          className={`slideshowDot${index === idx ? " active" : ""}`}
           onClick={() => {
            setIndex(idx)}}>

          </div>
        ))}
     </div>
        </div>


        </div>
    );
}
 
export default SlideShow