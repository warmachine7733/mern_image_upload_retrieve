import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { getImages } from "../store/action";
let server = "http://localhost:4000/images/";

const Images = props => {
  const { getImages, images } = props;
  return (
    <div className="mainContainer">
      <button onClick={() => getImages()}>Get images</button>
      <div className="imageContainer">
        {images &&
          images.map((eachImage, i) => {
            return (
              <div key={i} className="eachImage">
                <img src={`${server}${eachImage.img_url}`} alt="images" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    images: state.content.images
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getImages: () => dispatch(getImages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
