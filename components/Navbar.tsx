import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full fixed z-[99] overflow-hidden">

    <ul className="glass_bg vp4:rounded-full h-[120px] 
    relative top-[-80px] vp4:w-[80%] w-[full] mx-auto">
      <ul className='w-full flex flex-row gap-12 relative bottom-[-85px]
      items-center justify-center z-[1] left-0'>
      <li className="text-white">
          Contact
        </li>

        <li className="text-white">
          Blog
        </li>

        <li className="text-white">
          Jobs
        </li>

      </ul>
      

      </ul>
    </nav>
  )
}

export default Navbar
