import {
  NEWS_COUNTRY_LIST_REQUEST,
  NEWS_COUNTRY_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_SEARCH_LIST_REQUEST,
  NEWS_SEARCH_LIST_SUCCESS,
} from "../constants/newsConstants";
import axios from "axios";
export const newsList = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });
    const { data } = await axios.get(
      `everything?q=apple&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: NEWS_LIST_SUCCESS, payload: data.articles });
  } catch (error) {
    dispatch({ type: NEWS_LIST_FAIL, payload: error.response.data.code });
  }
};

export const newsCountryList = (country) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_COUNTRY_LIST_REQUEST });
    const { data } = await axios.get(
      `top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: NEWS_COUNTRY_LIST_SUCCESS, payload: data.articles });
  } catch (error) {
    dispatch({ type: NEWS_LIST_FAIL, payload: error.response.data.code });
  }
};

export const newSearchList = (search) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SEARCH_LIST_REQUEST });
    const { data } = await axios.get(
      `everything?q=${search}&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({ type: NEWS_SEARCH_LIST_SUCCESS, payload: data.articles });
  } catch (error) {
    dispatch({ type: NEWS_LIST_FAIL, payload: error.response.data.code });
  }
};
