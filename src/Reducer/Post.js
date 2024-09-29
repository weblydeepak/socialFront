import { createReducer } from "@reduxjs/toolkit";

export const likesRequest="likesRequest";
export const likesSuccess="likesSuccess";
export const likesFailure="likesFailure";
export const clearErrors="clearErrors";
export const clearMessage="clearMessage";
export const addCommentRequest="addCommentRequest";
export const addCommentSuccess="addCommentSuccess";
export const addCommentFailure="addCommentFailure";
export const deleteCommentRequest ="deleteCommentRequest";
export const deleteCommentSuccess ="deleteCommentSuccess";
export const deleteCommentFailure ="deleteCommentFailure";
export const mypostRequest="mypostRequest";
export const mypostSuccess="mypostSuccess";
export const mypostFailure="mypostFailure";

export const  newPostRequest ="newPostRequest";
export const  newPostSuccess ="newPostSuccess";
export const  newPostFailure ="newPostFailure";

export const updateCaptionRequest="updateCaptionRequest";
export const updateCaptionSuccess="updateCaptionSuccess";
export const updateCaptionFailure="updateCaptionFailure";

export const deletePostRequest="deletePostRequest";
export const deletePostSuccess="deletePostSuccess";
export const deletePostFailure="deletePostFailure";

const initialState ={}

export const likeReducer = createReducer(initialState,(builder)=>{
builder
.addCase(likesRequest,(state)=>{
    state.loading= true;
})
.addCase(likesSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(likesFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
}) 
.addCase(addCommentRequest,(state)=>{
    state.loading= true;
})
.addCase(addCommentSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(addCommentFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
}) 
.addCase(deleteCommentRequest,(state)=>{
    state.loading= true;
})
.addCase(deleteCommentSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(deleteCommentFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
}) 
.addCase(newPostRequest,(state)=>{
    state.loading= true;
})
.addCase(newPostSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(newPostFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
})

.addCase(updateCaptionRequest,(state)=>{
    state.loading= true;
})
.addCase(updateCaptionSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(updateCaptionFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
}) 
.addCase(deletePostRequest,(state)=>{
    state.loading= true;
})
.addCase(deletePostSuccess,(state,action)=>{
    state.loading= false;
    state.message=action.payload;
})
.addCase(deletePostFailure,(state,action)=>{
    state.loading= false;
    state.error=action.payload;
}) 

.addCase(clearErrors,(state)=>{
    state.error=null;
})

.addCase(clearMessage,(state)=>{
    state.message=null;
})

});

export const mypostReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase (mypostRequest,(state )=>{
        state.loading=true;
    })
    .addCase (mypostSuccess,(state, action)=>{
        state.loading=false
        state.posts= action.payload;
    })
    .addCase (mypostFailure,(state, action)=>{
        state.loading=false
        state.error=action.payload;
    })
    .addCase(clearMessage,(state)=>{
        state.message=null;
    })
})