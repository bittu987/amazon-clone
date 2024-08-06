import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import {motion} from "framer-motion"
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from './SideNavContent';


const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar,setSidebar]= useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
         if(e.target.contains(ref.current)){
            setSidebar(false)
         }
        })
    },[ref,sidebar])
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-whiteText flex items-center">
      {/* ============ ListItems Start here ============ */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="cursor-pointer flex items-center"
        >
          <MenuIcon />
          All
        </li>
        <li className="cursor-pointer">Today's Deals</li>
        <li className="cursor-pointer">Customer Service</li>
        <li className="cursor-pointer">Gift Cards</li>
        <li className="cursor-pointer">Registry</li>
        <li className="cursor-pointer">Sell</li>
      </ul>
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {sidebar && (
        <div className="w-full h-screen text-[#000000] fixed top-0 left-0 bg-[#FFFFFF] bg-opacity-10">
          <div className="w-full h-full relative">
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon className='text-whiteText' />
                <h3 className="font-titleFont font-bold text-lg tracking-wide text-whiteText">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
            <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-[#e5e7eb] hover:bg-[#EF4444] hover:text-white duration-300">
              <CloseIcon />
            </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ============ sideNav End here ================ */}
    </div>
  );
}

export default HeaderBottom