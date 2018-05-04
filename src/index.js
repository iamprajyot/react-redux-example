import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPanelComponent from './components/MainPanelComponent';
import registerServiceWorker from './registerServiceWorker';
import index from "./js/index"
import store from "./js/store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <MainPanelComponent />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
