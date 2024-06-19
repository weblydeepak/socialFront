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
    
});
