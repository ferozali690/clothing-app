import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import {legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {createLogger} from "redux-logger";
import AllReducers from "./store/store.js";
const middleware = [];
const logger=createLogger()
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(AllReducers, applyMiddleware(...middleware,logger));

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create a root for React 18
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
