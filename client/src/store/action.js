import axios from "axios";

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
        ? await axios.post("http://localhost:4000/upload", data, config())
        : "";
      if (result.status === 200) {
        dispatch({ type: "IMAGE_UPLOADED" });
        dispatch(getImages());
        dispatch({ type: "CLEAR_FILE" });
      }
    } catch (error) {
      dispatch({ type: "UPLOAD_FAILED", error });
    }
  };
};

//download image
export const getImages = () => {
  return async dispatch => {
    const result = await axios.get("http://localhost:4000/getimages");
    let images = result.data;
    if (result.status === 200) {
      dispatch({ type: "STORE_DOWNLOADED_IMAGES", images });
    }
  };
};
