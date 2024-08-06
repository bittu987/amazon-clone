import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = ({title,one,two,three}) => {
  return (
    <div className="py-3 border-b-[1px] border-b-[#D1D5DB] bg-whiteText">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
      {title}
      </h3>
      <ul className='text-sm'>
        <li className="flex items-center justify-between hover:bg-[#E4E4E7] px-6 py-2 cursor-pointer">
       {one}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-[#E4E4E7] px-6 py-2 cursor-pointer">
       {two}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-[#E4E4E7] px-6 py-2 cursor-pointer">
     {three}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideNavContent