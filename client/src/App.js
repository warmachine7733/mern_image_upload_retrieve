import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Container from "./components/index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
