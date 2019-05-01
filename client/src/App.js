import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import FileUpload from "./components/fileUpload";
import Images from "./components/getImages";

const App = () => {
  return (
    <Provider store={store}>
      <FileUpload />
      <Images />
    </Provider>
  );
};

export default App;
