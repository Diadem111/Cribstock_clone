import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store,persistor} from "../src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
// import {ContextProvider} from "./Context/ContextProvider";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}> 
    <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>
  </BrowserRouter>
  
);  
reportWebVitals();
