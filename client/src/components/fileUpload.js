import React from "react";

const FileUpload = props => {
  const {
    handleFileChange,
    uploadImage,
    file,
    toasterItem,
    percentCompleted
  } = props;
  return (
    <div>
      <input
        type="file"
        accept="image/* "
        onChange={e => handleFileChange(e.target.files[0])}
      />
      <button onClick={() => uploadImage(file)}>upload</button>
      {toasterItem ? <div>{toasterItem}</div> : ""}
      {percentCompleted === 0 ? (
        ""
      ) : (
        <progress min={0} max={100} value={percentCompleted} />
      )}
    </div>
  );
};

export default FileUpload;
