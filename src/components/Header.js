import React from 'react'
import logo from "../assets/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Header = () => {
  return (
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

            
      </div>
    </div>
  )
}

export default Header
