import {MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
     } from '@mui/icons-material';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCommentOnPost, deletePost, likePost, updatePost } from '../../Action/ActionPost';
import User from '../User/User';
import { getFollowinPosts, getMyPosts, loadUser } from '../../Action/ActionUser';
import CommentCard from '../CommentCard/CommentCard';
const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) => {
    const [like,setlike]=useState(false);
    const [likeuser,setlikeuser]=useState(false);
    const[commentvalue,setcommentvalue]=useState("");
    const[commentToggle,setcommentToggle]=useState(false);
    const[captionvalue,setcaptionvalue]=useState(caption);
    const[captionToggle,setcaptionToggle]=useState(false);
   
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch();

    const handleLike= async()=>{
      setlike(!like)
      await dispatch(likePost(postId));
      if(isAccount){
        dispatch(getMyPosts());
      }else{ 
        dispatch(getFollowinPosts());
      }
  }

const Addcomment = async(e)=>{  
e.preventDefault()
dispatch(addCommentOnPost(postId,commentvalue));
if(isAccount){
  dispatch(getMyPosts());
}else{ 
  dispatch(getFollowinPosts());
}
}

const updateCaptionHandler=(e)=>{
  e.preventDefault
 dispatch(updatePost(captionvalue,postId));
 dispatch(getMyPosts());
};


const deletePostHnadler= async()=>{
  await dispatch(deletePost(postId));
    dispatch(getMyPosts());
  dispatch(loadUser())
}

useEffect(()=>{
     likes.forEach(item=>{
      if(item._id===user._id){
        setlike(true);
      }
     })
    },[like,user._id])



  return (
    <div className='post bg-white box-border w-full md:w-[60%] pt-0 pb-0 px-[4vw] m-0 rounded-none md:rounded-md md:pb-[1vmax] md:px-[2vmax] md:m-[2vmax]'>
      <div className="postHeader flex items-center justify-end p-[1vmax]">{isAccount?(<Button onClick={()=>setcaptionToggle(!captionToggle)} className='rounded-full text-black opacity-65 '><MoreVert/></Button>):null}</div>
      <img className='w-full' src={postImage} alt="post" />
      <div className="postDetails flex p-[1vmax]">
        <Avatar src={ownerImage} alt='User' className='w-[3vmax] h-[3vmax]'/>
        <Link className='text-black m-[1vmax] ' to={`/user/${ownerId}`}>
          <Typography className='items-center '>
            {ownerName}
          </Typography>
        </Link>
        <Typography className='text-black opacity-55 self-center '>
          {caption}
        </Typography>
      </div>
      <button
      onClick={()=>setlikeuser(!likeuser)}
      disabled={likes.length === 0 ? true:false}
      className='bg-white cursor-pointer my-[1vmax] mx-[2vmax] '>
        <Typography>{likes.length}Likes</Typography>
      </button>
      <div className="postFooter">
        <Button onClick={handleLike} className='text-black opacity-75 my-0 mx-[1vmax] rounded-full transition-all  hover:translate-y-[-4px] duration-500  '>
        {like?<Favorite className='text-red-600 text-red md:text-[1.7vmax] text-[8vw]' />:<FavoriteBorder className='text-black md:text-[1.7vmax] text-[8vw]'/>}
        </Button>
        <Button onClick={()=>setcommentToggle(!commentToggle)} className='text-black opacity-75 my-0 mx-[1vmax] rounded-full transition-all  hover:translate-y-[-4px] duration-500  '>
            <ChatBubbleOutline
            className='text-black md:text-[1.7vmax] text-[8vw]'/>
        </Button>
        {isDelete?(<Button onClick={deletePostHnadler} className='text-black opacity-75 my-0 mx-[1vmax] rounded-full transition-all  hover:translate-y-[-4px] duration-500  '>
            <DeleteOutline className='text-black md:text-[1.7vmax] text-[8vw]'/>
        </Button>):null}
      </div>
      <Dialog  
      open={likeuser}
      onClose={()=>setlikeuser(!likeuser)}
      >
<div className="DialogBox min-w-[500px] h-[70vh] p-[2vmax]">
  <Typography variant='h4'>Liked By</Typography>
  {
    likes.map(like =>( <User
      key={like._id}
     userId={like._id}
     name={like.name}
     avatar={"https://images.unsplash.com/photo-1718525622204-d5216b51e2eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"}
     />))
  }
</div>
      </Dialog>
      <Dialog  
      open={commentToggle}
      onClose={()=>setcommentToggle(!commentToggle)}
      >
<div className="DialogBox min-w-[600px] h-[70vh] p-[2vmax]">
  <Typography variant='h4'>comments</Typography>
  <form className='commentForm flex m-[1vmax]' onSubmit={Addcomment}>
    <input
    className='w-full px-[2vmax] py-[1vmax] outline-none border-2  '
    type="text"
      value={commentvalue}
      onChange={(e)=> setcommentvalue(e.target.value)}
      placeholder='commnent Here'
      required
    />
    <Button className='rounded-none' type='submit' variant='contained'>Comment</Button>
  </form>
  {
    comments.length> 0? comments.map((item) =>(
      <CommentCard
      key={item._id}
      userId={item.user._id}
      name={item.user.name}
      avatar={"https://images.unsplash.com/photo-1718879326756-c7ce3469deed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"}
      comment={item.comment}
      commentId={item._id}
      postId={postId}
      isAccount={isAccount}
      />
    )):<Typography>no comment yet</Typography>
  }
</div>
      </Dialog>



      <Dialog  
      open={captionToggle}
      onClose={()=>setcaptionToggle(!captionToggle)}
      >
<div className="DialogBox min-w-[600px] h-[70vh] p-[2vmax]">
  <Typography variant='h4'>Update Caption</Typography>
  <form className='commentForm flex m-[1vmax]' onSubmit={updateCaptionHandler}>
    <input
    className='w-full px-[2vmax] py-[1vmax] outline-none border-2  '
    type="text"
      value={captionvalue}
      onChange={(e)=> setcaptionvalue(e.target.value)}
      placeholder='caption Here'
      required
    />
    <Button className='rounded-none' type='submit' variant='contained'>Update</Button>
  </form>
</div>
      </Dialog>

     


    </div>
  );
}

export default Post;
