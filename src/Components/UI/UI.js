import DynamicText from "./Welcom/DaynamicText";
import SlideShow from "./SlideShow/SlideShow";
import FeaturedBrands from "./Featured Brands/FeaturedBrands";
import BestSeller from "./BestSeller/BestSeller";
import { images } from "./BestSeller/images";
import MainLastsNews from "./Main-LastsNews/Main-LastsNews";
import Footer from "./Footer/Footer";
import StartShopping from "./StartShopping/StartShopping";


const Home = () => {
    return (
        <div className="UI-Home">
            
    <BestSeller images={images}/>
    <FeaturedBrands/>
    <SlideShow/>
    <StartShopping/>
    <MainLastsNews/>
    <Footer/>
  
    </div>
    );
}
 
export default Home;