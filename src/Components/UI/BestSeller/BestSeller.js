import React, { useRef } from "react"
import useSlider from "./UserSlider"
import { UilAngleRightB,UilAngleLeft } from '@iconscout/react-unicons'
import './BestSeller.css'

const BestSeller = ({ images }) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )

  return (
    <div className="slider" ref={slideImage}>
      <div className="slider--content" style={{width:"auto",height:'60em'}}>
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <UilAngleLeft/>
        </button>
        <div className="slider--feature">
          <h1 className="feature--title">Dreaming</h1>
          <p ref={slideText} className="feature--text"></p>
          <button className="feature__btn">Get started</button>
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <UilAngleRightB/>
        </button>
      </div>
    </div>
  )
}

export default BestSeller