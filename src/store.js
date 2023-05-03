import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newsCountryListReducer,
  newsListReducer,
  newsSearchListReducer,
} from "./reducers/newsReducers";

const reducer = combineReducers({
  newslist: newsListReducer,
  countrylist: newsCountryListReducer,
  searchlist: newsSearchListReducer,
});
const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
