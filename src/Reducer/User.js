import { createReducer } from "@reduxjs/toolkit";
export const initialState ={
    isAuthenticated: false,
};
export const LoginRequest="LoginRequest";
export const LoginSuccess="LoginSuccess";
export const LoginFailure="LoginFailure";
export const RegisterRequest="RegisterRequest";
export const RegisterSuccess="RegisterSuccess";
export const RegisterFailure="RegisterFailure";
export const LoadUserRequest="LoadUserRequest";
export const LoadUserSuccess="LoadUserSuccess";
export const LoadUserFailure="LoadUserFailure";
export const postOfFollowingRequest="postOfFollowingRequest";
export const postOfFollowingSuccess="postOfFollowingSuccess";
export const postOfFollowingFailure="postOfFollowingFailure";
export const clearErrors="clearErrors";
export const allUsersRequest ="allUsersRequest";
export const allUsersSuccess ="allUsersSuccess";
export const allUsersFailure ="allUsersFailure";
export const LogoutUserRequest="LogoutUserRequest";
export const LogoutUserSuccess="LogoutUserSuccess";
export const LogoutUserFailure="LogoutUserFailure";


export const userReducer = createReducer(initialState,(builder)=>{
   builder
   .addCase(LoginRequest,(state)=>{
       state.loading= true; 
    })
    .addCase(LoginSuccess,(state,action)=>{
        state.loading= false;
        state.user=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(LoginFailure,(state,action)=>{
        state.loading= false;
        state.error=action.payload;
        state.isAuthenticated=false;
    })
    .addCase(RegisterRequest,(state)=>{
        state.loading= true;
    })
    .addCase(RegisterSuccess,(state,action)=>{
        state.loading= false;
        state.user=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(RegisterFailure,(state,action)=>{
        state.loading= false;
        state.error=action.payload;
        state.isAuthenticated=false;
    })
    .addCase(LoadUserRequest,(state)=>{
        state.loading= true;
    })
    .addCase(LoadUserSuccess,(state,action)=>{
        state.loading= false;
        state.user=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(LoadUserFailure,(state,action)=>{
        state.loading= false;
        state.error=action.payload;
        state.isAuthenticated=false;
    })
    .addCase(LogoutUserRequest,(state)=>{
        state.loading= true;
    })
    .addCase(LogoutUserSuccess,(state,action)=>{
        state.loading= false;
        state.user=null;
        state.isAuthenticated=false;
    })
    .addCase(LogoutUserFailure,(state,action)=>{
        state.loading= false;
        state.error=action.payload;
        state.isAuthenticated=true;
    })
    .addCase(clearErrors,(state)=>{
    state.error=null;
    })
    
});
export const postOfFollowingReducer = createReducer(initialState,(builder)=>{
   builder
   .addCase(postOfFollowingRequest,(state)=>{
       state.loading= true; 
    })
   .addCase(postOfFollowingSuccess,(state,action)=>{
       state.loading= false; 
       state.posts=action.payload;
    })
   .addCase(postOfFollowingFailure,(state,action)=>{
       state.loading= false; 
       state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;
    })
    
});
export const allUsersReducer = createReducer(initialState,(builder)=>{
   builder
   .addCase(allUsersRequest,(state)=>{
       state.loading= true; 
    })
   .addCase(allUsersSuccess,(state,action)=>{
       state.loading= false; 
       state.users=action.payload;
    })
   .addCase(allUsersFailure,(state,action)=>{
       state.loading= false; 
       state.error=action.payload;
    })
    .addCase(clearErrors,(state)=>{
        state.error=null;
    })
    
});
