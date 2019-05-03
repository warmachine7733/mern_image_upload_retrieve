import React from "react";
import "./index.css";

const nodeServer = process.env["REACT_APP_NODE_SERVER"];

const Images = props => {
  const { images } = props;

  return (

      
      <div className="mainContainer">
        {/* <button onClick={() => getImages()}>Get images</button> */}
        images y-scroll only
        <div className="imageContainer">
          {images.length !== 0
            ? images.map((eachImage, i) => {
                return (
                  <div key={i} className="eachImage">
                    <img
                      src={`${nodeServer}/images/${eachImage.img_url}`}
                      alt="images"
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
  );
};

export default Images;
