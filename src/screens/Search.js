import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSearchList } from "../actions/newsActions";
import Cards from "../components/Cards";
import Loader from "../components/Loader";

const Search = () => {
  const dispatch = useDispatch();
  const getNews = useSelector((state) => state.searchlist);
  const { loading, search_news, error } = getNews;

  const changeHandler = (search) => {
    dispatch(newSearchList(search));
  };

  return (
    <div className="container mt-3">
      <div className="input-group w-25 ">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          onChange={(e) => changeHandler(e.target.value)}
        />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="d-flex flex-wrap container gap-5 mt-4">
            {search_news.map((renderNews, index) => (
              <Cards key={index} news={renderNews} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
