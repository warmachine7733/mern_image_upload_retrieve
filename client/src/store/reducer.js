const initialState = {
  img: "",
  success: false,
  percentCompleted: 0,
  error: "",
  file: "",
  images: []
};

export const content = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_FILE":
      return {
        ...state,
        file: action.file
      };
    case "IMAGE_UPLOADED":
      return {
        ...state,
        success: true
      };
    case "UPLOAD_FAILED":
      return {
        ...state,
        error: action.error
      };
    case "PROGRESS":
      return {
        ...state,
        percentCompleted: action.percentCompleted
      };

    case "STORE_DOWNLOADED_IMAGES":
      return {
        ...state,
        images: action.images
      };
    default:
      return {
        ...state
      };
  }
};
