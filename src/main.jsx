import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import store from "./assets/redux/store";
// import { Provider } from 'react-redux';
import { PostContextProvider } from './assets/context/PostContext.jsx'
useContext
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      {/* <Provider store={ store }> */}
      <App />
      {/* </Provider> */}
    </PostContextProvider>
  </React.StrictMode>,
)
