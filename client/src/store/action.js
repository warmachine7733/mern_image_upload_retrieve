import axios from "axios";
const nodeServer = process.env["REACT_APP_NODE_SERVER"];
console.log(nodeServer);

//handling file on change
export const handleFileChange = file => {
  return dispatch => {
    dispatch({ type: "STORE_FILE", file });
  };
};

//upload image
export const uploadImage = file => {
  return async (dispatch, getState) => {
    try {
      const config = () => {
        return {
          onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            dispatch({ type: "PROGRESS", percentCompleted });
          }
        };
      };
      const data = new FormData();
      data.append("image", file);
      const result = file
        ? await axios.post(`${nodeServer}/upload`, data, config())
        : "";
      if (result.status === 200) {
        dispatch({ type: "IMAGE_UPLOADED" });
        dispatch(getImages());
        let percentCompleted = 0;
        dispatch({ type: "PROGRESS", percentCompleted });
        dispatch({ type: "CLEAR_FILE" });
      }
      if (result.status === 201) {
        dispatch({ type: "SHOW_MESSAGE" });
      }
    } catch (error) {
      dispatch({ type: "UPLOAD_FAILED", error });
    }
  };
};

//download image
export const getImages = () => {
  return async dispatch => {
    const result = await axios.get(`${nodeServer}/getimages`);
    let images = result.data;
    if (result.status === 200) {
      dispatch(socketCall(images));
    }
  };
};
export const socketCall = images => {
  return {
    type: "STORE_DOWNLOADED_IMAGES",
    images
  };
};
