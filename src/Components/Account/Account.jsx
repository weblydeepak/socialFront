import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getFollowinPosts, getMyPosts, logoutUser } from '../../Action/ActionUser';
import Loader from '../Loader/Loader';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';
import User from '../User/User';
import { toast } from 'react-toastify';

const Account = () => {
const dispatch = useDispatch();

const {error:likerror,message}=useSelector((state)=>state.like)
const {loading, error, posts}= useSelector((state)=> state.myPosts)
const {loading:userLoadinig,  user}= useSelector((state)=> state.user)
const [followersToggle, setFollowersToggle] = useState(false);
const [followingToggle, setFollowingToggle] = useState(false);
const Logouthandle= async()=>{
 await dispatch(logoutUser());
  toast.success("Logged Out");
}
useEffect(()=>{
   dispatch(getMyPosts());
},[dispatch])
      
useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch({type:"clearErrors"});
  }
  if(likerror){
    toast.error(likerror);
    dispatch({type:"clearErrors"});
  }
  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"});
  }
  },[toast,error,message,likerror,dispatch]);
    

  return loading===true|| userLoadinig===true ?(<Loader/>): (
   <div className="account grid grid-cols-12 h-[100vh]">
    <div className="accountleft col-span-8 md:col-span-9 bg-gradient-to-r from-[#fff5bc] to-[#cec1ff]  p-0 md:p-[2vmax] box-border flex flex-col items-center overflow-y-scroll no-scrollbar"> 
      {posts && posts.length>0?  posts.map((post)=>(
              
              <Post
               key={post._id}
                    postImage={"https://plus.unsplash.com/premium_photo-1709309934434-448b98065f66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDl8fHxlbnwwfHx8fHw%3D"}
                    postId={post._id}
                    caption={post.caption}
                    likes={post.likes}
                    comments={post.comments}
                    ownerImage={"https://images.unsplash.com/photo-1718679514744-0374fd20dfbe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"}
                    ownerName={post.owner.name}
                    ownerId={post.owner._id}
                    isAccount={true }
                    isDelete={true }
            /> 
              )):(<Typography variant='h2' >no post yet</Typography>)
            }   
    </div>
    <div className="accountright col-span-4 md:col-span-3 overflow-y-auto p-[2vmax] flex flex-col gap-3 items-center">
        <Avatar sx={{height: "8vmax", width: "8vmax"}} className=' transition-all duration-500 hover:scale-110' src={"https://images.unsplash.com/photo-1652119397316-c68a01c86782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"}/>
        <Typography variant='h5' className=''>
         {user.name}
        </Typography>
        <div className="">
          <button onClick={()=>setFollowersToggle(!followersToggle)}>
            <Typography>
              Followers
            </Typography>
            <Typography>
              {user.followers.length}
            </Typography>
          </button>
        </div>

        <div className="">
          <button onClick={()=>setFollowingToggle(!followingToggle)}>
            <Typography>
              Following
            </Typography>
            <Typography>
              {user.following.length}
            </Typography>
          </button>
        </div>
    
        <div className="">
          <button>
            <Typography>
              Posts
            </Typography>
            <Typography>
              {user.posts.length}
            </Typography>
          </button>
        </div>
        
        <Button onClick={Logouthandle}  variant='contained'>Logout</Button>
        <Link className='mt-[2vw]' to="/update/profile"> Edit Profile</Link>
        <Link className='mt-[2vw]' to="/update/profile"> Change Profile</Link>
            
        <Button variant='text' style={{color:"red", margin:"1vmax"}} >
          Delete My Profile
        </Button>
        <Dialog  
      open={followersToggle}
      onClose={()=>setFollowersToggle(!followersToggle)}
      >
<div className="DialogBox min-w-[500px] h-[70vh] p-[2vmax]">
  <Typography variant='h4'>Followed by</Typography>
  {
    user && user.followers.length>0?( user.followers.map((followers)=>(
    <User
     key={followers._id}
    userId={followers._id}
    name={followers.name}
    avatar={"https://images.unsplash.com/photo-1590008620813-eacc325784d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"}/>
    ))):(<Typography style={{margin:"2vmax"}}> you have no followers </Typography>)
  }
</div>
      </Dialog>
        <Dialog  
      open={followingToggle}
      onClose={()=>setFollowingToggle(!followingToggle)}
      >
<div className="DialogBox min-w-[500px] h-[70vh] p-[2vmax]">
  <Typography variant='h4'>following</Typography>
  {
    user && user.following.length>0?( user.following.map((follow)=>(
    <User
     key={follow._id}
    userId={follow._id}
    name={follow.name}
    avatar={"https://images.unsplash.com/photo-1590008620813-eacc325784d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"}/>
    ))):(<Typography style={{margin:"2vmax"}}> you have no followers </Typography>)
  }
</div>
      </Dialog>
    </div>
   </div>
  )
}

export default Account