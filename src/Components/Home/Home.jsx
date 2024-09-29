import React, { useEffect } from 'react'
import User from '../User/User'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getFollowinPosts } from '../../Action/ActionUser'
import Loader from '../Loader/Loader'
import { Typography } from '@mui/material'
import { toast } from 'react-toastify';

const Home = () => {
  const {error:likerror,message}=useSelector((state)=>state.like)
  const {loading,posts,error}=useSelector((state)=>state.postOfFollowing);
  const {users, loading:usersLoading}=useSelector((state)=>state.allUsers);
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getFollowinPosts());
  dispatch(getAllUsers());
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
      
  return loading===true|| usersLoading===true?(<Loader/>) :(
    <div className='home box-border grid grid-cols-12 h-[100vh]'>
        <div className="homeLeft col-span-8 md:col-span-9 bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] h-[90vh] p-0 md:p-[2vmax] box-border flex flex-col items-center overflow-y-scroll no-scrollbar ">
          {
            posts && posts.length>0? posts.map((post)=>(
              
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
          /> 
            )):(<Typography>no post yet</Typography>)
          }
          {/* */}
        </div>
        <div className="homeRight col-span-4 md:col-span-3 overflow-y-auto p-[2vmax]">
            {
              users && users.length>0? users.map((user)=>(
                <User
                 key={user._id}
                userId={user._id}
                name={user.name}
                avatar={"https://images.unsplash.com/photo-1718525622204-d5216b51e2eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"}
                />
              )):(<Typography>no user yet</Typography>)
            }
            
            
            {/* <User
            userId={"User.id"}
            name={"User.name"}
            avatar={"https://images.unsplash.com/photo-1718046881340-80081de4ada3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"}
            /> */}
        </div>

    </div>
  )
}

export default Home