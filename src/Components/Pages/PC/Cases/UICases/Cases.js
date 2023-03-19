import NewFunc from "../NewComponents/new.js";
import './Cases.css'
import case1 from './sc1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Cases = () => {
    
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    
    }, )
    return (
    
        <div className="Main-Cases">

        <div className="row1-cases">
    
         <NewFunc/>
         
        </div>

        <div className="row2-cases" data-aos="fade-up">
        
        <div className='BigImg'>
        <img src={case1 } style={{width:"50em",height:"30em"}}></img>
        </div>
        <div className="Text-BigImge">
            <h1>Cosmos Infinity</h1>
            <span> 30th Anniversary Limited Edition</span>
        </div>

        <div className="btn">
         <Link to="productcases"><button className="button-49" role="button">StartShopping</button></Link>
        </div>
        </div>

        </div>
   
        );
}
 
export default Cases;