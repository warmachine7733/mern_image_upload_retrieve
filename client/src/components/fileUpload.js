import React from "react";
import { connect } from "react-redux";
import { handleFileChange, uploadImage } from "../store/action";

const FileUpload = props => {
  const { handleFileChange, uploadImage, file, toasterItem } = props;
  console.log("...file", props);
  return (
    <div>
      <input
        type="file"
        accept="image/* "
        onChange={e => handleFileChange(e.target.files[0])}
      />
      <button onClick={() => uploadImage(file)}>upload</button>
      {toasterItem ? <div>{toasterItem}</div> : ""}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    file: state.content.file,
    toasterItem: state.content.toasterItem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFileChange: file => dispatch(handleFileChange(file)),
    uploadImage: file => dispatch(uploadImage(file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);
