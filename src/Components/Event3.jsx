import React from 'react'
import img1 from "../assets/event 3/0.jpeg"
import img2 from "../assets/event 3/1.jpeg"
import img3 from "../assets/event 3/2.jpeg"

import Carousel from 'react-bootstrap/Carousel';


const Event2 = () => {
    const imgs=[img1,img2,img3];
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

export default Event2