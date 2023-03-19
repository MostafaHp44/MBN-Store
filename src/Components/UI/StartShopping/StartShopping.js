import './StartShopping.css'
import { UilAngleRightB,UilAngleLeftB} from '@iconscout/react-unicons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Virtual } from 'swiper';
import img1 from './img/s1.png'
import img2 from './img/s4.png'
import img3 from './img/s3.png'
import img4 from './img/s2.png'
import img6 from './img/graphiccard.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { Link } from 'react-router-dom';




const StartShopping = () => {
    return (
<div className='MainStartShopping' id='MainStartShopping'>
<div className='Main-text'><span>Product Category</span></div>

<div className='MainRow'>
<Swiper
        modules={[Navigation, Pagination,  A11y,Virtual]}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        
      spaceBetween={30}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper_container"

    >
<SwiperSlide><Link to='motherboard' style={{textDecoration:"none"}}><div className='Box1'><img src={img1} style={{width:"30px",height:"30px"}}></img> <span>MotherBoard</span></div></Link></SwiperSlide>
<SwiperSlide><Link to='ram' style={{textDecoration:"none"}}><div className='Box2'><img src={img2} style={{width:"30px",height:"30px"}}></img> <span>Ram</span></div></Link></SwiperSlide>
<SwiperSlide><Link to='phone' style={{textDecoration:"none"}}><div className='Box3'><img src={img3} style={{width:"30px",height:"30px"}}></img> <span>Phones</span></div></Link></SwiperSlide>
<SwiperSlide><Link to='Laptop' style={{textDecoration:"none"}}><div className='Box4'><img src={img4} style={{width:"30px",height:"30px"}}></img> <span>Laptop</span></div></Link></SwiperSlide>
<SwiperSlide><Link to='processor' style={{textDecoration:"none"}}><div className='Box5'><img src={img2} style={{width:"30px",height:"30px"}}></img> <span>Processor</span></div></Link></SwiperSlide>
<SwiperSlide><Link to='graphiccard' style={{textDecoration:"none"}}><div className='Box6'><img src={img6} style={{width:"30px",height:"30px"}}></img> <span>Graphics Card</span></div></Link></SwiperSlide>
</Swiper>
<div className='slider-controler'>

    <div className='swiper-button-next slider-controler' style={{position:"absolute",top:"116em"}}>
       
    </div>

    <div className='swiper-button-prev slider-controler' style={{position:"absolute",top:"116em"}}>
    </div>

    <div className="swiper-pagination"></div>

</div>

</div>


 
</div>

    );
}
 
export default StartShopping;