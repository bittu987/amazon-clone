import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
// import { useLoaderData } from 'react-router-dom'

const Products = () => {

    // const data = useLoaderData();
    // const productData = data.data;
    // console.log(productData);

    const [productData , setProductData] = useState();
    const dispatch = useDispatch()


    const fetchdata = async ()=>{
         await axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
          setProductData(res.data)
        })
        .catch((err)=> console.log(err))
      }

      useEffect(()=>{
        fetchdata();
      },[]);
 

  return (
    
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 xl:-mt-10'>
      {
        productData?.map((item)=>(
          <div key={item.id} className='bg-whiteText border-[1px] border-[#EEEEEE] py-6 z-30 hover:border-[#FFFFFF] shadow-none hover:shadow-testshadow duration-200 relative flex flex-col gap-4'>
          <div className='w-full h-auto flex items-center justify-center'>
            <img className='w-52 h-64 object-contain' src={item.image} alt="productImg"/>
          </div>
          <div className='px-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0,20)}</h2>
          </div>
          <div>
            <p className='text-sm'>{item.description.substring(0,90)}...</p>
            <div className='text-[#FFEB3B]'>
               <GradeIcon/>
               <GradeIcon/>
               <GradeIcon/>
               <GradeIcon/>
               <GradeIcon/>
            </div>
            <div>
            <p className='text-md  font-semibold mt-1'>Rs {item.price}</p>
            </div>
          </div>
          <button onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    quantity: 1,
                  })
                )
              } className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-[#FFEE58] to-[#FFF59D] border hover:from-[#FFF176] border-[#FFEB3B] hover:border-[#ffff00] py-1.5 rounded-md mt-3  '>Add to Cart</button>
          </div>
          </div>
                    
        ))
      }
    </div>
  )
}

export default Products
