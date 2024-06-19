import React, { useState } from 'react'
import { Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Action/ActionUser';
const login = () => {

    const[email , setEmail] = useState(' ');
    const [password , setPassword] = useState(' ');
    const dispatch = useDispatch();

    const onHandle = (e) =>{
        e.preventDefault()
        dispatch (loginUser(email , password));

    }
  
  return (
<div className='Login h-[100vh] bg-gradient-to-r from-[#cec1ff] to-[#e7e4d5] flex items-center justify-center p-[2vmax] box-border'>
<form  className='bg-white h-full w-full md:w-1/2 box-border p-[2vmax] flex flex-col items-center  rounded-lg' onSubmit={onHandle}>
<Typography variant='h3' className='p-[2vmax]'  >Login</Typography>
<input className=' box-border px-[8vmax] py-[4vmax] md:px-[2vmax] md:py-[1vmax] w-4/5 rounded-md border-[#ccc] border-2 m-[4vw] md:m-[2vmax] ' type="email" placeholder='Email' required  onChange={(e)=>setEmail(e.target.value)} />
<input className=' box-border px-[8vmax] py-[4vmax] md:px-[2vmax] md:py-[1vmax] w-4/5 rounded-md border-[#ccc] border-2 m-[4vw] md:m-[2vmax] ' type="password" placeholder='Password' required  onChange={(e)=>setPassword(e.target.value)} />
<Link className=' w-full text-center md:text-right text-black/20  ' to="/forgot/password">
    <Typography  className=''> Forgot Password</Typography>
</Link>
<Button type='submit'>Login</Button>
<Link className='w-full text-center md:text-right text-black/20  ' to="/Sign">
    <Typography>New User</Typography>
</Link>
</form>
    </div>
  )
}

export default login;