import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
   
  return (
    <div className='w-full' >
      <h3 className="font-titleFont text-[#FFFFFF] text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data,i) => <li key={i} className="text-sm font-titleFont tracking-wide hover:text-[#F5F5F5] cursor-pointer hover:underline duration-150">{data}</li>)
        )}
      </ul>
    </div>
  );
}

export default FooterMiddleList