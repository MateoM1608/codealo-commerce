import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import counterReducer from '../../features/counter/counterSlice';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  allProducts: [],
  product:[],
  detailProducts: [],
  categories: []

};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
