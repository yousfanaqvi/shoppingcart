import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import App from "./App"
import store from "./store/index";
import "./index.css";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.REACT_APP_NODE_ENV === 'production') {
  disableReactDevTools();
  console.log = function () {};
  console.disableYellowBox = true;
}
console.log(process.env.REACT_APP_NODE_ENV);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
        
    </Provider>
    </React.StrictMode>
  )
