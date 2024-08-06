import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import {allItems} from "../../constants/index"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import logo from "../../assets/logo.png"

const Header = () => {
   const [showAllToggle,setShowAllToggle] = useState(false);
   console.log(showAllToggle);

  return (
    <>
    <div >
      <div className='w-full bg-amazon_blue px-3 py-2 flex items-center gap-4'>
        {/* Amazon logo */}
          <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-whiteText cursor-pointer'>
            <img src={logo} className='w-24 mt-2' alt='logo' />
          </div>
          {/* Location  */}
          <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-whiteText cursor-pointer'>
          <LocationOnIcon className='text-whiteText'/>
          <p className="text-sm text-lightText font-light flex flex-col">Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Delhi</span></p>
          </div>
          {/* Search Bar */}
          <div className='h-10 rounded-md flex flex-grow relative'>
            <span onClick={()=>setShowAllToggle(!showAllToggle)} className='w-12 h-full flex items-center justify-center bg-drop300 hover:bg-drop200 duration-300 text-amazon_blue cursor-pointer rounded-tl-md rounded-bl-md'>All<span></span><ArrowDropDownIcon/></span>
            {
              showAllToggle && (
                <div>
                  <ul className='absolute w-max h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-whiteText border-[1px] border-x-amazon_blue text-[#000000] p-2 flex-col gap-1 z-50'>
                    {
                      allItems.map((item)=>(
                        <li key={item.id} className='text-sm tracking-wide font-titleFont cursor-pointer'>{item.title}</li>
                      ))
                    }  
                  </ul>
                </div>
              )
            }
            <input type="text" className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' />
            <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchIcon/></span>
          </div>
          {/* Sign In   */}
          <div className='flex flex-col item-start justify-center border border-transparent hover:border-whiteText cursor-pointer'>
            <p className='text-xs text-lightText font-light '>Hello, Sign in</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>Accounts & List <span><ArrowDropDownIcon/></span></p>
          </div>
          {/* return and Orders */}
          <div className='flex flex-col item-start justify-center border border-transparent hover:border-whiteText cursor-pointer' >
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
          </div>
          {/* shopingcart */}
          <div className='flex items-start justify-center relative border border-transparent hover:border-whiteText cursor-pointer'>
           <ShoppingCartIcon className='text-whiteText'/>
           <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-1 left-5 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
          </div>
      </div>
    </div>
    <HeaderBottom/>
    </>
  )
}

export default Header
