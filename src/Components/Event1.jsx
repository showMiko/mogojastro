import React from 'react'
import img1 from "../assets/event 1/1.jpeg"
import img2 from "../assets/event 1/2.jpeg"
import img3 from "../assets/event 1/3.jpeg"
import img4 from "../assets/event 1/4.jpeg"
import img5 from "../assets/event 1/5.jpeg"
import img6 from "../assets/event 1/6.jpeg"
import img7 from "../assets/event 1/7.jpeg"
import img8 from "../assets/event 1/8.jpeg"
import img9 from "../assets/event 1/9.jpeg"
import Carousel from 'react-bootstrap/Carousel';


const Event1 = () => {
    const imgs=[img1,img2,img3,img4,img5,img6,img7,img8,img9];
  return (
    <Carousel fade interval={20000}>
        {imgs.map((img,i)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={img}
              alt="Slide"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Event1