import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const User = ({userId, name, avatar}) => {
  return (
   <Link to={`/user/${userId}`} className='homeUser flex items-center  transition-all duration-300 hover:translate-y-[-10px]'>
    <img className='h-[3vmax] w-[3vmax] m-[1vmax] rounded-full ' src={avatar} alt={name} />
    <Typography>{name}</Typography>
   </Link>
  )
}

export default User