import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// import combineReducers from "./store/index";
import logger from 'redux-logger'
// const middle = [thunk, logger]
// const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
//   <Provider store={store}>
  // <Router>
        <App />,
        // </Router>
//   </Provider>,
  document.getElementById('root')
);
