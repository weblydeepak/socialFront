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


