import axios from "axios";
export const loginUser= (email, password) => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"LoginRequest"
        });
        const {data}= await axios.post("http://localhost:7082/api/login",
        {email,password},
        {
         headers:{
         "Content-Type":"application/json"
         },
        });
        dispatch({
            type:"LoginSuccess",
            payload:data.user,
        });
    }catch(err){
      dispatch({
        type:"LoginFailure",
        payload:err.response.data.message
      })
    }
}
export const loadUser= () => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"LoadUserRequest"
        });
        const {data}= await axios.get("http://localhost:7082/api/myProfile");
        dispatch({
            type:"LoadUserSuccess",
            payload:data.user,
        });
    }catch(err){
      dispatch({
        type:"LoadUserFailure",
        payload:err.response.data.message
      })
    }
}
export const getFollowinPosts= () => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"postOfFollowingRequest"
        });
        const {data}= await axios.get("http://localhost:7082/api/posts");
        dispatch({
            type:"postOfFollowingSuccess",
            payload: data.posts,
        });
    }catch(err){
      dispatch({
        type:"postOfFollowingFailure",
        payload:err.response.data.message
      })
    }
}
export const getAllUsers= () => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"allUsersRequest"
        });
        const {data}= await axios.get("http://localhost:7082/api/Users");
        dispatch({
            type:"allUsersSuccess",
            payload: data.users,
        });
    }catch(err){
      dispatch({
        type:"allUsersFailure",
        payload:err.response.data.message
      })
    }
}
export const getMyPosts= () => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"mypostRequest"
        });
        const {data}= await axios.get("http://localhost:7082/api/My/Posts");
        dispatch({
            type:"mypostSuccess",
            payload: data.posts,
        });
    }catch(err){
      dispatch({
        type:"mypostFailure",
        payload:err.response.data.message
      })
    }
}

export const logoutUser= (email, password) => async (dispatch)=>{
  axios.defaults.withCredentials=true;
    try{
        dispatch({
            type:"LogoutUserRequest"
        });
         await axios.get("http://localhost:7082/api/logOut",)
        dispatch({
            type:"LogoutUserSuccess",
        });
    }catch(err){
      dispatch({
        type:"LogoutUserFailure",
        payload:err.response.data.message
      })
    }
}
