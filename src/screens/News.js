import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { newsList } from "../actions/newsActions";
import Loader from "../components/Loader";
const News = () => {
  const dispatch = useDispatch();
  const getNews = useSelector((state) => state.newslist);
  const { loading, news, error } = getNews;
  useEffect(() => {
    dispatch(newsList());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="container my-3">Top news of apple </div>
          <div className="d-flex flex-wrap container gap-5 mt-4">
            {news.map((renderNews, index) => (
              <Cards key={index} news={renderNews} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default News;
