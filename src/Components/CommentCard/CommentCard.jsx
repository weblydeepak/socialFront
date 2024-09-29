import { Delete } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import User from '../User/User'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCommentOnPost } from '../../Action/ActionPost'
import { getFollowinPosts, getMyPosts } from '../../Action/ActionUser'

const CommentCard = (
  {  userId,
    name,
    avatar,
    comment,
    commentId,
    postId,
    isAccount,}
) => {
  const dispatch = useDispatch()
  const {user} = useSelector ((state)=>state.user)
  const DeleteThisComment = ()=>{
    dispatch(deleteCommentOnPost(postId,commentId));
    if(isAccount){
        dispatch(getMyPosts())
    }else{ 
      dispatch(getFollowinPosts());
    }
  }
  return (
    <div className='comentuser flex items-center gap-3'>
        <Link className=' flex  text-black  items-center self-start transition-all duration-500 hover:translate-y-[-10px] my-3' to={`/user/${userId}`}>
        <img className='h-[4vmax] w-[4vmax] m-[2vmax] rounded-full border-3 ' src={avatar} alt={name} />
        </Link>
        <Typography className='min-w-[6vmax]'>
            {name}
        </Typography>
        <Typography >  
            {comment}
        </Typography>
        {isAccount?( <Button className='text-red-500'onClick={DeleteThisComment}>
            <Delete/>
        </Button>):userId === user._id?(
          <Button className='text-red-500'onClick={DeleteThisComment}>
            <Delete/>
        </Button>):null}
    </div>
  )
}

export default CommentCard