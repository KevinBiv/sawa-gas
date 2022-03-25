import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/css/output.css";
import "./assets/styles/css/main.css";
//import './assets/js/responsiveSidebar'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
}

export default App;
