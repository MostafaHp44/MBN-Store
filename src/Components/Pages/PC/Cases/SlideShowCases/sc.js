import './sc.css'
import { useState ,useEffect,useRef} from 'react';
import sc1 from './picofcasesslidshow/sc1.png'


const picslide   =[sc1]
const delay = 5000;

const SlideShowOfCases = () => {
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
 
export default SlideShowOfCases