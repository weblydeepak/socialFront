import "./NewPost.css";
import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewPost} from "../../Action/ActionPost";
import { loadUser } from "../../Action/ActionUser";

const Newpost = () => {
  const [image,setImagae]= useState(null);
  const [caption,setCaption]=useState("")
  const { loading, error, message } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const handleImageChange=(e)=>{
    const file =e.target.files[0]; 
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState===2) {
      setImagae(Reader.result);
      }};
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
   await dispatch(createNewPost(caption,image))
   dispatch(loadUser())
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, toast]);

  return (
    <div className="newPost h-[100vh] bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex items-center justify-center p-[2vmax] box-border">
        <form  className="newPostForm w-full md:w-1/2 h-full rounded-3xl box-border p-[2vmax] flex flex-col items-center" onSubmit={handleSubmit}>
            <Typography variant='h3' >New Post</Typography>
            {image&& <img className='w-4/5 object-cover' src={image} alt='post' /> }
            <input className='rounded-3xl m-[2vmax] ' type="file" accept='image/*' onChange={handleImageChange}/>
            <input className='w-full p-[1vmax] rounded-3xl border-none outline-none  ' type="text" placeholder='Caption....'
            value={caption} onChange={(e)=>setCaption(e.target.value)}
            />
            <Button disabled={loading} type='submit'>Post</Button>
        </form>
    </div>
  )
}

export default Newpost