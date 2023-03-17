import DynamicText from "./Welcom/DaynamicText";
import SlideShow from "./SlideShow/SlideShow";
import FeaturedBrands from "./Featured Brands/FeaturedBrands";
import BestSeller from "./BestSeller/BestSeller";
import { images } from "./BestSeller/images";
import MainLastsNews from "./Main-LastsNews/Main-LastsNews";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div className="UI-Home">
            
    <BestSeller images={images}/>
    <FeaturedBrands/>
    <SlideShow/>
    <MainLastsNews/>
    <Footer/>
  
    </div>
    );
}
 
export default Home;