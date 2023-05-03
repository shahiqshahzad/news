import {
  NEWS_COUNTRY_LIST_FAIL,
  NEWS_COUNTRY_LIST_REQUEST,
  NEWS_COUNTRY_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_SEARCH_LIST_REQUEST,
  NEWS_SEARCH_LIST_SUCCESS,
} from "../constants/newsConstants";

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, news: [] };
    case NEWS_LIST_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsCountryListReducer = (
  state = { country_news: [] },
  action
) => {
  switch (action.type) {
    case NEWS_COUNTRY_LIST_REQUEST:
      return { loading: true, country_news: [] };
    case NEWS_COUNTRY_LIST_SUCCESS:
      return { loading: false, country_news: action.payload };
    case NEWS_COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsSearchListReducer = (state = { search_news: [] }, action) => {
  switch (action.type) {
    case NEWS_SEARCH_LIST_REQUEST:
      return { loading: true, search_news: [] };
    case NEWS_SEARCH_LIST_SUCCESS:
      return { loading: false, search_news: action.payload };
    case NEWS_COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
