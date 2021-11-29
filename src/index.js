import React from "react";
import ReactDOM from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

// react dev tools 활성화
// const store = createStore(rootReducer, composeWithDevTools());

// 미들웨어를 스토어에 적용
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
