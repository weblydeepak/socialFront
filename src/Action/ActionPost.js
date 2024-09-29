import axios from "axios";

export const likePost = (id) => async (dispatch) => {
  axios.defaults.withCredentials = true;
  try {
    dispatch({
      type: "likesRequest",
    });
    const { data } = await axios.get(`http://localhost:7082/api/post/${id}`);
    dispatch({
      type: "likesSuccess",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "likesFailure",
      payload: err.response.data.message,
    });
  }
};

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  axios.defaults.withCredentials = true;
  try {
    dispatch({
      type: " addCommentRequest",
    });
    const { data } = await axios.put(
      `http://localhost:7082/api/post/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "addCommentSuccess",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "addCommentFailure",
      payload: err.response.data.message,
    });
  }
};

export const createNewPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: "newPostRequest",
    });

    const { data } = await axios.post(
      'http://localhost:7082/api/post/upload',

      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "newPostSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "newPostFailure",
      payload: error.response.data.message,
    });
  }
}


export const updatePost = (caption,id) => async (dispatch) => {
  try {
    dispatch({
      type: "updateCaptionRequest",
    });

    const { data } = await axios.put(
      `http://localhost:7082/api/post/${id}`,
      {
        caption,
      },
      { 
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "updateCaptionSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateCaptionFailure",
      payload: error.response.data.message,
    });
  }
}


export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  axios.defaults.withCredentials = true;

  try {
    dispatch({
      type: " deleteCommentRequest",
    });
    const { data } = await axios.delete(
      `http://localhost:7082/api/post/comment/${id}`,
      {
        data: { commentId },
      }
    );
    dispatch({
      type: "deleteCommentSuccess",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "deleteCommentFailure",
      payload: err.response.data.message,
    });
  }
};


export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const { data } = await axios.delete(
      `http://localhost:7082/api/post/${id}`,
    );
    dispatch({
      type: "deletePostSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deletePostFailure",
      payload: error.response.data.message,
    });
  }
}

