import React, { Component } from "react";
import FileUpload from "./fileUpload";
import Images from "./getImages";

import io from "socket.io-client";
import { connect } from "react-redux";

import {
  getImages,
  socketCall,
  handleFileChange,
  uploadImage
} from "../store/action";

class Container extends Component {
  render() {
    return (
      <div>
        <FileUpload {...this.props} />
        <Images {...this.props} />
      </div>
    );
  }

  componentWillMount() {
    this.props.getImages();
    let socket = io.connect("http://192.168.1.3:4000");
    socket.on("news", data => {
      console.log("fire it", data);
      this.props.socketCall(data.result.reverse());
      socket.emit("my other event", { my: "data" });
    });
  }
}
const mapStateToProps = state => {
  return {
    images: state.content.images,
    file: state.content.file,
    toasterItem: state.content.toasterItem,
    percentCompleted: state.content.percentCompleted
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFileChange: file => dispatch(handleFileChange(file)),
    uploadImage: file => dispatch(uploadImage(file)),
    getImages: () => dispatch(getImages()),
    socketCall: data => dispatch(socketCall(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
