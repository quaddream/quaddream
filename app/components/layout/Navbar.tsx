
import React from 'react'
import { menuItems } from './menuItems'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='fixed w-full z-[100] top-[95px]'>
        <div className="container w-full">
            <div className='bg-white rounded-full shadow-md pr-[37px] py-[25px] flex items-center justify-between w-fit gap-10'>
              <div className=''>
                <Image src="/assets/logo-quad.png" alt="Logo" width={500} height={500} />
              </div>
                <ul className='flex w-full justify-between gap-5'>
                  {menuItems.map((item)=>{
                    return(
                      <div className='flex flex-col group cursor-pointer'>
                        <li className='text-nowrap'>{item.name}</li>
                        <span className='bg-primary w-[0px] h-[2px] group-hover:w-full transition-all duration-300'></span>
                      </div>
                    )
                  })}
                </ul>
                <button className='bg-primary text-white rounded-full py-[30px] px-[50px] text-nowrap cursor-pointer'>
                  Contact Us
                </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar 