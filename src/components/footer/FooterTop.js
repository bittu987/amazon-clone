import React from 'react'
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className='w-full bg-whiteText py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] border-none py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-1'>
            <p className='text-sm'>See Personalised recommendations</p>
            <Link to="/registration">
            <button className='w-full bg-[#FFEE58] rounded-md py-1 font-semibold cursor-pointer hover:bg-[#FFEB3B] active:bg-[#FFA700]'>Sign In</button>
            </Link>
            <p className='text-xs mt-1'>New Customer? <span className='text-[#1E88E5] ml-1 cursor-pointer'>Start here.</span></p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
