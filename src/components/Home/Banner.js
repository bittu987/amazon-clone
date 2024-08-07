import React, { useState } from 'react'
import Slider from "react-slick";
import bannerImgOne from "../../assets/banner/bannerImgOne.jpg"
import bannerImgtwo from "../../assets/banner/bannerImgTwo.jpg"
import bannerImgThree from "../../assets/banner/bannerImgThree.jpg"
import bannerImgFour from "../../assets/banner/bannerImgFour.jpg"
import bannerImgFive from "../../assets/banner/bannerImgFive.jpg"
import { Flag } from '@mui/icons-material';

function Banner() {

  const [activedots,setActiveDots] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    beforeChange: (prev,next)=>{
      setActiveDots(next);
    },
    appendDots: dots => (
      <div
        style={{
          position:"absolute",
          top:"70%",
          left:"0",
          right:"0",
          margin:"0 auto",
          transform:"translate(-50% -50%)",
          width: "210px", 
        }}
      >
        <ul style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width:"30px",
          height:"30px",
          borderRadius:"50%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          color:"white",
          background:"#131921",
          padding:"8px 0",
          cursor:"pointer",
          border:"1px solid #f3a847",
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className='w-full'>
    <div className='w-full h-full relative'>
      <Slider {...settings}>
      <div>
        <img src={bannerImgOne} alt="img1" />
      </div>
      <div>
        <img src={bannerImgtwo} alt="img2" />
      </div>
      <div>
        <img src={bannerImgThree} alt="img3" />
      </div>
      <div>
        <img src={bannerImgFour} alt="img4" />
      </div>
      <div>
        <img src={bannerImgFive} alt="img5" />
      </div>
      
    </Slider>
    </div>
    </div>
  )
}

export default Banner
