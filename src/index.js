import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./controllers/store/configurestore";
import AppRouter from "./routers/router";
import { fetchProductList } from "./controllers/actions/index";
import "./styles/base.styl";

const store = configureStore();
store.dispatch(fetchProductList());
const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
