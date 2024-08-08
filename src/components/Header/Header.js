import React, {useState} from 'react'
import { useSelector } from "react-redux";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import {allItems} from "../../constants/index"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Header = () => {
   const [showAllToggle,setShowAllToggle] = useState(false);
   const products = useSelector((state) => state.amazonReducer.products);
   const userInfo = useSelector((state) => state.amazonReducer.userInfo);
   const navigate = useNavigate();
   
    
  
    const handleLogout = async () => {
      await signOut(auth);
      navigate("/signin");
    };

  

  return (
    <>
    <div className='w-full sticky top-0 z-50' >
      <div className="w-full bg-amazon_blue  px-4 py-3 flex md:justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4">
        {/* Amazon logo */}
        <Link to="/">
          <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-whiteText cursor-pointer'>
            <img src={logo} className='w-24 mt-2' alt='logo' />
          </div>
          </Link>
          {/* Location  */}
          <div className='hidden md:inline-flex px-2 h-[80%] xl:flex items-center border border-transparent hover:border-whiteText cursor-pointer  '>
          <LocationOnIcon className='text-whiteText'/>
          <p className="text-sm text-lightText font-light flex flex-col">Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Delhi</span></p>
          </div>
          {/* Search Bar */}
          <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative">
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
          <Link to="/signin">
          <div className='flex flex-col item-start justify-center border border-transparent hover:border-whiteText cursor-pointer'>
            <p className='test-sm mdl:text-xs text-whiteText mdl:text-lightText font-light '>Hello, Customer</p>
            <p className='hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText'>Accounts & List <span><ArrowDropDownIcon/></span></p>
          </div>
          </Link>
          {/* return and Orders */}
          <div className=' hidden mdl:flex  items-start flex-col item-start justify-center border border-transparent hover:border-whiteText cursor-pointer' >
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
          </div>
          {/* shopingcart */}
          <Link to="/cart">
          <div className='flex items-start justify-center relative border border-transparent hover:border-whiteText cursor-pointer'>
           <ShoppingCartIcon className='text-whiteText'/>
           <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-1 left-5 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>{products.length > 0 ? products.length : 0}</span></p>
          </div>
          </Link>
          {userInfo && (
          <div
            onClick={handleLogout}
            className="flex flex-col justify-center px-2 h-[80%] items-center border border-transparent hover:border-whiteText cursor-pointer duration-100 relative"
          >
            <LogoutIcon className='text-whiteText' />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>
      <HeaderBottom/>
    </div>
    
    </>
  )
}

export default Header
