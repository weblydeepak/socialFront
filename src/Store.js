import { configureStore } from "@reduxjs/toolkit";
import { allUsersReducer, postOfFollowingReducer, userReducer } from "./Reducer/User";
import { likeReducer, mypostReducer } from "./Reducer/Post";
const store = configureStore({
     reducer:{
        user:userReducer,
        postOfFollowing:postOfFollowingReducer,
        allUsers:allUsersReducer,
        like:likeReducer,
        myPosts :mypostReducer,
     }
});

export default store;