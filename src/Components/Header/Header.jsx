  import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home,
    HomeOutlined,
    Add,
    AddOutlined,
    Search,
    SearchOutlined,
    AccountCircle,
    AccountCircleOutlined,
  } from '@mui/icons-material'


const Header = () => {
    const [tab,setab]= useState(window.location.pathname)
  return (
    <div className='Header flex justify-center items-center'>
    <Link  className='w-[8vw] md:w-[2vmax] h- md:h-[2vmax] mx-[8vmax] my-[2vmax] md:mx-[4vmax] md:my-[2vmax] ' to="/" onClick={()=>setab("/")}>
      { tab==="/"?<Home className='hover:scale-125 text-[8vw] md:text-[2vmax]' />:<HomeOutlined className='hover:scale-125 text-[8vw] md:text-[2vmax] transition-all duration-150 text-black/60  hover:text-black'/>}
    </Link>
    <Link  className='w-[8vw] md:w-[2vmax] h- md:h-[2vmax] mx-[8vmax] my-2 md:mx-[4vmax] md:my-[1vmax] ' to="/newPost" onClick={()=>setab("/newPost")}>
        { tab==="/newPost"?<Add className='hover:scale-125 text-[8vw] md:text-[2vmax]'/>:<AddOutlined className='hover:scale-125 text-[8vw] md:text-[2vmax] transition-all duration-150 text-black/60 hover:text-black' />}
    </Link>
    <Link  className='w-[8vw] md:w-[2vmax] h- md:h-[2vmax] mx-[8vmax] my-2 md:mx-[4vmax] md:my-[1vmax] ' to="/search" onClick={()=>setab("/search")}>
    {tab==="/search"?<Search className='hover:scale-125 text-[8vw] md:text-[2vmax]'
    />:<SearchOutlined className='hover:scale-125 text-[8vw] md:text-[2vmax] transition-all duration-150 text-black/60 hover:text-black' />}
    </Link>
    <Link  className='w-[8vw] md:w-[2vmax] h- md:h-[2vmax] mx-[8vmax] my-2 md:mx-[4vmax] md:my-[1vmax] ' to="/account" onClick={()=>setab("/account")}>
        {
            tab==="/account"?<AccountCircle className='hover:scale-125 text-[8vw] md:text-[2vmax]'/>:<AccountCircleOutlined className='hover:scale-125 text-[8vw] md:text-[2vmax] transition-all duration-150 text-black/60 hover:text-black' />
        }
    </Link>
    </div>
  )
}

export default Header
